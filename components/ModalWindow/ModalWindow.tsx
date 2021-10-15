import Modal from 'react-modal';
import { useState } from 'react';
import styles from './modalwindow.module.scss';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

interface IModalProps {
	open: boolean;
	content: any;
	functionClose: () => any;
}

export const ModalWindow: React.FC<IModalProps> = (props) => {
	const { open, functionClose, content } = props;

	return (
		<Modal
			isOpen={open}
			onRequestClose={functionClose}
			style={customStyles}
			contentLabel="Example Modal"
			ariaHideApp={false}
		>
			{content}
		</Modal>
	);
};
