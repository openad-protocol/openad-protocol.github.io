import { CURRENT_ENV } from 'modules/common/const';

interface IApiConfig {
  depositAddrApiUrl: string;
  baseApiUrl: string;
  thresholdKey: string;
  _1inchApiUrl: string;
}

const stageConfig: IApiConfig = {
  depositAddrApiUrl: 'https://staging.prod.openad.finance',
  baseApiUrl: 'https://staging.prod.openad.finance',
  thresholdKey: 'd6594eb1-5740-4c2f-bcde-76bb15d85649',
  _1inchApiUrl: 'https://bff.stage.openad.finance/oneinch-api/proxy',
};

const prodConfig: IApiConfig = {
  depositAddrApiUrl: 'https://consortium.openad.finance',
  baseApiUrl: 'https://mainnet.prod.openad.finance',
  thresholdKey: '9a1d5a9a-b5d0-4059-9012-0d77dfd32a95',
  _1inchApiUrl: 'https://bff.stage.openad.finance/oneinch-api/proxy',
};

export const getApiConfig = (env = CURRENT_ENV): IApiConfig =>
  env === 'prod' ? prodConfig : stageConfig;
