import { JSX } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { PageNotFound } from 'modules/common/components/PageNotFound';
import { featureConfig } from 'modules/common/featureConfig';
import { getDashboardRoutes } from 'modules/dashboard';
import { getDevRoutes } from 'modules/dev';
import { DefaultLayout } from 'modules/layout';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        {getDashboardRoutes()}

        {featureConfig.isDevUiEnabled && getDevRoutes()}

        <Route element={<PageNotFound />} path="*" />
      </Route>
    </Routes>
  );
}
