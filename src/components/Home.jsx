import api from '../config/axiosConfig';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
   const { auth, setAuth, user, setUser } = useAuth();

   useEffect(() => {
      api.get('/')
         .then(res => {
            if (res.data.Success) {
               localStorage.setItem('user', JSON.stringify(res.data.user));
               setUser(res.data.user);
               setAuth(true);
            }
         })
         .catch(err => {
            console.log(err);
         });
   }, []);

   const logout = () => {
      api.delete('/logout')
         .then(res => {
            if (res.data.Success) {
               localStorage.removeItem('user');
               setUser(null);
               setAuth(false);
            }
         })
         .catch(err => {
            console.log(err);
         });
   };

  return (
    <div>
      {
         auth
         ?
         <div>
            <h2>Hello, {user?.username}</h2>
            <button onClick={logout} className='btn btn-danger'>Log Out</button>
            <Link to="/calendar" className='btn btn-primary'>Calendar</Link>
         </div>
         :
         <div>
            <h2>Home</h2>
            <Link to="/register" className='btn btn-danger'>Register</Link>
            <Link to="/login" className='btn btn-danger'>Log In</Link>
         </div>
      }
    </div>
  );
};

export default Home;