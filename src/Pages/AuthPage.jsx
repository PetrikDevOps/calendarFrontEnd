import React from 'react';
import { useAuthPage } from '../contexts/AuthPageContext';

import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const AuthPage = () => {
	const { isRegister } = useAuthPage();
	return (
		<div className='flex h-screen items-center bg-blue-50'>
			{isRegister ? <Register /> : <Login />}
		</div>
	);
};

export default AuthPage;
