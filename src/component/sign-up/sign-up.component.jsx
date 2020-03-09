import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer, SignupTitleContainer } from "./sign-up.styles";
import { signUpStart } from '../../redux/user/user.action';
import { connect } from "react-redux";

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(!displayName){
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

        const { signUpStart } = this.props;
        signUpStart( email, password, displayName );
        // try {
        //     // get userAuth from auth.createUserWithEmailAndPassword
        //     // becareful, {user} only, can't be any others
        //     const { user } = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );
        //     // console.log("userAuth from SignUp:", user);

        //     await createUserProfileDocument(user, { displayName });

        //     // reset state so clear the form
        //     this.setState({
        //         displayName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     });

        // } catch (error) {
        //     console.error(error);
        //     alert(error.message);
        // }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <SignUpContainer>
                <SignupTitleContainer >I don't have an account</SignupTitleContainer>
                <span>Sign up with your name, email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        id="displayName"
                        required
                    />
                    <FormInput
                        type="email "
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="email"
                        id="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        id="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="confirm password"
                        id="confirmPassword"
                        required
                    />

                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: ( email, password, displayName ) => dispatch(signUpStart({ email, password, displayName }))
})

export default connect(null, mapDispatchToProps)(SignUp);
