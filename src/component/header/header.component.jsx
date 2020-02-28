import "./header.scss";

import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

function Header({ currentUser, hidden }) {
    // console.log("props:", props);
    // const { currentUser, hidden } = props;
    // currentUser ? console.log("displayName") : console.log("not sign in");

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="username">
                {currentUser
                    ? currentUser.displayName
                    : "You are not signed in"}{" "}
            </div>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign out
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Sign in
                    </Link>
                )}

                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
