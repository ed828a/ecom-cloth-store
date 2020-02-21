import "./sign-in.scss";

import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isSignInClicked: false
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" }); // reset form
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
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
                    <div className="buttons">
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
                        >
                            sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
