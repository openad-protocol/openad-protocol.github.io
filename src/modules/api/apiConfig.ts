import { CURRENT_ENV } from 'modules/common/const';

interface IApiConfig {
  depositAddrApiUrl: string;
  baseApiUrl: string;
  thresholdKey: string;
  _1inchApiUrl: string;
}

const stageConfig: IApiConfig = {
  depositAddrApiUrl: 'https://staging.prod.lombard.finance',
  baseApiUrl: 'https://staging.prod.lombard.finance',
  thresholdKey: 'd6594eb1-5740-4c2f-bcde-76bb15d85649',
  _1inchApiUrl: 'https://bff.stage.lombard.finance/oneinch-api/proxy',
};

const prodConfig: IApiConfig = {
  depositAddrApiUrl: 'https://consortium.lombard.finance',
  baseApiUrl: 'https://mainnet.prod.lombard.finance',
  thresholdKey: '9a1d5a9a-b5d0-4059-9012-0d77dfd32a95',
  _1inchApiUrl: 'https://bff.stage.lombard.finance/oneinch-api/proxy',
};

export const getApiConfig = (env = CURRENT_ENV): IApiConfig =>
  env === 'prod' ? prodConfig : stageConfig;
