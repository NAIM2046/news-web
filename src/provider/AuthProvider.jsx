import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null) ; 
    const [loader , setLoader] = useState(true) ;

    const createUser = (email , password) =>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth , email , password) ;
    }
      
    const logOut =()=>{
        setLoader(true)
       return signOut(auth) ;
    }
          
     const logIn = (email , password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password) ;
     }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser=>{
            console.log("user in the auht state Change " , currentUser) ; 
            setLoader(false)
            setUser(currentUser) ;
        })
        return ()=>{
            unSubscribe() ;
        }
    } ,[]) 

    const authInfo ={
        user , 
        createUser ,
        logOut ,
        logIn ,
        loader
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;