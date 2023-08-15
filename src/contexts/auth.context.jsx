import { createContext, useContext, useReducer } from 'react';
import AuthReducer from '../reducers/AuthReducer';

const DEFAULT_USER = {
  user: JSON.parse(localStorage.getItem('user')),
  token: JSON.parse(localStorage.getItem('token')),
};

const createAuth = createContext({});

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_USER);
  return (
    <createAuth.Provider value={{ authState, authDispatch }}>
      {children}
    </createAuth.Provider>
  );
}

export const useAuth = () => useContext(createAuth);
