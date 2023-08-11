// import React from 'react'
import { useNavigate } from "react-router-dom"
import panchatLogo from "../../assets/panchat_logo.png"
import "./Welcome.css"

const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className='welcome'>
            <div className='welcome-logo'>
                <img src={panchatLogo} alt="logo" />
            </div>
            <div className="welcome-text">
                <h1>Discover • Connect • Share</h1>
                <h3>Step into a world where connections flourish and ideas come to life. Whether you're here to meet new friends, share your passions, or explore exciting content, you've found the perfect place.</h3>
                <div>
                    <p>Already a user?</p>
                    <button className="btn1" onClick={navigate("/login")}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome