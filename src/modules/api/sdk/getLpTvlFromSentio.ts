import axios from 'axios';
import { SENTIO_API_KEY } from 'modules/common/const';
interface LpTvlResponseData {
  results: {
    matrix: {
      samples: {
        values: {
          timestamp: string;
          value: number;
        }[];
      }[];
      totalSamples: number;
    };
  }[];
}
export const getLpTvlFromSentio = async () => {
  const url =
    'https://app.sentio.xyz/api/v1/insights/openad/openad-uniswapv3-info/query';
  try {
    const { data }: { data: LpTvlResponseData } = await axios.post(
      url,
      {
        timeRange: {
          start: 'now-1M',
          end: 'now',
          step: 86400,
          timezone: 'Asia/Shanghai',
        },
        limit: 1,
        queries: [
          {
            metricsQuery: {
              query: 'tvl_gauge',
              alias: '',
              id: 'a',
              labelSelector: {},
              aggregate: null,
              functions: [],
              disabled: false,
            },
            dataSource: 'METRICS',
            sourceName: '',
          },
        ],
        formulas: [],
        cachePolicy: {
          noCache: false,
          cacheTtlSecs: 1339200,
          cacheRefreshTtlSecs: 43200,
        },
      },
      {
        headers: {
          'api-key': SENTIO_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    );
    const totalSamples = data.results[0].matrix.totalSamples;
    const values = data.results[0].matrix.samples[totalSamples - 1].values;
    values.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));
    const value = values[values.length - 1].value;
    return Number(value.toFixed(2));
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch tvl from sentio');
  }
};
