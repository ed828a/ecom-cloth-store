import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignupTitleContainer } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";

export const SignUp = props => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (!displayName) {
            alert("Display Name isn't entered, please try again");
            return;
        }

        if (password !== confirmPassword) {
            alert("password don't match, please try again.");
            return;
        } else if (password.length < 8) {
            alert("Password must be at least 8 charactors");
            return;
        } else if (!email.includes("@")) {
            alert("Email is invalid");
            return;
        }

        const { signUpStart } = props;
        signUpStart(email, password, displayName);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    return (
        <SignUpContainer>
            <SignupTitleContainer>I don't have an account</SignupTitleContainer>
            <span>Sign up with your name, email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    id="displayName"
                    required
                />
                <FormInput
                    type="email "
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    id="email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    id="password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="confirm password"
                    id="confirmPassword"
                    required
                />

                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) =>
        dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);
