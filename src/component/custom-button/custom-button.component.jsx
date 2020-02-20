import "./custom-button.scss";

import React from "react";

function CustomButton({ children, ...restProps }) {
    return (
        <button className="custom-button" {...restProps}>
            {children}
        </button>
    );
}

export default CustomButton;
