import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import {
    SignInContainer,
    TitleContainer,
    ButtonsContainer
} from "./sign-in.styles";
import { googleSignInStart } from '../../redux/user/user.action';

import { connect } from 'react-redux';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isSignInClicked: false
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password, isSignInClicked } = this.state;

        if (!isSignInClicked) return;

        if (password.length < 8) {
            alert("Password must be at least 8 charactors");
            return;
        }

        if (!email.includes("@")) {
            alert("Email is invalide");
            return;
        }

        try {
            // const returnObject =
            await auth.signInWithEmailAndPassword(email, password);
            // console.log('returnObject: ', returnObject);

            this.setState({ email: "", password: "" }); // reset form
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {

        const { googleSignInStart } = this.props;

        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        required={this.state.isSignInClicked ? true : false}
                    />

                    <FormInput
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required={this.state.isSignInClicked ? true : false}
                    />
                    
                    <ButtonsContainer>
                        <CustomButton
                            type="submit"
                            onClick={() =>
                                this.setState({ isSignInClicked: true })
                            }
                        >
                            sign in
                        </CustomButton>
                            
                        <CustomButton
                        //  because this button is inside the form, the default type is still submit, button type won't submit the form.
                            type='button'
                            onClick={() => {
                                // this.setState({ isSignInClicked: false });
                                // signInWithGoogle();
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
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);
