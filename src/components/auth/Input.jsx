import React from 'react';

const Input = ({ value, onChange, type, placeholder }) => {
	return (
		<input
			value={value}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
			required
			className='mb-2 block w-full rounded-sm border p-2 text-black'
		/>
	);
};

export default Input;
