import React, { FC, useState } from 'react';

import DrawerMenu from '@appComponent/DrawerMenu';
import HeaderMenu from '@appComponent/HeaderMenu';

import './style.scss';

interface LayoutProps {
  drawerItem: FC<{}>;
  headerItem: FC<{}>;
}
const Layout: FC<LayoutProps> = props => {
	const [drawerOpened, setDrawerOpened] = useState(true);

	const layoutModeClassName = (): string => (drawerOpened ? 'drawer-opened' : 'drawer-closed') 

	return (
		<div id="layout-main" className={layoutModeClassName()}>
			<DrawerMenu
				opened={drawerOpened}
				itemComponent={props.drawerItem}
				closed={() => setDrawerOpened(false)}
			/>
			<div className="right-column">
				<HeaderMenu
					drawerOpened={drawerOpened}
					itemComponent={props.headerItem}
					drawerClicked={opened => setDrawerOpened(opened)}
				/>
				<div className="page-container">
					{props.children}
				</div>
			</div>
		</div>
	);
};
export default Layout;