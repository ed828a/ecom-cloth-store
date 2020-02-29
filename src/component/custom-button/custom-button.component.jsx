
import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

function CustomButton({ children, ...restProps }) {
    return (
        <CustomButtonContainer {...restProps} >
            {children}
        </CustomButtonContainer>
    );
}

export default CustomButton;
