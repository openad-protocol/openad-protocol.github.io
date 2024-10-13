import { Box, Container, Paper, Typography } from '@mui/material';
import { Section } from 'modules/common/components/Section';
import { useTranslation } from 'modules/i18n';
import { translation } from './translation';
import { useGeoBlockingStyles } from './useGeoBlockingStyles';

export function GeoBlocking(): JSX.Element {
  const { keys, t } = useTranslation(translation);
  const { classes } = useGeoBlockingStyles();

  return (
    <Section centered>
      <Container maxWidth={false} className={classes.root}>
        <Paper className={classes.paper}>
          <Box className={classes.logoWrapper}></Box>
          <Typography variant="h1" className={classes.title}>
            {t(keys.title)}
          </Typography>
        </Paper>
      </Container>
    </Section>
  );
}
