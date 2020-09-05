import React, { FC, useState } from 'react';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import './style.scss';

interface HeaderMenuProps {
  drawerOpened: boolean;
  itemComponent: FC<{}>;
  drawerClicked: (opened: boolean) => void;
}
const HeaderMenu: FC<HeaderMenuProps> = props => {
	const menuItems = [
		{
			icon: 'pi pi-bars',
			style: { fontSize: '17px' },
			command: () => handleDrawerClicked()
		}
	];
	const handleDrawerClicked = () => {
		props.drawerClicked(!props.drawerOpened);
	};
	return (
		<Menubar model={menuItems} className="header-menu">
			<props.itemComponent />
		</Menubar>
	);
};
export default HeaderMenu;