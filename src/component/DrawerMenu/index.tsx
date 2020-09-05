import React, { FC } from 'react';
import { Sidebar } from 'primereact/sidebar';

import './style.scss';

interface DrawerMenuProps {
  opened: boolean;
  itemComponent: FC<{}>;
  closed: () => void;
}
const DrawerMenu: FC<DrawerMenuProps> = props => {

	const handleClosed = () => {
		props.closed();
	};
	return (
		<Sidebar
			className="drawer-menu"
			modal={false}
			visible={props.opened}
			onHide={() => handleClosed()}
			showCloseIcon={false}
		>
			<div className="site-title">
				<h1>Melquiades</h1>
			</div>
			<props.itemComponent />
		</Sidebar>
	);
};
export default DrawerMenu;