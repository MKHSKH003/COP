import React from 'react'
//import AuthService from './Services/AuthService'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const userName = localStorage.getItem("userName");
  console.log('ccc', userName)
  return (
    <Route
      {...rest}
      render={props =>
        userName ? (
          <Component {...props}  userName={userName}/>
        ) : (
          <Redirect to={'/login' } />
        )
      }
    />
  )
}

export default PrivateRoute