import React, { FC, useEffect, useState } from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import './style.scss';

interface ComponentProps {
  opened: boolean;
  name: string;
  onDelete: () => void;
  onClose: () => void;
}
const Modal: FC<ComponentProps> = props => {

	const Footer = () => 
		<div>
			<Button
				label="Cancel"
				className="p-button-secondary"
				onClick={() => props.onClose()}
			/>
			<Button
				label="Delete"
				className="p-button-danger"
				onClick={() => props.onDelete()}
			/>
		</div>;

	return (
		<Dialog
			visible={props.opened}
			header={`Are you sure to delete ${props.name}?`}
			style={{ width: '50vw' }}
			onHide={() => props.onClose()}
			footer={<Footer />}
			appendTo={document.getElementById('app')!!}
		>
    Once it is removed, you neither cannot undelete nor cannot recover it.
		</Dialog>
	);
};
export default Modal;