import React from 'react';

import AuthPage from './pages/AuthPage';
import AuthPageContext from './contexts/AuthPageContext';

import CalendarPage from './pages/CalendarPage';
import { useUser } from './contexts/UserContext';

const App = () => {
	const { user } = useUser();

	if (user) {
		return <CalendarPage />;
	}

	return (
		<AuthPageContext>
			<AuthPage />
		</AuthPageContext>
	);
};

export default App;
