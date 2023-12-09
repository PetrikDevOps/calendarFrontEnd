import React, { useState, useContext, createContext } from 'react';

const AuthPageContext = createContext();

export const useAuth = () => useContext(AuthPageContext);

const AuthPageProvider = ({ children }) => {
	const [isRegister, setIsRegister] = useState(false);

	return (
		<AuthPageContext.Provider value={{ isRegister, setIsRegister }}>
			{children}
		</AuthPageContext.Provider>
	);
};

export default AuthPageProvider;
