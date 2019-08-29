import React, { useState } from 'react';

import {
  LoginMainFooterBandItem,
  LoginPage
} from '@patternfly/react-core';
import Feeds from '../../events/page/component';

import brandImg from '../../../shared/utils/logo/full.png';
import images from '../../../shared/utils/patternfly-bg-images'
import SignUpForm from '../signup'
import LoginForm from '../login'

export const SignIn = ({
  onUserLogin,
  onUserSignup
}) => {
  const [loginToggle, setLoginToggle] = useState(true)

  const signUpForAccountMessage = (
      <LoginMainFooterBandItem>
        {loginToggle ? 'Need an account?' : 'Already have an account?'} 
        <a href="#" onClick={ () => loginToggle 
            ? setLoginToggle(false) 
            : setLoginToggle(true) }> {loginToggle ? 'Sign up' : 'Login'}
        </a>
      </LoginMainFooterBandItem>
  );

  const isLoggedIn = onUserLogin.inProgress 
                    || onUserSignup.inProgress
                    || onUserLogin.data == null 
                    || onUserLogin.data.length == 0 && onUserSignup.data.length == 0

  return (
        isLoggedIn
        ? <LoginPage
            footerListVariants="inline"
            brandImgSrc={brandImg}
            brandImgAlt="COP logo"
            backgroundImgSrc={images}
            backgroundImgAlt="Images"
            textContent="
            This is a community organisation portal for Cape Town based organisations to upload a profile of what they do and social issues they work on"
            loginTitle={loginToggle ? 'Log in to your account' : 'Create an account'}
            loginSubtitle="Please use your email as username"
            signUpForAccountMessage={signUpForAccountMessage}
          >
          {loginToggle 
            ? <LoginForm onUserLogin={onUserLogin} /> 
            : <SignUpForm onUserSignup={onUserSignup} />
          }
        </LoginPage>
      : <Feeds userName={onUserLogin.data.Name}/>
  );
}

export default SignIn;
