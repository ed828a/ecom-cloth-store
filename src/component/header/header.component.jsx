import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink, UserNameContainer } from './header.styles';

function Header({ currentUser, hidden }) {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <UserNameContainer>
                {currentUser
                    ? currentUser.displayName
                    : "You are not signed in"}
            </UserNameContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                {currentUser ? (
                    <OptionDiv onClick={() => auth.signOut()}>
                         Sign out                       
                    </OptionDiv>
                ) : (
                    <OptionLink to="/signin">
                        Sign in
                    </OptionLink>
                )}

                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
