import React, { useState, useContext, createContext, useEffect } from 'react';
import api from '../config/api';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		api.get('/user')
			.then((res) => {
				if (res.data.Success) {
					const { id, username, email } = res.data.user;
					setUser({
						id,
						username,
						email,
					});
				}
			})
			.catch((err) => console.error(err.response.data.Error));
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
