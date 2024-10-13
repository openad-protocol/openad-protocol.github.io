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
  'lombard-holding-points-eth': {
    bpoints: number;
    lpoints: number;
    lbtc_balance: number;
    multiplier: number;
  };
  'lombard-uniswapv3-ethereum': {
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
    'https://app.sentio.xyz/api/v1/analytics/lombard/lombard-holding-points-eth/sql/execute';
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
          data['lombard-holding-points-eth'].bpoints +
          data['lombard-holding-points-eth'].lpoints +
          data['lombard-uniswapv3-ethereum'].bpoints +
          data['lombard-uniswapv3-ethereum'].lpoints
        ).toFixed(2);
        const avg_multiplier =
          ((data['lombard-holding-points-eth'].multiplier *
            data['lombard-holding-points-eth'].lbtc_balance +
            data['lombard-uniswapv3-ethereum'].multiplier) *
            data['lombard-uniswapv3-ethereum'].lbtc_balance) /
          (data['lombard-holding-points-eth'].lbtc_balance +
            data['lombard-uniswapv3-ethereum'].lbtc_balance);
        const uniswap_multiplier =
          data['lombard-uniswapv3-ethereum'].multiplier;
        return {
          points,
          avg_multiplier: Number(avg_multiplier.toFixed(2)),
          uniswap_multiplier,
        };
      } catch (e) {
        throw new Error('Failed to parse lombard points json');
      }
    } else {
      return { points: 0, avg_multiplier: 0, uniswap_multiplier: 0 };
    }
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch lombard points from sentio');
  }
};
