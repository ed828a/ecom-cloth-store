import React from "react";
import "./form-input.scss";

const FormInput = ({label, id, ...restProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"                
                {...restProps}
            />
            {label ? (
                <label
                    className={`${
                        restProps.value.length ? "shrink" : ""
                    } form-input-label`}
                    htmlFor={id}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;