import React, { useState } from 'react';

import {
  LoginMainFooterBandItem,
  LoginPage
} from '@patternfly/react-core';
import Feeds from '../../feeds/page/component';

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
            This is placeholder text only. Use this area to place any information or introductory message about your
            application that may be relevant to users."
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
