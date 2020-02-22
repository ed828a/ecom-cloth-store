import "./header.scss";

import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

function Header(props) {
    console.log('props:', props);
    const {currentUser} = props;

    currentUser ? console.log('displayName') : console.log('not sign in');

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="username">{
                currentUser ? currentUser.displayName : "You are not signed in"
            } </div>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={ () => auth.signOut() }>Sign out</div> 
                    : 
                    <Link className="option" to="/signin">Sign in</Link>
                }
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
