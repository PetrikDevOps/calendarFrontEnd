import React from 'react';

const AuthForm = ({ onSubmit, children }) => {
	return (
		<form
			onSubmit={onSubmit}
			className='mx-auto mb-12 w-64'
		>
			{children}
		</form>
	);
};

export default AuthForm;
