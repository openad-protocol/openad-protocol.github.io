import axios from 'axios';
import { SENTIO_API_KEY } from 'modules/common/const';
import { getSentioLombaPointsSql } from '../utils/getSentioQuerySql';

interface LombaPointsData {
  result: {
    rows: {
      account: string;
      points_json: string;
    }[];
  };
}

interface LombaPointJson {
  'openad-holding-points-eth': {
    bpoints: number;
    lpoints: number;
    lbtc_balance: number;
    multiplier: number;
  };
  'openad-uniswapv3-ethereum': {
    bpoints: number;
    lpoints: number;
    lbtc_balance: number;
    multiplier: number;
  };
}
export type GetLombaPointsFromSentioReturn = {
  points: number;
  avg_multiplier: number;
  uniswap_multiplier: number;
};
export const getLombaPointsFromSentio = async (address: string) => {
  const url =
    'https://app.sentio.xyz/api/v1/analytics/openad/openad-holding-points-eth/sql/execute';
  const sql = getSentioLombaPointsSql(address);
  try {
    const { data }: { data: LombaPointsData } = await axios.post(
      url,
      {
        sqlQuery: {
          sql,
        },
      },
      {
        headers: {
          'api-key': SENTIO_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    );
    // console.log('res: ', data);
    const { rows } = data.result;
    if (rows && rows[0]) {
      try {
        const data = JSON.parse(rows[0].points_json) as LombaPointJson;
        const points = (
          data['openad-holding-points-eth'].bpoints +
          data['openad-holding-points-eth'].lpoints +
          data['openad-uniswapv3-ethereum'].bpoints +
          data['openad-uniswapv3-ethereum'].lpoints
        ).toFixed(2);
        const avg_multiplier =
          ((data['openad-holding-points-eth'].multiplier *
            data['openad-holding-points-eth'].lbtc_balance +
            data['openad-uniswapv3-ethereum'].multiplier) *
            data['openad-uniswapv3-ethereum'].lbtc_balance) /
          (data['openad-holding-points-eth'].lbtc_balance +
            data['openad-uniswapv3-ethereum'].lbtc_balance);
        const uniswap_multiplier =
          data['openad-uniswapv3-ethereum'].multiplier;
        return {
          points,
          avg_multiplier: Number(avg_multiplier.toFixed(2)),
          uniswap_multiplier,
        };
      } catch (e) {
        throw new Error('Failed to parse openad points json');
      }
    } else {
      return { points: 0, avg_multiplier: 0, uniswap_multiplier: 0 };
    }
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch openad points from sentio');
  }
};
