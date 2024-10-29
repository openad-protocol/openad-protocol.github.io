import { Box, BoxProps, Typography } from '@mui/material';
import { useFeaturesStyles } from './useFeaturesStyles';
import { ReactTyped } from 'react-typed';
import Logo from '/favicon.png';
import { OPEN_SANS_FONT_FAMILY } from 'modules/themes';
import lottie from 'lottie-web';
import { useRef, useEffect } from 'react';

export function Features({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useFeaturesStyles();

  const node = useRef<any>();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: node.current,
      path: '/001.json',
      renderer: 'canvas',
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <Box component="div" className={classes.root} sx={sx}>
      <Box component="div" className={classes.animationBox} ref={node} />

      <Typography
        variant="h1"
        sx={theme => ({
          display: 'flex',
          alignItems: 'flex-start',
          alignContent: 'center',
          // height: theme.typography.pxToRem(76),
          lineHeight: theme.typography.pxToRem(76),

          [theme.breakpoints.down('sm')]: {
            lineHeight: theme.typography.pxToRem(43),
          },
        })}
      >
        <Box
          component="img"
          src={Logo}
          sx={theme => ({
            width: theme.typography.pxToRem(76),
            objectFit: 'contain',
            margin: 0,

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
            lineHeight: theme.typography.pxToRem(76),
            fontWeight: 700,
            whiteSpace: 'pre-wrap',

            [theme.breakpoints.down('sm')]: {
              fontSize: theme.typography.pxToRem(32),
              lineHeight: theme.typography.pxToRem(43),
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
          lineHeight: theme.typography.pxToRem(92),
          minHeight: theme.typography.pxToRem(92),
          textAlign: 'center',
          marginTop: theme.typography.pxToRem(12),

          [theme.breakpoints.down('sm')]: {
            marginTop: theme.typography.pxToRem(6),
            lineHeight: theme.typography.pxToRem(43),
            minHeight: theme.typography.pxToRem(43),
          },
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
      <Typography
        variant="h1"
        textAlign="center"
        sx={theme => ({
          lineHeight: theme.typography.pxToRem(86),

          [theme.breakpoints.down('sm')]: {
            lineHeight: theme.typography.pxToRem(43),
          },
        })}
      >
        Advertising on Telegram
      </Typography>
    </Box>
  );
}
