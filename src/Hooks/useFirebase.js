import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import firebaseInitialization from '../config/firebase.init';

firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const loginInWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const changeName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  const createAccountWithEmailAndPassword = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ ...userCredential.user, displayName: name });
        setIsLoading(false);
        changeName(name);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    user,
    isLoading,
    error,
    createAccountWithEmailAndPassword,
    signInWithGoogle,
    loginInWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
