import { IS_PROD } from 'modules/common/const';
import { TBitcoinNetwork } from 'modules/common/types';
import { OChainId } from '../chainIDs';

/**
 * The number of confirmations required for a transaction to be considered final.
 */
export const TOTAL_CONFIRMATIONS = IS_PROD ? 5 : 3;

export const ETH_NETWORK_BY_ENV = IS_PROD
  ? OChainId.ethereum
  : OChainId.holesky;

export const BITCOIN_NETWORK: TBitcoinNetwork = IS_PROD
  ? 'bitcoin'
  : 'bitcoinSignet';
