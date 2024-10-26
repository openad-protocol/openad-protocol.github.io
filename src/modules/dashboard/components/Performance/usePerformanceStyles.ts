import { makeStyles } from 'tss-react/mui';

export const usePerformanceStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(5, 0, 15, 0),

    h1: {
      maxWidth: theme.typography.pxToRem(1000),
      textAlign: 'center',
      marginBottom: theme.typography.pxToRem(48),
    },
  },

  carouselItem: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `${theme.typography.pxToRem(551)} ${theme.typography.pxToRem(451)}`,
    flexDirection: 'row',

    h3: {
      margin: 0,
      maxWidth: theme.typography.pxToRem(456),
      fontSize: theme.typography.pxToRem(24),
      fontWeight: 700,
      lineHeight: 'normal',
    },

    p: {
      margin: 0,
      marginTop: theme.typography.pxToRem(20),
      maxWidth: theme.typography.pxToRem(456),
    },

    img: {
      width: theme.typography.pxToRem(451),
      height: theme.typography.pxToRem(422),
    },
  },

  innerLeftBox: {
    padding: theme.spacing(9, 7, 0, 5),
  },
}));
