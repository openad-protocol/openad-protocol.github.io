export type TNetworkMode = 'mainnet' | 'testnet';

export const OBtcWalletId = {
  OKX: 'OKX',
  Xverse: 'Xverse',
  Tomo: 'Tomo',
  Bitget: 'Bitget',
} as const;

export type TBtcWalletId = (typeof OBtcWalletId)[keyof typeof OBtcWalletId];

export interface IBtcProviderArgs {
  networkMode?: TNetworkMode;
}

export interface IConnectBtcResponse {
  address: string;
  publicKey: string;
}

export type TConnectBtc = (mode: TNetworkMode) => Promise<IConnectBtcResponse>;
