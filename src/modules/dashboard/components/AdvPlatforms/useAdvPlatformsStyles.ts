import { makeStyles } from 'tss-react/mui';

export const useAdvPlatformsStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(10, 0, 15, 0),

    h1: {
      fontSize: theme.typography.pxToRem(64),
      maxWidth: theme.typography.pxToRem(1000),
      fontWeight: 700,
      textAlign: 'center',
      whiteSpace: 'pre-wrap',
    },
  },

  advBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3.5),
    marginTop: theme.spacing(10),

    li: {
      padding: theme.spacing(3.5),
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing(5),

      img: {
        width: theme.typography.pxToRem(72),
        aspectRatio: '1 / 1',
      },

      p: {
        fontSize: theme.typography.pxToRem(20),
      },
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
    },
  },
}));
