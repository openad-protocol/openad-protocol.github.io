import { Box, ButtonBase, IconButton } from '@mui/material';
import { CloseIcon } from 'modules/common/icons';
import { useNavigationItems } from '../../hooks/useNavigationItems';
import { useHeaderNavMobileStyles } from './useHeaderNavMobileStyles';
import { CustomNavLink } from '../HeaderNav';
import { Social } from '../Social';

interface IHeaderNavMobileProps {
  onCloseClick?: () => void;
}

export function HeaderNavMobile({
  onCloseClick,
}: IHeaderNavMobileProps): JSX.Element {
  const { classes } = useHeaderNavMobileStyles();
  const navItems = useNavigationItems();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <IconButton
          sx={{ color: theme => theme.palette.text.primary }}
          onClick={onCloseClick}
        >
          <Box component={CloseIcon} sx={{ width: 24, height: 24 }} />
        </IconButton>
      </div>

      <nav className={classes.nav}>
        {navItems.map(
          item =>
            item && (
              <ButtonBase
                component={CustomNavLink}
                className={classes.link}
                key={item.title}
                to={item.link}
              >
                {item.title}
              </ButtonBase>
            ),
        )}
      </nav>

      <Social />
    </div>
  );
}
