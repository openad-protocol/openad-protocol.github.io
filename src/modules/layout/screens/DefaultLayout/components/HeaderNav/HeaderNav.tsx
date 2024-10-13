import { Box, BoxProps, ButtonBase } from '@mui/material';
import { useNavigationItems } from '../../hooks/useNavigationItems';
import { useHeaderNavStyles } from './useHeaderNavStyles';
import { forwardRef, useEffect } from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

interface IHeaderNavProps extends BoxProps {}

export const CustomNavLink = forwardRef(
  ({ to, className, ...rest }: NavLinkProps, ref: any): JSX.Element => {
    const { cx } = useHeaderNavStyles();
    const location = useLocation();

    useEffect(() => {
      const anchor = document.getElementById(location.hash.slice(1));
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [location]);

    return (
      <NavLink
        {...rest}
        to={to}
        className={cx(className?.toString(), {
          customActive:
            !!location.hash && to.toString().endsWith(location.hash),
        })}
        ref={ref}
      />
    );
  },
);

export function HeaderNav({ sx }: IHeaderNavProps): JSX.Element {
  const { classes } = useHeaderNavStyles();

  const navItems = useNavigationItems();

  return (
    <Box component="nav" margin="0 auto" className={classes.root} sx={sx}>
      {navItems.map(
        item =>
          item && (
            <ButtonBase
              key={item.title}
              className={classes.link}
              {...(item.isExternal
                ? {
                    component: 'a',
                    href: item.link,
                    target: '_blank',
                    rel: 'noreferrer',
                  }
                : {
                    component: CustomNavLink,
                    to: item.link,
                  })}
            >
              {item.title}
            </ButtonBase>
          ),
      )}
    </Box>
  );
}
