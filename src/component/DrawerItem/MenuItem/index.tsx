import React, { FC } from 'react';

import './style.scss';

interface ComponentProps {
  icon: string;
  text: string;
  unclickable?: boolean;
  onClick?: () => void;
}
const MenuItem: FC<ComponentProps> = props => {
	const clickableClassName = props.unclickable ? '' : 'clickable';
	const handleClick = () => {
		if (props.unclickable) {
			return true;
		}
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<div
			className={`menu-item ${clickableClassName}`}
			onClick={() => handleClick()}
		>
			<i className={props.icon} />
			<span>{props.text}</span>
		</div>
	);
};
export default MenuItem;