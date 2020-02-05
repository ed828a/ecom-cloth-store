import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        });
    };

    handleChanges = event => {
        console.log(event);
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChanges}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChanges}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn={true}
                        >
                            {" "}sign in with Google{" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
