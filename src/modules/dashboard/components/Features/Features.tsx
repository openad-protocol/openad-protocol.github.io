import { Box, BoxProps, Typography } from '@mui/material';
import { useFeaturesStyles } from './useFeaturesStyles';
import { ReactTyped } from 'react-typed';
import Logo from './assets/logo.jpg';
import { OPEN_SANS_FONT_FAMILY } from 'modules/themes';

export function Features({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useFeaturesStyles();

  return (
    <Box component="div" className={classes.root} sx={sx}>
      <Typography
        variant="h1"
        sx={{ display: 'flex', alignItems: 'flex-start' }}
      >
        <Box
          component="img"
          src={Logo}
          sx={theme => ({
            width: theme.typography.pxToRem(87),
            objectFit: 'contain',
            margin: 'auto',

            [theme.breakpoints.down('sm')]: {
              width: theme.typography.pxToRem(43),
            },
          })}
        />
        Open
        <Typography
          sx={theme => ({
            display: 'contents !important',
            color: theme.palette.primary.main,
            fontFamily: OPEN_SANS_FONT_FAMILY,
            fontSize: theme.typography.pxToRem(64),
            fontWeight: 700,
            whiteSpace: 'pre-wrap',

            [theme.breakpoints.down('sm')]: {
              fontSize: theme.typography.pxToRem(32),
            },
          })}
        >
          AD
        </Typography>{' '}
        Protocol Builds
      </Typography>

      <Typography
        sx={theme => ({
          color: theme.palette.primary.main,
          lineHeight: theme.typography.pxToRem(87),
          minHeight: theme.typography.pxToRem(87),
          textAlign: 'center',
        })}
        variant="h1"
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

      <Typography variant="h1" textAlign="center">
        Advertising on Telegram
      </Typography>
    </Box>
  );
}
