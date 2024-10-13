// import { bridgeRoutesConfig } from 'modules/bridge';
import { useTranslation } from 'modules/i18n';

import { Locale } from 'modules/i18n';
import { useMemo } from 'react';

export const translation = {
  [Locale.en]: {
    dashboard: 'Dashboard',
    docs: 'Docs',
    faq: 'FAQ',
    swap: 'Swap',
    defi: 'DeFi',
    bridge: 'Bridge',
    vault: 'Vault',
  },
};

type INavItem = {
  title: string;
  link: string;
  isExternal?: boolean;
} | null;

export const useNavigationItems = (): INavItem[] => {
  const { keys, t } = useTranslation(translation);

  return useMemo<INavItem[]>(
    () => [
      {
        title: 'Features',
        link: `#features`,
      },

      {
        title: 'For Advertiser',
        link: `#for-advertiser`,
      },
      {
        title: 'For Publisher',
        link: `#for-publisher`,
      },
    ],
    [keys, t],
  );
};
