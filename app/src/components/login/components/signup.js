import React, {useState } from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Button
} from '@patternfly/react-core';
import { Spinner } from "react-bootstrap"

export const SignUpForm = ({
  onUserSignup
}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     
    return (
      <Form >
        <FormGroup
          label="Name"
          isRequired
          fieldId="name"
          helperText="Please provide your full name"
        >
          <TextInput
            value={name}
            isRequired
            type="text"
            id="name"
            aria-describedby="name-helper"
            name="name"
            onChange={(value) => setName(value)}
          />
        </FormGroup>
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
            variant={onUserSignup.inProgress ? 'link' : 'primary'} 
            icon={onUserSignup.inProgress && <Spinner animation="border" variant="primary" />} 
            isDisabled={!name || !email || !password} 
            onClick={() => onUserSignup.execute({'name': name, 'email': email, 'password': password})}>
            Signup
        </Button>
      </Form>
    );
};

export default SignUpForm;