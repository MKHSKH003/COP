import React, {useState } from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Button
} from '@patternfly/react-core';
import { Spinner } from "react-bootstrap"

export const LoginForm = ({
  onUserLogin,
  setIsUserLoggedIn
}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <Form >  
        <FormGroup label="Email" isRequired fieldId="email">
          <TextInput
            value={email}
            onChange={(value) => setEmail(value)}
            isRequired
            type="email"
            id="email"
            name="email"
          />
        </FormGroup>
        <FormGroup label="Password" isRequired fieldId="password">
          <TextInput
            value={password}
            onChange={(value) => setPassword(value)}
            isRequired
            type="password"
            id="password"
            name="password"
          />
        </FormGroup>

        <Button 
            variant={onUserLogin.inProgress ? 'link' : 'primary'} 
            icon={onUserLogin.inProgress && <Spinner animation="border" variant="primary" />} 
            isDisabled={!email || !password} 
            onClick={() => onUserLogin.execute({'username': email, 'password': password})}>
            Login
        </Button>
      </Form>
    );
};

export default LoginForm;