import React from 'react'
import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

function SignInAndSignUpPage() {
    return (
        <SignInAndSignUpContainer className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage
