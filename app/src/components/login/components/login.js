import './login.css';

import React, { useState } from 'react'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"

export const Login = ({
  userLogin
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = event => {
    event.target.id == 'email' ? setEmail(event.target.value) : setPassword(event.target.value)
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
      <form onSubmit={console.log('handleSubmit', email, password)}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={handleChange}
            type="password"
          />
        </FormGroup>
        <Button block variant="outline-primary" bsSize="large" disabled={!validateForm()}
          type="submit" >
          Login
          </Button>
      </form>
    </div>
  );
}

export default Login;
