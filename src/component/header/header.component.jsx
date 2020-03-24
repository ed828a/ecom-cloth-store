import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden, selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink, UserNameContainer } from './header.styles';
import { signOutStart } from "../../redux/user/user.action";

function Header({ currentUser, hidden, signOutStart, cartItems }) {
    console.log("cartItems = ", cartItems);
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
                    <OptionDiv onClick={() => signOutStart(currentUser.id, cartItems)}>
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
    hidden: selectCartHidden,
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    signOutStart: (uid, cartItems) => dispatch(signOutStart({uid, cartItems}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
