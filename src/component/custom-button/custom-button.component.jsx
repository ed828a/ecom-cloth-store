import "./custom-button.scss";

import React from "react";

function CustomButton({ children, isGoogleSignIn, ...restProps }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...restProps}>
            {children}
        </button>
    );
}

export default CustomButton;
