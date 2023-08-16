/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
// import React from 'react'
import { useNavigate } from 'react-router-dom';
import panchatLogo from '../../assets/panchat_logo.png';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div className="welcome-logo">
        <img src={panchatLogo} alt="logo" />
      </div>
      <div className="welcome-text">
        {/* <div className="brand-name">
                    <img src={panchatLogo} alt="logo" />
                    <span>ANCHAT</span>
                </div> */}
        <p className="tagline">Discover • Connect • Share</p>
        <p>Step into a world where connections flourish and ideas come to life. Whether you're here to meet new friends, share your passions, or explore exciting content, you've found the perfect place.</p>
        <h2>Join now</h2>
        <button className="btn1" onClick={() => navigate('/signup')}>Sign up</button>
        <div>
          <p>Already a user?</p>
          <button className="btn1" onClick={() => navigate('/login')}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
