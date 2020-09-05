import React, { FC } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from '@appLayout/Main/index';

import Dashboard, { DashboardDrawerItem, DashboardHeaderItem } from '@appRoute/dashboard';

interface LayoutProps {
  slot: JSX.Element;
  drawer: FC<any>;
  header: FC<any>;
}

interface RouterProps {}
const AppRouter: FC<RouterProps> = () => {
	const renderRouteWithMainLayout = (components: LayoutProps) => <MainLayout drawerItem={components.drawer} headerItem={components.header}>{components.slot}</MainLayout>;
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={() => renderRouteWithMainLayout({ slot: <Dashboard />, drawer: DashboardDrawerItem, header: DashboardHeaderItem })} />
			</Switch>
		</Router>
	);
};

export default AppRouter;