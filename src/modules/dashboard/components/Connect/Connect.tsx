import { Box, BoxProps, Typography } from '@mui/material';
import { useConnectStyles } from './useConnectStyles';
import { Button } from 'modules/common/components/Button';
import { Ripple } from 'modules/common/components/Ripple';
import { ADS_LINK, FLOW_RATE_LINK } from 'modules/common/const';

export function Connect({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useConnectStyles();

  return (
    <Box className={classes.root} sx={sx}>
      <Typography variant="h1">{`Connect with real users and monetize`}</Typography>

      <div className={classes.buttonBox}>
        <Button href={ADS_LINK} target="_blank">
          Launch campaign
          <Ripple />
        </Button>
        <Button href={FLOW_RATE_LINK} target="_blank">
          Start earning
          <Ripple />
        </Button>
      </div>
    </Box>
  );
}
