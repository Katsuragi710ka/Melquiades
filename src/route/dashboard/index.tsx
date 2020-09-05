import React, { FC } from 'react';

import DrawerItem from './Drawer';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const DashboardHeaderItem = HeaderItem;

import ServiceLinks from '@appComponent/ServiceLinks';

interface ComponentProps { }
const Dashboard: FC<ComponentProps> = props => {
	return (
		<div>
			<ServiceLinks />
		</div>
	);
};

export default Dashboard;