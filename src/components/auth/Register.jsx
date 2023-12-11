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
	const [error, setError] = useState(null); // State to store error

	const handleSubmit = (e) => {
		e.preventDefault();
		api.post('/register', { username, email, password })
			.then((res) => {
				if (res.data.Success) {
					window.location.reload();
				}
			})
			.catch((err) => {
				console.error(err.response.data.Error);
				setError(err.response.data.Error); // Set error state
			});
	};

	return (
		<AuthForm onSubmit={handleSubmit}>
			{error && ( // Only render if there is an error
				<div className='text-red-500'>
					{error}
				</div>
			)}
			<Input
				value={email}
				onChange={(e) => {
					setEmail(e.target.value)
					setError(null);
				}}
				type='email'
				placeholder='email'
			/>

			<Input
				value={username}
				onChange={(e) => {
					setUsername(e.target.value)
					setError(null);
				}}
				type='text'
				placeholder='username'
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

export default Register;
