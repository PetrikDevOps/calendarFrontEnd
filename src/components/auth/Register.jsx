import React, { useState } from 'react';
import api from '../../config/api';

import AuthForm from './AuthForm';
import ChangeAuthStage from './ChangeAuthStage';
import SubmitButton from './SubmitButton';

import Input from './Input';
import PasswordInput from './PasswordInput';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		api.post('/register', { username, email, password })
			.then((res) => {
				if (res.data.Success) window.location.reload();
			})
			.catch((err) => {
				console.error(err.response.data.Error);
			});
	};

	return (
		<AuthForm onSubmit={handleSubmit}>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type='email'
				placeholder='email'
			/>

			<Input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				type='text'
				placeholder='username'
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

export default Register;
