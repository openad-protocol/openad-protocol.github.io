import { TCountryCode, getCountryCode } from 'modules/api';
import { web3Api } from 'store/web3Api';
import { featureConfig } from '../featureConfig';
import { sleep } from '../utils/sleep';

export const { useGetCountryCodeQuery } = web3Api.injectEndpoints({
  endpoints: build => ({
    getCountryCode: build.query<TCountryCode, void>({
      queryFn: async () => {
        if (featureConfig.offlineTesting) {
          await sleep();
          return { data: 'GB' };
        }

        return { data: await getCountryCode() };
      },
    }),
  }),
});
