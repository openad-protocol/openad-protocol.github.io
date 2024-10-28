import { makeStyles } from 'tss-react/mui';

export const useAdvPlatformsStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(10, 0, 15, 0),

    h1: {
      maxWidth: theme.typography.pxToRem(1000),
      textAlign: 'center',
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
      // gap: theme.spacing(5)
      maxWidth: theme.typography.pxToRem(511),
      borderRadius: theme.typography.pxToRem(10),

      svg: {
        width: theme.typography.pxToRem(72),
        aspectRatio: '1 / 1',
      },

      h3: {
        fontSize: theme.typography.pxToRem(26),
        marginTop: theme.typography.pxToRem(20),
        fontWeight: 700,
      },

      p: {
        marginTop: theme.typography.pxToRem(12),
        fontSize: theme.typography.pxToRem(20),
      },
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
    },
  },
}));
