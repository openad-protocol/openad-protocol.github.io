import Contract from 'web3-eth-contract';
import { TChainId } from '../../chainIDs';
import { TLstToken } from '../../tokens';
import { TProvider } from '../../web3Provider';
import { getTokenABI } from './getTokenABI';
import { getTokenAddress } from './getTokenAddress';

/**
 * Returns token contract by token name.
 *
 * @param provider - Web3 provider.
 * @param token - Token name.
 */
export function getTokenContract(
  provider: TProvider,
  token: TLstToken,
): Contract {
  const tokenAddress = getTokenAddress(
    provider.currentChain as TChainId,
    token,
  );

  const abi = getTokenABI(token);

  return provider.createContract(abi, tokenAddress);
}
