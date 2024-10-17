import { makeStyles } from 'tss-react/mui';

export const useHeaderNavStyles = makeStyles()(theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(3),
    },
  },

  link: {
    textDecoration: 'none',
    color: 'inherit',
    padding: theme.spacing(1, 1),
    borderRadius: 8,
    transition: 'all 0.3s linear',

    '&:hover': {
      color: '#58C2F9',
    },

    '&.customActive': {
      cursor: 'default',
      color: '#58C2F9',

      '&:active': {
        transform: 'none',
      },
    },
  },
}));
