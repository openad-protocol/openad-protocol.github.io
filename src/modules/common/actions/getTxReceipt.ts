import { OChainId, TChainId, getReadProvider } from 'modules/api';
import { web3Api } from 'store/web3Api';
import { TransactionReceipt } from 'web3-core';

interface IUseGetTxReceiptQueryArgs {
  txHash: string;
  chainId?: TChainId;
}

export const {
  useGetTxReceiptQuery,
  endpoints: { getTxReceipt },
} = web3Api.injectEndpoints({
  endpoints: build => ({
    getTxReceipt: build.query<
      TransactionReceipt | null,
      IUseGetTxReceiptQueryArgs
    >({
      queryFn: async ({ txHash, chainId = OChainId.ethereum }) => {
        const provider = await getReadProvider(chainId);
        const web3 = provider.getWeb3();

        const receipt = await web3.eth.getTransactionReceipt(txHash);

        if (!receipt) {
          return { data: null };
        }

        return { data: receipt };
      },
    }),
  }),
});
