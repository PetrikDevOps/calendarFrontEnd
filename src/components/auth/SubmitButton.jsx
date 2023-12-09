import React from 'react';
import { useAuthPage } from '../../contexts/AuthPageContext';

const SubmitButton = () => {
	const { isRegister } = useAuthPage();
	return (
		<button
			type='submit'
			className='block w-full rounded-sm bg-blue-500 p-2 text-white'
		>
			{isRegister ? 'Register' : 'Login'}
		</button>
	);
};

export default SubmitButton;
