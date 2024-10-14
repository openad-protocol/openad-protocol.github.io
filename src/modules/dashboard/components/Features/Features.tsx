import { Box, BoxProps, Typography } from '@mui/material';
import { useFeaturesStyles } from './useFeaturesStyles';
import { ReactTyped } from 'react-typed';
import { Logo } from 'modules/layout';

export function Features({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useFeaturesStyles();

  return (
    <Box component="div" className={classes.root} sx={sx}>
      <Typography
        sx={theme => ({
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
          },
        })}
      >
        <Logo />
        Builds
      </Typography>

      <Typography
        sx={theme => ({
          color: theme.palette.primary.main,
          lineHeight: theme.typography.pxToRem(87),
          minHeight: theme.typography.pxToRem(87),
          textAlign: 'center',
        })}
      >
        <ReactTyped
          strings={[
            'Trusted and Effective',
            'Transparent',
            'Native ',
            'High-return ',
          ]}
          typeSpeed={40}
          backSpeed={50}
          cursorChar=""
          loop
        />
      </Typography>

      <Typography textAlign="center">Advertising on Telegram</Typography>
    </Box>
  );
}
