import { makeStyles } from 'tss-react/mui';

export const useRealGrowthStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(10, 0, 15, 0),
    backgroundColor: '#FBFBFB',

    h1: {
      maxWidth: theme.typography.pxToRem(1000),
      textAlign: 'center',
    },
  },

  pointsBox: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: theme.typography.pxToRem(553),
    gap: theme.spacing(7.5),

    li: {
      display: 'grid',
      alignItems: 'flex-start',
      rowGap: theme.spacing(2),
      columnGap: theme.spacing(1.75),

      img: {
        width: theme.typography.pxToRem(40),
        aspectRatio: '1 / 1',
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
      },

      h3: {
        fontSize: theme.typography.pxToRem(28),
        fontWeight: 600,
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
        lineHeight: theme.typography.pxToRem(40),
      },

      p: {
        fontSize: theme.typography.pxToRem(16),
        color: '#686868',
        gridColumn: '2 / 3',
        gridRow: '2 / 3',
      },
    },
  },

  banner: {
    width: theme.typography.pxToRem(445),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  gridBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: theme.spacing(6),
    marginTop: theme.spacing(9),
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'auto',
    },
  },
}));
