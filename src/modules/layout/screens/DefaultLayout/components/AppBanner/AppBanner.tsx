import { Container } from '@mui/material';
import { useTranslation } from 'modules/i18n';
import { translation } from './translation';
import { useAppBannerStyles } from './useAppBannerStyles';

const DISCLAIMER_LINK = 'https://docs.openad.finance/legals/uk-residents';

export function AppBanner(): JSX.Element | null {
  const { classes } = useAppBannerStyles();
  const { keys, t } = useTranslation(translation);

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
