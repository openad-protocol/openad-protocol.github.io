import Web3 from 'web3';

export function fromHexToNumber(hex: string): number {
  return +Web3.utils.hexToNumber(hex);
}
