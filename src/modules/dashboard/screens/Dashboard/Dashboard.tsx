import { Container } from '@mui/material';
import { Section } from 'modules/common/components/Section';
import AdvPlatforms from 'modules/dashboard/components/AdvPlatforms';
import Connect from 'modules/dashboard/components/Connect';
import { Features } from 'modules/dashboard/components/Features';
import AdsFormats from 'modules/dashboard/components/AdsFormats';
import RealGrowth from 'modules/dashboard/components/RealGrowth';
import Performance from 'modules/dashboard/components/Performance';
import { useUpdateOptimisticClaims } from 'modules/dashboard/hooks/useUpdateOptimisticClaims';

export function Dashboard(): JSX.Element {
  useUpdateOptimisticClaims();

  return (
    <Section sx={{ py: 0 }}>
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Features
          sx={theme => ({
            [theme.breakpoints.down('lg')]: {
              px: theme.spacing(2.5),
            },
          })}
        />

        <AdsFormats
          sx={theme => ({
            [theme.breakpoints.down('lg')]: {
              px: theme.spacing(2.5),
            },
          })}
        />

        <AdvPlatforms
          sx={theme => ({
            [theme.breakpoints.down('lg')]: {
              px: theme.spacing(2.5),
            },
          })}
        />

        <RealGrowth
          sx={theme => ({
            [theme.breakpoints.down('lg')]: {
              px: theme.spacing(2.5),
            },
          })}
        />

        <Performance
          sx={theme => ({
            display: 'none !important',
            [theme.breakpoints.down('lg')]: {
              px: theme.spacing(2.5),
            },
          })}
        />

        <Connect
          sx={theme => ({
            [theme.breakpoints.down('lg')]: {
              px: theme.spacing(2.5),
            },
          })}
        />
      </Container>
    </Section>
  );
}
