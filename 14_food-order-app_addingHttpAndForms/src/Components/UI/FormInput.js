import React from "react";
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const input = props.input;

  return (
    <div
      className={`${classes["form-control"]} ${
        input.hasError ? classes.invalid : ""
      }`}
    >
      <label htmlFor={input.name}>{input.label}</label>
      <input
        type={input.type}
        id={input.name}
        value={input.value}
        onChange={input.onChangeHandler}
        onBlur={input.onBlurHandler}
      />
      {input.hasError && <p className={classes.error}>{input.errorMsg}</p>}
    </div>
  );
};

export default FormInput;
