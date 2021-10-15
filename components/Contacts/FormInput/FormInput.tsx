// Interfaces__Interface
import type { IInputProps } from 'interfaces';
import { Form } from 'react-bootstrap';
import styles from './forminput.module.scss';

export const FormInput: React.FC<IInputProps> = (props) => {
	const { type, register, placeholder, text, error } = props;
	return (
		<Form.Group className={`w-100 ${styles.InputContainer}`}>
			<Form.Label>{text}</Form.Label>
			<Form.Control
				as={type === 'textarea' ? 'textarea' : 'input'}
				placeholder={placeholder}
				type={type}
				aria-label="Username"
				aria-describedby="basic-addon1"
				{...register}
			/>
			{error && <p className="error">Это обязательное поле</p>}
		</Form.Group>
	);
};
