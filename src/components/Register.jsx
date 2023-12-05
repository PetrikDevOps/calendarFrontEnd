import React, {  useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../config/axiosConfig';

const Register = () => {
   const navigate = useNavigate();
   const [values, setValues] = useState({
      username: '',
      email: '',
      password: ''
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      setValues({ ...values, username: values.username.toLowerCase() });

      api.post('/register', values)
         .then(res => {
            if (res.data.Success) navigate('/login');
         })
         .catch(err => {
            console.log(err);
            alert('Sikertelen regisztráció!');
         });
   };
   
  return (
    <div>
      <h2>
         Register
      </h2>
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="username">Teljes Név</label>
            <input type="text" id="username" onChange={e => setValues({...values, username: e.target.value})} required/>
         </div>
         <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={e => setValues({...values, email: e.target.value})} required/>
         </div>
         <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => setValues({...values, password: e.target.value})} required/>
         </div>
         <button type="submit" className='btn btn-primary'>Register</button>
         <Link to="/login" className='btn btn-danger'>Log In</Link>
      </form>
    </div>
  );
};

export default Register;