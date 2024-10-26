import { makeStyles } from 'tss-react/mui';

const SVG_HEIGHT = 496;

export const useFeaturesStyles = makeStyles()(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(36),

    h1: {
      [`.typed-cursor`]: {
        color: theme.palette.common.black,
        width: theme.typography.pxToRem(6),
        display: 'inline-block',
        height: theme.typography.pxToRem(68),
        backgroundColor: theme.palette.common.black,
        transform: 'translateY(20%)',
        marginLeft: theme.spacing(1),

        [theme.breakpoints.down('sm')]: {
          height: theme.typography.pxToRem(32),
        },
      },
    },

    svg: {
      marginRight: theme.spacing(2.5),
      rect: {
        width: theme.typography.pxToRem(SVG_HEIGHT),
        height: theme.typography.pxToRem((63 / 496) * SVG_HEIGHT),
      },

      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },

    [theme.breakpoints.down('sm')]: {
      gap: theme.typography.pxToRem(0),
    },
  },

  animationBox: {
    position: 'absolute',
    top: theme.typography.pxToRem(84),
    width: '90vw',
    aspectRatio: '1 / 1',
    zIndex: -1,
  },
}));
