import { buttonBaseClasses } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useAdsFormatsStyles = makeStyles()(theme => ({
  root: {
    // minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
    padding: theme.spacing(10, 0, 10, 0),

    h1: {
      maxWidth: theme.typography.pxToRem(800),
      textAlign: 'center',
      textTransform: 'capitalize',
    },

    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
        transform: 'translateX(-10%)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  },

  buttonGroup: {
    display: 'flex',
    gap: theme.typography.pxToRem(30),
    marginTop: theme.typography.pxToRem(50),

    [`.${buttonBaseClasses.root}`]: {
      width: theme.typography.pxToRem(200),
      aspectRatio: '200 / 50',
      border: `1px solid #D2D2D2`,
      fontSize: theme.typography.pxToRem(20),
      color: theme.palette.common.black,

      '&.active, &:hover': {
        borderColor: 'transparent',
        backgroundColor: '#2FA0DA',
        color: theme.palette.common.white,
      },
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  adsBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    maxWidth: 1012,
    marginTop: theme.spacing(3.5),
    gap: theme.spacing(7.5),

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
    },
  },

  adsTxtBox: {
    alignSelf: 'center',

    h3: {
      fontSize: theme.typography.pxToRem(32),
      fontWeight: 900,
      marginBottom: theme.spacing(2.5),
    },

    p: {
      color: '#656565',
      fontSize: theme.typography.pxToRem(24),
      lineHeight: '160%',
    },
  },

  adsBg: {
    // animation: 'fadeIn 1s forwards',
  },

  adsFloating: {
    position: 'absolute',

    '&.up': {
      top: 0,
      animation: 'float 5s linear infinite 0.5s',
    },
    '&.down': {
      bottom: 0,
      animation: 'float 5s linear infinite 1.2s',
    },

    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '33%': {
        transform: 'translateY(5px)',
      },
      '66%': {
        transform: 'translateY(-5px)',
      },
    },
  },
}));
