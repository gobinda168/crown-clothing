import React from "react";
import "./form-input.style.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input onChange={handleChange} {...otherProps} className="form-input" />
      {label ? (
        <label
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
