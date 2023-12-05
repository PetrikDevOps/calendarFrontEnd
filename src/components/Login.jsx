import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../config/axiosConfig';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
   const { setAuth } = useAuth();
   const navigate = useNavigate();
   const [values, setValues] = useState({
      email: '',
      password: ''
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      api.post('/login', values)
         .then(res => {
            if (res.data.Success) {
               setAuth(true);
               navigate('/');
            }
         })
         .catch(err => {
            console.log(err);
         });
   };

  return (
   <div>
      <h2>
         Log in
      </h2>
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={e => setValues({...values, email: e.target.value})} required/>
         </div>
         <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => setValues({...values, password: e.target.value})} required/>
         </div>
         <button type="submit" className='btn btn-primary'>Log In</button>
         <Link to="/register" className='btn btn-danger'>Register</Link>
      </form>
   </div>
  );
};

export default Login;