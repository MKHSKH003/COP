import React, { useState } from 'react';
import { Button, Navbar, FormControl, Nav, Form } from "react-bootstrap";

export const NavigationBar = ({
    setUserSignUp,
    setUserLogin,
    userSignUp
}) => {
   
    const onUserSignUp = () => {
        setUserSignUp(true)
        setUserLogin(false)
      }
  
    const onUserLogin = () => {
        setUserLogin(true)
        setUserSignUp(false)
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">UCT - COP</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Events</Nav.Link>
                    <Nav.Link href="#pricing">Location based</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button 
                        variant="outline-primary" 
                        onClick={()=> userSignUp ? onUserLogin() : onUserSignUp()}>{userSignUp ? 'Login' : 'Signup'}
                    </Button>
                </Form>
            </Navbar>
        </>
    );
}

export default NavigationBar;
