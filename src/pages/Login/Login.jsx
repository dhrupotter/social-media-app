/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/auth.context';
import './Login.css';
import { loginService } from '../../services/auth.service';

function Login() {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const guestUser = {
    username: 'dhruvigandhi254',
    password: 'dhruvigandhi254',
  };

  const handleLoginDetails = (e) => {
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginService(loginDetails);
      console.log(loginDetails);
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result?.data?.foundUser));
      localStorage.setItem('token', JSON.stringify(result?.data?.encodedToken));
      authDispatch({ type: 'setUser', payload: result?.data?.foundUser });
      authDispatch({ type: 'setToken', payload: result?.data?.encodedToken });
    } catch (err) {
      console.log(err);
    }
    if (authState.user !== null) {
      navigate('/home');
      toast.success('Logged in successfully');
    } else {
      console.log('Username or password is invalid');
      toast.error('Username or password is invalid');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLoginAsGuest = async () => {
    try {
      const result = await loginService(guestUser);
      localStorage.setItem('user', JSON.stringify(result?.data?.foundUser));
      localStorage.setItem('token', JSON.stringify(result?.data?.encodedToken));
      authDispatch({ type: 'setUser', payload: result?.data?.foundUser });
      authDispatch({ type: 'setToken', payload: result?.data?.encodedToken });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    navigate('/home');
    toast.success('Logged in successfully');
  };

  return (
    <div className="login-card">
      <div className="login-field">
        <label>Username:</label>
        <input
          name="username"
          onChange={handleLoginDetails}
          value={loginDetails.username}
          placeholder="Enter username"
        />
      </div>
      <div className="login-field">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleLoginDetails}
          value={loginDetails.password}
          placeholder="Enter password"
        />
      </div>
      <div className="login-btn-container">
        <button type="button" className="login-btn" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <button type="button" className="login-btn2" onClick={handleLoginAsGuest}>
          Login as Guest
        </button>
      </div>
      <div className="alt-section">
        Not a user?
        {' '}
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
