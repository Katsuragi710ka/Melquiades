import React, { FC } from 'react';
import { PanelMenu } from 'primereact/panelmenu';

import './style.scss';

// any[] should be MenuItem[] where is defined in node_modules/primereact/components/menuitem/MenuItem.d.ts
interface ItemContainerProps {
  menuItems: any[]
}
const ItemContainer: FC<ItemContainerProps> = props => (
	<PanelMenu model={props.menuItems} />
);
export default ItemContainer;