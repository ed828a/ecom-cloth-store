import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import {
    SignInContainer,
    TitleContainer,
    ButtonsContainer
} from "./sign-in.styles";

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
                    {/* <input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor="password">password</label> */}
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
                            type="text"
                            onClick={() => {
                                this.setState({ isSignInClicked: false });
                                signInWithGoogle();
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

export default SignIn;
