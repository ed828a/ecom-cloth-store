import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
    SignInContainer,
    TitleContainer,
    ButtonsContainer
} from "./sign-in.styles";
import {
    googleSignInStart,
    emailSignInStart
} from "../../redux/user/user.action";

import { connect } from "react-redux";

export const SignIn = props => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
    const [isSignInClicked, setIsSignInClicked] = useState(false);
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (!isSignInClicked) return;

        if (password.length < 8) {
            alert("Password must be at least 8 charactors");
            return;
        }

        if (!email.includes("@")) {
            alert("Email is invalide");
            return;
        }

        const { emailSignInStart } = props;
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value});

    };

    const { googleSignInStart } = props;

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    required={isSignInClicked ? true : false}
                />

                <FormInput
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required={isSignInClicked ? true : false}
                />

                <ButtonsContainer>
                    <CustomButton
                        type="submit"
                        onClick={() => setIsSignInClicked(true)}
                    >
                        sign in
                    </CustomButton>

                    <CustomButton
                        //  because this button is inside the form, the default type is still submit, button type won't submit the form.
                        type="button"
                        onClick={() => {
                            googleSignInStart();
                        }}
                        isGoogleSignIn
                    >
                        sign in with google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
