import { Seconds, TEnv } from './types';

export const ROOT_PATH = '/';

export const ACTION_CACHE: Seconds = 60;
export const ACTION_CACHE_LONG: Seconds = 600;

export const metaEnv = import.meta.env;
export const CURRENT_ENV = metaEnv.VITE_ENV as TEnv;
export const IS_PROD = CURRENT_ENV === 'prod';
export const IS_STAGE = CURRENT_ENV === 'stage' || !IS_PROD;
export const IS_LOCAL = metaEnv.VITE_IS_LOCAL === 'true';
export const WEBSITE_LINK = 'https://openad.network';

export const TWITTER_LINK = 'https://x.com/openad_finance';

export const ADS_LINK =
  'https://bf2055756e.node.openad.network/#/campaign/create';

export const FLOW_RATE_LINK =
  'https://bf2055756e.node.openad.network/#/slot/create';

export const DOC_LINK = 'https://docs.openad.network';
