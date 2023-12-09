import React from 'react';

import api from '../../config/api';

const LogoutButton = () => {
	const handleLogout = () => {
		api.delete('/logout')
			.then((res) => {
				if (res.data.Success) window.location.reload();
			})
			.catch((err) => console.log(err));
	};

	return (
		<button
			onClick={handleLogout}
			className='block rounded-md bg-red-500 p-2 text-white hover:bg-red-700'
		>
			Logout
		</button>
	);
};

export default LogoutButton;
