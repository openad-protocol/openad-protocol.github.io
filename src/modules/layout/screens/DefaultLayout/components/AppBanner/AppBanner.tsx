import { Container } from '@mui/material';
import { isUkCountry } from 'modules/api';
import { useGetCountryCodeQuery } from 'modules/common/actions/getCountryCode';
import { ACTION_CACHE_LONG } from 'modules/common/const';
import { useTranslation } from 'modules/i18n';
import { translation } from './translation';
import { useAppBannerStyles } from './useAppBannerStyles';

const DISCLAIMER_LINK = 'https://docs.openad.finance/legals/uk-residents';

export function AppBanner(): JSX.Element | null {
  const { classes } = useAppBannerStyles();
  const { keys, t } = useTranslation(translation);

  const { data } = useGetCountryCodeQuery(undefined, {
    refetchOnMountOrArgChange: ACTION_CACHE_LONG,
  });

  if (!isUkCountry(data)) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        {t(keys.text)}

        {` `}

        {!!DISCLAIMER_LINK && (
          <a
            className={classes.link}
            href={DISCLAIMER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            {t(keys.readMore)}
          </a>
        )}
      </Container>
    </div>
  );
}
