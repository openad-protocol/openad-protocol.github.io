import { ButtonBase, Container, Drawer, IconButton } from '@mui/material';
import { dashboardRouteConfig } from 'modules/dashboard';
import { Link } from 'react-router-dom';
import { useHeaderStyles } from './useHeaderStyles';

import { HeaderNav } from '../HeaderNav';
import { HeaderNavMobile } from '../HeaderNavMobile';
import { default as MenuIcon } from './assets/menu.svg?react';
import { useMobileMenu } from './useMobileMenu';
import Logo from '/logo.png';
import { Social } from '../Social';

const homePath = dashboardRouteConfig.main.generatePath();

export function Header(): JSX.Element {
  const { classes } = useHeaderStyles();
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <header className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <ButtonBase to={homePath} component={Link}>
          <img src={Logo} />
        </ButtonBase>

        <HeaderNav sx={{ display: { xs: 'none', lg: 'grid' } }} />

        <Social sx={{ display: { xs: 'none', lg: 'flex' } }} />

        <IconButton
          onClick={toggleMobileMenu}
          className={classes.menuToggle}
          title="menu"
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
      </Container>

      <Drawer
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        anchor="right"
        PaperProps={{
          elevation: 0,
          sx: { p: 0 },
        }}
      >
        <HeaderNavMobile onCloseClick={toggleMobileMenu} />
      </Drawer>
    </header>
  );
}
