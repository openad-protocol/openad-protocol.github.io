import { featureConfig } from 'modules/common/featureConfig';
import { devRouteConfig } from 'modules/dev';
import { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';
import { ComingSoon } from './components/ComingSoon';

interface IComingSoonGuardProps {
  children?: ReactNode;
}

export function ComingSoonGuard({
  children,
}: IComingSoonGuardProps): JSX.Element {
  const devPathMatch = useMatch(devRouteConfig.dev.path);

  if (!featureConfig.earlyAccess && !devPathMatch) {
    return (
      <>
        {children}

        <ComingSoon />
      </>
    );
  }

  return <>{children}</>;
}
