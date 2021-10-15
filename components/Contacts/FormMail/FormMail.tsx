// React
import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';
import { useState, useCallback, useMemo } from 'react';
// Interfaces__Interface
import type { IInputProps, IInputsName } from 'interfaces';
import type { IMailInfo } from 'api/contacts';
// Components
import { FormInput } from '../FormInput';
import { ModalWindow } from '@/components/ModalWindow';
// API
import { sendInfoMail } from 'api/contacts';
// Styles__ Bootstrap
import { Button, Form } from 'react-bootstrap';
// Styles__ My
import styles from './form-mail.module.scss';

const nameInputs: IInputsName = {
	firstName: 'firstName',
	lastName: 'lastName',
	mail: 'mail',
	nameCompany: 'nameCompany',
	text: 'text',
};

export const FormMail: React.FC = () => {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	const [error, setError] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const arrayInputsInformation: Array<IInputProps> = [
		// Имя
		{
			placeholder: 'Введите имя',
			register: {
				...register(nameInputs.firstName, {
					required: true,
					pattern: /\W+/gi,
				}),
			},
			type: 'text',
			text: 'Имя',
			error: errors[nameInputs.firstName],
		},
		// Фамилиля
		{
			placeholder: 'Введите фамилию',
			register: {
				...register(nameInputs.lastName, { required: true, pattern: /\W+/gi }),
			},
			type: 'text',
			text: 'Фамилия',
			error: errors[nameInputs.lastName],
		},
		// Почта
		{
			placeholder: 'Введите почту',
			register: {
				...register(nameInputs.mail, {
					required: true,
				}),
			},
			type: 'email',
			text: 'Email',
			error: errors[nameInputs.mail],
		},
		// Название компании
		{
			placeholder: 'Введите название комапнии',
			register: { ...register(nameInputs.nameCompany, { required: true }) },
			type: 'text',
			text: 'Название компании',
			error: errors[nameInputs.nameCompany],
		},
		// Сообщение
		{
			placeholder: 'Введите сообщение',
			register: {
				...register(nameInputs.text, {
					required: true,
					pattern: /\W+/gi,
				}),
			},
			type: 'textarea',
			text: 'Ваше сообщение',
			error: errors[nameInputs.text],
		},
	];

	const contentSuccess = useMemo(() => {
		return (
			<div>
				<h3>Успешно</h3>
				<p>Сообщение спешно отправлено</p>
			</div>
		);
	}, []);

	const contentError = useMemo(() => {
		return (
			<div>
				<h3 className="error">Ошибка</h3>
				<p>Извините, при отправке сообщения возникла ошибка</p>
			</div>
		);
	}, []);

	const openModal = useCallback(() => {
		setIsOpen((prevValue: boolean) => {
			return true;
		});
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen((prevValue: boolean) => {
			return false;
		});
	}, []);

	// Отправка данных на мой сервер
	const onSubmit = (data: IMailInfo) => {
		console.log(data);
		sendInfoMail(data)
			.then((res) => {})
			.catch((er) => {
				setError((prevValue) => {
					return true;
				});
			})
			.finally(() => {
				setTimeout(() => {
					openModal();
				}, 2000);
			});
		reset({});
	};

	return (
		<Form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
			{arrayInputsInformation.map((input) => (
				<FormInput
					key={uuid()}
					placeholder={input.placeholder}
					register={input.register}
					type={input.type}
					text={input.text}
					error={input.error}
				/>
			))}
			<Button type="submit" variant="outline-primary">
				Отправить письмо
			</Button>
			<ModalWindow
				content={error ? contentError : contentSuccess}
				functionClose={closeModal}
				open={modalIsOpen}
			/>
		</Form>
	);
};
