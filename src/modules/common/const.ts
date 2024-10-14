import BigNumber from 'bignumber.js';
import { fromSatoshi } from 'modules/api/utils/convertSatoshi';
import { Days, Seconds, TEnv } from './types';

export const ROOT_PATH = '/';

export const ACTION_CACHE: Seconds = 60;
export const ACTION_CACHE_LONG: Seconds = 600;

export const metaEnv = import.meta.env;
export const CURRENT_ENV = metaEnv.VITE_ENV as TEnv;
export const IS_PROD = CURRENT_ENV === 'prod';
export const IS_STAGE = CURRENT_ENV === 'stage' || !IS_PROD;
export const IS_LOCAL = metaEnv.VITE_IS_LOCAL === 'true';
export const SENTIO_API_KEY = metaEnv.VITE_SENTIO_API_KEY;

export const DECIMAL_PLACES_ZERO = 0;
export const DECIMAL_PLACES = 4;
export const USD_DECIMAL_PLACES = 2;
export const DECIMAL_PLACES_SHORT = 2;
export const DECIMAL_PLACES_BTC = 6;
export const ETH_DECIMALS = 18;
export const ETH_SCALE = 10 ** ETH_DECIMALS;
export const ERC20_TOKEN_DECIMALS = ETH_DECIMALS;
export const BTC_DECIMALS = 8;
export const SATOSHI_SCALE = 10 ** BTC_DECIMALS;

export const HUNDRED_PERCENT = 100;

export const ZERO = new BigNumber(0);
export const ONE = new BigNumber(1);

/**
 * Address of the zero account.
 * Can also be used as a placeholder for unknown addresses.
 */
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const WEBSITE_LINK = IS_PROD
  ? 'https://www.openad.finance'
  : 'https://stage.openad.finance';

export const TWITTER_LINK = 'https://x.com/openad_finance';

export const TERMS_OF_SERVICE_LINK =
  'https://docs.openad.finance/legals/terms-of-service';

export const POLICY_LINK = 'https://docs.openad.finance/legals/privacy-policy';

export const UNSTAKE_INFO_LINK =
  'https://docs.openad.finance/faq/lbtc-faq#can-i-withdraw-my-btc-from-openad';

export const SUPPORT_EMAIL = 'support@openad.finance';

export const UNSTAKING_PERIOD: Days = 7;
export const UNSTAKING_TEXT = `${UNSTAKING_PERIOD} days`;

export const SECURITY_FEE = new BigNumber(0.0002);
export const MIN_UNSTAKE_AMOUNT = SECURITY_FEE.plus(fromSatoshi(1));

export const EARLY_ACCESS_DATE = new Date(1721134800000); // 16 July 2024 9:00 AM EST
export const RELEASE_DATE = new Date(1721739600000); // 23 July 2024 9:00 AM EST

export const RESTRICTED_COUNTRIES_CODES = [
  'US',
  'CU',
  'IR',
  'SY',
  'KP',
  'RU',
  'VE',
  'BY',
  'RU',
];

export const ADS_LINK =
  'https://bf2055756e.node.openad.network/#/campaign/create';

export const FLOW_RATE_LINK =
  'https://bf2055756e.node.openad.network/#/slot/create';

export const DOC_LINK = 'https://docs.openad.network';
