import React from "react";
import {
    FormInputContainer,
    FormInputLabelContainer,
    GroupContainer
} from "./form-input.styles";

const FormInput = ({ label, id, ...restProps }) => {
    return (
        <GroupContainer className="group">
            <FormInputContainer {...restProps} />
            {label ? (
                <FormInputLabelContainer
                    className={`${restProps.value.length ? "shrink" : ""}`}
                    htmlFor={id}
                >
                    {label}
                </FormInputLabelContainer>
            ) : null}
        </GroupContainer>
    );
};

export default FormInput;
