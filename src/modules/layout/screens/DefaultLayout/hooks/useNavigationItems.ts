// import { bridgeRoutesConfig } from 'modules/bridge';
import { ADS_LINK, DOC_LINK, FLOW_RATE_LINK } from 'modules/common/const';
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
        link: ADS_LINK,
        isExternal: true,
      },
      {
        title: 'For Volume Owner',
        link: FLOW_RATE_LINK,
        isExternal: true,
      },
      {
        title: 'Documentation',
        link: DOC_LINK,
        isExternal: true,
      },
    ],
    [keys, t],
  );
};
