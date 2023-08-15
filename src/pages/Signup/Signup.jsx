import { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Signup.css";
import { signupService } from "../../services/auth.service";
import { useEffect } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const [signupDetails, setSignupDetails] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    });

    const handleSignupDetails = (e) => {
        setSignupDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signupDetails)
        try {
            const result = await signupService(signupDetails);
            authDispatch({ type: "setUser", payload: result?.data?.createdUser });
            authDispatch({ type: "setToken", payload: result?.data?.encodedToken });
        } catch (err) {
            console.log(err);
        }

    };
    const handleLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        if (authState.user !== null) {
            navigate("/home");
            toast.success("Signed up successfully");
        } else {
            toast.error("Fill in all details");
        }
    }, [authState.user, navigate]);

    return (
        <>
            <div className="signup-card ">
                <div className="signup-field">
                    <label>First Name:</label>
                    <input
                        name="firstName"
                        onChange={handleSignupDetails}
                        value={signupDetails.firstName}
                        placeholder="Enter first name"
                    />
                </div>
                <div className="signup-field">
                    <label>Last Name:</label>
                    <input
                        name="lastName"
                        onChange={handleSignupDetails}
                        value={signupDetails.lastName}
                        placeholder="Enter last name"
                    />
                </div>
                <div className="signup-field">
                    <label>Username:</label>
                    <input
                        name="username"
                        onChange={handleSignupDetails}
                        value={signupDetails.username}
                        placeholder="Enter username"
                    />
                </div>
                <div className="signup-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleSignupDetails}
                        value={signupDetails.password}
                        placeholder="Enter password"
                    />
                </div>
                <div className="signup-btn-container">
                    <button className="signup-btn" onClick={(e) => handleSubmit(e)}>
                        Sign Up
                    </button>
                </div>
                <div className="alt-section">
                    Already a user? <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    );
};

export default Signup;
