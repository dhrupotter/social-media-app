import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../../contexts/auth.context";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.service";



const Login = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: "",
    });


    const guestUser = {
        username: "dhruvi254",
        password: "dhruvi1234",
    };

    const handleLoginDetails = (e) => {
        setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        try {
            const result = await loginService("/api/auth/login", loginDetails);
            console.log(result);
            setUser({ user: result.data.foundUser, token: result.data.encodedToken });
        } catch (err) {
            console.log(err);
        }
        if (user.user !== null) {
            navigate("/home");
            toast.success("Logged in successfully", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } else {
            console.log("Username or password is invalid");
            toast.error("Username or password is invalid", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    const handleLoginAsGuest = async () => {
        try {
            const result = await loginService("/api/auth/login", guestUser);
            setUser({
                user: result.data.foundUser,
                token: result.data.encodedToken,
            });
            console.log(result)
        } catch (err) {
            console.log(err);
        }
        navigate("/home");

        toast.success("Logged in successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <>
            <div className="login-card">
                <div className="login-field">
                    <label>Username:</label>
                    <input
                        name="email"
                        onChange={handleLoginDetails}
                        value={loginDetails.email}
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
                    <button className="login-btn" onClick={handleSubmit}>
                        Login
                    </button>
                    <button className="login-btn2" onClick={handleLoginAsGuest}>
                        Login as Guest
                    </button>
                </div>
                <div className="alt-section">
                    Not a user? <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default Login;
