import React from 'react';

import Input from './Input';

const PasswordInput = ({ value, onChange }) => {
	return (
		<Input
			value={value}
			onChange={onChange}
			type='password'
			placeholder='password'
		/>
	);
};

export default PasswordInput;
