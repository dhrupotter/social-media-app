/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../contexts/auth.context';
import 'react-toastify/dist/ReactToastify.css';

import './Signup.css';
import { signupService } from '../../services/auth.service';

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authDispatch } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePwd, setHidePwd] = useState({ pwd: true, confirmPwd: true });
  const [signupDetails, setSignupDetails] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const [pwdMatch, setPwdMatch] = useState(true);
  const [signupBtnDisabled, setSignupBtnDisabled] = useState(false);

  const handleSignupDetails = (e) => {
    setSignupDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupBtnDisabled(true);
    try {
      const result = await signupService(signupDetails);
      if (result.status === 201) {
        authDispatch({ type: 'setUser', payload: result?.data?.createdUser });
        authDispatch({ type: 'setToken', payload: result?.data?.encodedToken });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : '/home',
        );
        toast.success('Signed up successfully');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSignupBtnDisabled(false);
    }
  };
  const handleLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (signupDetails?.password !== '' && confirmPassword !== '') {
      setPwdMatch(signupDetails?.password === confirmPassword);
    }
  }, [signupDetails?.password, confirmPassword]);

  return (
    <div className="signup-card ">
      <div className="signup-field">
        <label>First Name:</label>
        <input
          name="firstName"
          onChange={handleSignupDetails}
          value={signupDetails.firstName}
          placeholder="Enter first name"
          required
        />
      </div>
      <div className="signup-field">
        <label>Last Name:</label>
        <input
          name="lastName"
          onChange={handleSignupDetails}
          value={signupDetails.lastName}
          placeholder="Enter last name"
          required
        />
      </div>
      <div className="signup-field">
        <label>Username:</label>
        <input
          name="username"
          onChange={handleSignupDetails}
          value={signupDetails.username}
          placeholder="Enter username"
          required
        />
      </div>
      <div className="signup-field">
        <label>Password:</label>
        <input
          type={hidePwd.pwd ? 'password' : 'text'}
          name="password"
          onChange={handleSignupDetails}
          value={signupDetails.password}
          placeholder="Enter password"
          required
        />
        <span
          onClick={() => setHidePwd((prev) => ({
            ...prev,
            pwd: !hidePwd?.pwd,
          }))}
        >
          {hidePwd?.pwd ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
      <div className="signup-field">
        <label>Confirm Password:</label>
        <input
          type={hidePwd.confirmPwd ? 'password' : 'text'}
          name="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Re-enter password"
          required
        />
        <span
          onClick={() => setHidePwd((prev) => ({
            ...prev,
            confirmPwd: !hidePwd?.confirmPwd,
          }))}
        >
          {hidePwd?.confirmPwd ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
      <div className="signup-btn-container">
        <button type="button" className="signup-btn" onClick={(e) => handleSubmit(e)} disabled={!pwdMatch || signupBtnDisabled}>
          Sign Up
        </button>
      </div>
      <div className="alt-section">
        Already a user?
        {' '}
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Signup;
