import { makeStyles } from 'tss-react/mui';

export const useSocialStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),

    'li > a': {
      width: theme.typography.pxToRem(28),
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));
