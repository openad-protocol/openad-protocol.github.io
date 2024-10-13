import {
  Backdrop,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import { TWITTER_LINK, WEBSITE_LINK } from 'modules/common/const';
import { useTranslation } from 'modules/i18n';
import { translation } from './translation';
import { useComingSoonStyles } from './useComingSoonStyles';

export function ComingSoon(): JSX.Element {
  const { classes } = useComingSoonStyles();
  const { keys, t } = useTranslation(translation);

  return (
    <Backdrop open className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.box}>
          <CircularProgress className={classes.loader} />

          <Typography className={classes.title} variant="h2">
            {t(keys.title)}
          </Typography>

          <Typography className={classes.text}>
            {t(
              keys.text,
              { website: WEBSITE_LINK, twitter: TWITTER_LINK },
              true,
            )}
          </Typography>
        </div>
      </Container>
    </Backdrop>
  );
}
