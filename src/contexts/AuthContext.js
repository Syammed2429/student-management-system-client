import React from 'react'
import { auth } from '../firebase'



export const AuthContext = React.createContext();

export const useAuth = () => {
    return React.useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState()

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        // return auth.signInWithEmailAndPassword()
        return auth.signInWithEmailAndPassword(email, password)
        // .catch(function (error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     if (errorCode === 'auth/wrong-password') {
        //         return alert('Wrong password.');
        //     } else {
        //         return alert(errorMessage);
        //     }
        // })

    }

    React.useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unSubscribe
    }, []);


    return <AuthContext.Provider
        value={{
            currentUser,
            signUp,
            login
        }}>
        {children}
    </AuthContext.Provider>

}