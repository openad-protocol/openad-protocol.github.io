import { IS_PROD } from './const';

export const defaultFeatureConfig = {
  /**
   * If enabled, the app will use the offline data for testing purposes
   * Do not enable this feature in production
   */
  offlineTesting: false,
  /**
   * If enabled, the app will use the dev UI
   * Do not enable this feature in production
   */
  isDevUiEnabled: !IS_PROD,
  isEvmTomoWalletActive: true,
  isBtcTomoWalletActive: true,
  isEvmBitgetWalletActive: true,
  isBtcBitgetWalletActive: true,
  isWalletWithSanctions: false,
  earlyAccess: false,
  geoBlocking: false,
};

export type TFeatureKey = keyof typeof defaultFeatureConfig;

export const featureConfig = IS_PROD
  ? defaultFeatureConfig
  : getFeatureConfigFromSessionStorage();

function getFeatureConfigFromSessionStorage(): Record<TFeatureKey, boolean> {
  writeFeatureConfigToSessionStorage();

  const sessionFeatureConfig = Object.keys(defaultFeatureConfig).reduce(
    (acc, key) => {
      const featureKey = key as TFeatureKey;
      acc[featureKey] = isFeatureActive(featureKey);
      return acc;
    },
    {} as Record<TFeatureKey, boolean>,
  );

  return sessionFeatureConfig;
}

function writeFeatureConfigToSessionStorage(): void {
  Object.entries(defaultFeatureConfig).forEach(([key, value]) => {
    if (sessionStorage.getItem(key) === null) {
      sessionStorage.setItem(key, value.toString());
    }
  });
}

export function isFeatureActive(key: TFeatureKey): boolean {
  return sessionStorage.getItem(key) === 'true';
}

export function setFeatureState(key: TFeatureKey, value: boolean): void {
  sessionStorage.setItem(key, `${value}`);
}
