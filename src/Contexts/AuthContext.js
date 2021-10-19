import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  error: null,
  createAccountWithEmailAndPassword: () => {},
  signInWithGoogle: () => {},
  loginInWithEmailAndPassword: () => {},
});

export const AuthProvider = ({ children }) => {
  const firebase = useFirebase();
  return (
    <AuthContext.Provider value={firebase}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
