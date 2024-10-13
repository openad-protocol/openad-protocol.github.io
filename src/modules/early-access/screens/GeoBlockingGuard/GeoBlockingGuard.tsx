import { QueryLoading } from 'modules/common/components/QueryLoading';
import { featureConfig } from 'modules/common/featureConfig';
import { ReactNode } from 'react';
import { GeoBlocking } from './components/GeoBlocking';
import { useGeoBlocking } from './components/GeoBlocking/useGeoBlocking';

interface IGeoBlockingGuardProps {
  children?: ReactNode;
}

export function GeoBlockingGuard({
  children,
}: IGeoBlockingGuardProps): JSX.Element {
  const { allow, isLoading } = useGeoBlocking();

  if (featureConfig.geoBlocking && !allow) {
    return isLoading ? <QueryLoading isAbsolute /> : <GeoBlocking />;
  }

  return <>{children}</>;
}
