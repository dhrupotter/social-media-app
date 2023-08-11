import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducers/authReducer";

const DEFAULT_USER = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
};

const createAuth = createContext();

export const AuthProvider = ( {children} ) => {
    const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_USER);
    return (
        <createAuth.Provider value={{ authState, authDispatch }}>
            {children}
        </createAuth.Provider>
    );
};

export const useAuth = () => useContext(createAuth);
