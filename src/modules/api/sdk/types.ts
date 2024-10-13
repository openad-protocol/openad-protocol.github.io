export const OChainName = {
  eth: 'BLOCKCHAIN_ETHEREUM',
} as const;

export type TChainName = (typeof OChainName)[keyof typeof OChainName];
