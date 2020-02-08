import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg"; // this is a special syntax in React for importing SVG

import { auth } from "../../firebase/firebase.utils";

import { connect} from 'react-redux'; // connect: high order component that lets use modify our component to have access the things related to redux. conect take 2 functions as parameters (the second one is optional), and return another high order component which wrap our component.
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    shop
                </Link>
                <Link className="option" to="/shop">
                    contact
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        sign out
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        sign in
                    </Link>
                )}                
                <CartIcon /> 
            </div>
            { hidden ? null : <CartDropdown />}
        </div>
    );
}

// this naming can be anything but mapStateToProps is standard with redux codebases
// as the function name indicates that this function map state to props, and return props
// this props will be passed to our component wrapped in the last parentheses.
// input state is root-reducer
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({currentUser, hidden});
// which means:
// ({
//     currentUser: currentUser,
//     hidden: hidden    
// });

export default connect(mapStateToProps)(Header);
