import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config.jsx'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login 
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // create a user
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserData = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    // signIn user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observe user
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser);
            setLoading(false);
        });
        return () => unsbscribe();
    }, [])

    // user signout
    const signOutUser = () => {
        signOut(auth);
    }


    // auth info provide
    const authInfo = {
        signUpUser,
        signInUser,
        googleSignin,
        signOutUser,
        user,
        loading,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;