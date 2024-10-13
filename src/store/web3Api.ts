import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getUniqueId } from 'modules/common/utils/getUniqueId';

export const WalletCacheTags = {
  account: `account-${getUniqueId()}`,
};

export const CommonCacheTags = {
  btcBalance: `btcBalance-${getUniqueId()}`,
  evmTokenBalance: `evmTokenBalance-${getUniqueId()}`,
  lbtcBalance: `lbtcBalance-${getUniqueId()}`,
  lbtcAllowance: `lbtcAllowance-${getUniqueId()}`,
};

export const DashboardCacheTags = {
  deposits: `deposits-${getUniqueId()}`,
  unstakeHistory: `unstakeHistory-${getUniqueId()}`,
};

export const EarlyAccessCacheTags = {
  accessData: `accessData-${getUniqueId()}`,
};

export const web3Api = createApi({
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: () => ({}),
  reducerPath: 'web3Api',
  tagTypes: [
    ...Object.values(WalletCacheTags),
    ...Object.values(CommonCacheTags),
    ...Object.values(DashboardCacheTags),
    ...Object.values(EarlyAccessCacheTags),
  ],
});
