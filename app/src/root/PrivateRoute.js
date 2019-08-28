import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userName = localStorage.getItem("userName");

  return (
    <Route
      {...rest}
      render={props =>
        userName ? (
          <Component {...props}  userName={userName}/>
        ) : (
          <Redirect to={'/' } />
        )
      }
    />
  )
}

export default PrivateRoute