import React from 'react';
import CalendarPage from './Pages/calendarPage';
import { Routes, Route } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route exact path="/" element={<Home />} />

        <Route element={<RequireAuth isUnAuthOnly={true} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RequireAuth isAuthOnly={true} />}>
          <Route path="/calendar" element={<CalendarPage />} />
        </Route>

        <Route path="*" Component={() => <div>404</div>} />
      </Route>
    </Routes>
  );
};

export default App;
