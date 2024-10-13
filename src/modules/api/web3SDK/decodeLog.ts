import { TChainId } from '../chainIDs';
import { getReadProvider } from '../web3Provider';
import { TransactionReceipt } from 'web3-core';

type Args = {
  eventIndex: number;
  abi: any;
  eventName: string;
  chainId: TChainId;
  logs: TransactionReceipt['logs'];
};

export async function decodeLog({
  chainId,
  logs,
  eventIndex,
  abi,
  eventName,
}: Args) {
  try {
    const provider = await getReadProvider(chainId);
    const web3 = provider.getWeb3();
    const log = logs[eventIndex];

    const inputs =
      abi.find((def: any) => def.name === eventName && def.type === 'event')
        ?.inputs ?? [];
    const decodedLog = web3.eth.abi.decodeLog(inputs, log.data, log.topics);
    return decodedLog;
  } catch (error) {
    console.error(error);
  }
}
