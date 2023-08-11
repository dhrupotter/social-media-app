import axios from "axios";

const loginService = async (loginDetails) => {
    try {
        const result = await axios.post("/api/auth/login", loginDetails);
        console.log(result);
        return result;

    } catch (err) {
        console.log(err)
    }
};

const signupService = async (signupDetails) => {
    try {
        const result = await axios.post("/api/auth/signup", signupDetails);
        console.log(result);
        return result;
    } catch (err) {
        console.log(err)
    }

};

export { loginService, signupService }