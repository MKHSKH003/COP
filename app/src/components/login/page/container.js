import React, { useState } from 'react';
import { toast } from 'react-toastify';

import useApi from '../../../shared/components/react-use-api'; 

import { loginApi } from '../../../api';
import { loginBaseUrl } from '../../../shared/constants/api-selectors'

import SignIn from './component';

export default ({
}) => {
    const [user, setUser] = useState();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const login = useApi({
        action: loginDetails => loginApi.login(loginBaseUrl, loginDetails.username, loginDetails.password),
        initialValue: [],
        defer: true,
        onSuccess: user => {
            if(user===null) throw Error;
            toast.success("Welcome "+user.Name);
            setUser(user);
            setIsUserLoggedIn(true);
        },
        onError: () => toast.error("Incorrect login details")
    }, []);
    
    const signup = useApi({
        action: signupDetails => loginApi.signup(loginBaseUrl, signupDetails.name, signupDetails.email, signupDetails.password),
        initialValue: [],
        defer: true,
        onSuccess: userSignup => {
            if(userSignup.user == null) throw Error(userSignup.message);
            toast.success("Signed up successfully");
        },
        onError: (e) => toast.error(e.message)
    }, []);

    return ( 
        <SignIn  
            isUserLoggedIn={isUserLoggedIn}
            user={user}
            onUserLogin={login} 
            onUserSignup={signup}
        />
    );
};
