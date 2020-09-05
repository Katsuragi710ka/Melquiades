import React, { FC } from 'react';

import TagList from '@appComponent/DrawerItem/TagList';
import NewTagForm from '@appComponent/DrawerItem/NewTagForm';

interface ComponentProps {

}
const Dashboard: FC<ComponentProps> = props => {

	return (
		<div className="drawer-dashboard drawer-menu-list">
			<NewTagForm />
			<TagList />
		</div>

	);
};
export default Dashboard;