import { makeStyles } from 'tss-react/mui';
import Bg from './assets/bg.png';

const SVG_HEIGHT = 496;

export const useFeaturesStyles = makeStyles()(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(36),

    background: `url('${Bg}') no-repeat center`,
    backgroundSize: `${theme.typography.pxToRem(770)} auto`,

    p: {
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(63),
      display: 'flex',
      alignItems: 'center',

      [`.typed-cursor`]: {
        color: theme.palette.common.black,
        width: theme.typography.pxToRem(6),
        display: 'inline-block',
        height: theme.typography.pxToRem(68),
        backgroundColor: theme.palette.common.black,
        transform: 'translateY(20%)',
        marginLeft: theme.spacing(1),
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
  },
}));
