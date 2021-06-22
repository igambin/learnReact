import React from "react";

const Input = (props) => {
  const input = props.input;

  return (
    <div className={`form-control ${input.hasError ? "invalid" : ""}`}>
      <label htmlFor={input.name}>{input.label}</label>
      <input
        type={input.type}
        id={input.name}
        onChange={input.onChangeHandler}
        onBlur={input.onBlurHandler}
      />
      {input.hasError && <p className="error-text">{input.errorMsg}</p>}
    </div>
  );
};

export default Input;
