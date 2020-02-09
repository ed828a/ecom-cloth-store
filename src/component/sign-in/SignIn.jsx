import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log("eventTarget: ", event.target.textContent);

        const { email, password } = this.state;

        if (password.length < 8) {
            alert("Password must be at least 8 charactors");
            return;
        } else if (!email.includes("@")) {
            alert("Email is invalide");
            return;
        }

        try {
            const { user } = await auth.signInWithEmailAndPassword(
                email,
                password
            );                      
            if(user) console.log('sign-in user',user);

            // clear email and password
            this.setState({
                email: "",
                password: ""
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChanges = event => {
        // console.log(event);
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
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn={true}
                        >
                            {" "}
                            sign in with Google{" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
