import { buttonBaseClasses } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useConnectStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(10, 0, 15, 0),
    backgroundColor: '#F2F6FF',

    h1: {
      maxWidth: theme.typography.pxToRem(791),
      textAlign: 'center',
    },
  },

  buttonBox: {
    display: 'flex',
    gap: theme.spacing(5),
    marginTop: theme.spacing(9),

    [`.${buttonBaseClasses.root}`]: {
      width: theme.typography.pxToRem(220),
      height: theme.typography.pxToRem(54),
      fontSize: theme.typography.pxToRem(22),
      borderRadius: theme.typography.pxToRem(5),
      backgroundColor: '#2FA0DA',
      color: theme.palette.common.white,
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
