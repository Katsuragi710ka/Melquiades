import React, { FC } from 'react';

import './style.scss';

interface ItemContainerProps {
  title: string
}
const ItemContainer: FC<ItemContainerProps> = props => 
	<div className="item-container">
		<span className="page-title">{props.title}</span>
		{props.children}
	</div>;
  
export default ItemContainer;