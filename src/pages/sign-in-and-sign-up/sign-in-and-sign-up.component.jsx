import React from 'react';

import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (
    <div className='sign-up-and-sign-in'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;