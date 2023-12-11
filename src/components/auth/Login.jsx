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
	const [error, setError] = useState(null); // State to store error

	const handleSubmit = (e) => {
		e.preventDefault();
		const values = {
			account,
			password,
			isEmail: account.includes('@') ? true : false,
		};

		api.post('/login', values)
			.then((res) => {
				if (res.data.Success) {
					window.location.reload();
				}
			})
			.catch((err) => {
				console.log(err.response.data.err);
				console.error(err.response.data.Error);
				setError(err.response.data.Error); // Set error state
			});

		console.log('login');
	};

	return (
		<AuthForm onSubmit={handleSubmit}>
			{error && ( // Only render if there is an error
				<div className='text-red-500'>
					{error}
				</div>
			)}
			<Input
				value={account}
				onChange={(e) => {
					setAccount(e.target.value);
					setError(null);
				}}
				type='text'
				placeholder='email or username'
			/>

			<PasswordInput
				value={password}
				onChange={(e) => {
					setPassword(e.target.value)
					setError(null);
				}}
			/>

			<SubmitButton />
			<ChangeAuthStage />
		</AuthForm>
	);
};

export default Login;
