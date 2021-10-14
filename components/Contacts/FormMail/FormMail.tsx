// React
import { useForm } from 'react-hook-form';
// API
import { sendInfoMail } from 'api/contacts';
// Styles__ My
import styles from './form-mail.module.scss';

export const FormMail: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Отправка данных на мой сервер
	const onSubmit = (data: any) => {
		console.log(data);
		reset({});
	};

	return (
		<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
			<label className={styles['Form-Label']}>
				<span className={styles['Form-LabelText']}>Имя</span>
				<input
					type="text"
					placeholder="Введите имя"
					{...register('firstName', { required: true })}
				/>
				{errors.lastName && <p>Имя обаязательно</p>}
			</label>
			<label className={styles['Form-Label']}>
				<span className={styles['Form-LabelText']}>Фамилия</span>
				<input
					type="text"
					placeholder="Введите фамилию"
					{...register('lastName', { required: true })}
				/>
				{errors.lastName && <p>Фамилия обязательна</p>}
			</label>
			<label className={styles['Form-Label']}>
				<span className={styles['Form-LabelText']}>Почта</span>
				<input
					type="email"
					placeholder="Введите почту"
					{...register('mail', { required: true })}
				/>
				{errors.lastName && <p>Почта обязательна</p>}
			</label>
			<label className={styles['Form-Label']}>
				<span className={styles['Form-LabelText']}>Название компании</span>
				<input
					type="text"
					placeholder="Введите вашу компанию"
					{...register('nameCompany', { required: true })}
				/>
				{errors.lastName && <p>Название компании обязательно</p>}
			</label>
			<label className={styles['Form-Label']}>
				<span className={styles['Form-LabelText']}>Сообщение</span>
				<textarea placeholder="Введите сообщение"></textarea>
			</label>

			<input {...register('age', { pattern: /\d+/ })} />
			{errors.age && <p>Please enter number for age.</p>}
			<input type="submit" />
		</form>
	);
};
