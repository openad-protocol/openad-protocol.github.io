import { alpha } from '@mui/material';
import { SECOND_FONT_FAMILY } from 'modules/themes';
import { makeStyles } from 'tss-react/mui';

export const useComingSoonStyles = makeStyles()(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },

  box: {
    backgroundColor: alpha(theme.palette.background.paper, 0.84),
    backdropFilter: 'blur(12px)',
    padding: theme.spacing(8, 2),
    textAlign: 'center',
    borderRadius: 16,

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(16, 4),
    },
  },

  loader: {
    width: '1em !important',
    height: '1em !important',
    fontSize: theme.typography.pxToRem(60),
    color: theme.palette.customMain[500],
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
      fontSize: theme.typography.pxToRem(100),
    },
  },

  title: {
    fontFamily: SECOND_FONT_FAMILY,
    fontWeight: 400,
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(40),
    },
  },

  text: {
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(18),
    },

    '& a': {
      color: theme.palette.customMain[800],

      '&:hover': {
        color: theme.palette.customMain[900],
        textDecoration: 'underline',
      },
    },
  },
}));
