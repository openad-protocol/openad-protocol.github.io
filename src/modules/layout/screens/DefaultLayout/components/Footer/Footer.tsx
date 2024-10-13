import { ButtonBase, Container } from '@mui/material';
import { dashboardRouteConfig } from 'modules/dashboard';
import { Link } from 'react-router-dom';
// import { useFooterStyles } from './useFooterStyles';
import Logo from '/logo.png';
import { Social } from '../Social';

const homePath = dashboardRouteConfig.main.generatePath();

export function Footer(): JSX.Element {
  // const { classes } = useFooterStyles();

  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={theme => ({
        display: 'flex',
        justifyContent: { xs: 'center', sm: 'space-between' },
        alignItems: 'center',
        py: 3,
        color: 'text.secondary',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      })}
    >
      <ButtonBase to={homePath} component={Link}>
        <img src={Logo} />
      </ButtonBase>

      <Social />
    </Container>
  );
}
