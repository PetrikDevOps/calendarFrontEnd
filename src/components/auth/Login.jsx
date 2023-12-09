import React, { useState } from 'react';
import api from '../../config/api';

import AuthForm from './AuthForm';
import ChangeAuthStage from './ChangeAuthStage';
import SubmitButton from './SubmitButton';
import Input from './Input';
import PasswordInput from './PasswordInput';

const Login = () => {
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const values = {
			account,
			password,
			isEmail: account.includes('@') ? true : false,
		};

		api.post('/login', values)
			.then((res) => {
				if (res.data.Success) window.location.reload();
			})
			.catch((err) => {
				console.error(err.response.data.Error);
			});

		console.log('login');
	};

	return (
		<AuthForm onSubmit={handleSubmit}>
			<Input
				value={account}
				onChange={(e) => setAccount(e.target.value)}
				type='text'
				placeholder='email or username'
			/>

			<PasswordInput
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<SubmitButton />
			<ChangeAuthStage />
		</AuthForm>
	);
};

export default Login;
