import React, {useState} from 'react'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"

import NavigationBar from '../navbar'
import Login from '../login'
import Signup from '../signup'

export const SignIn = ({
    userSignup
}) => {
    const [userSignUp, setUserSignUp] = useState(false)
    const [userLogin, setUserLogin] = useState(true)

    return (
      <>
        <NavigationBar 
          userSignUp={userSignUp} 
          setUserSignUp={setUserSignUp}
          setUserLogin={setUserLogin}  
        />
        {userSignUp  
          ? <Signup />
          : <Login />
        }
      </>
    );
}

export default SignIn;
