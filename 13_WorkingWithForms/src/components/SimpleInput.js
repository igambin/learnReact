import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEMail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      enteredEmail
    );
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailIsTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEMail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!formIsValid) return;

    console.log("name: " + enteredName);
    console.log("mail: " + enteredEmail);

    setEnteredNameIsTouched(false);
    setEnteredName("");
    setEnteredEmailIsTouched(false);
    setEnteredEMail("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputIsInvalid ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={`form-control ${emailInputIsInValid ? "invalid" : ""}`}>
        <label htmlFor="email">Your EMail address</label>
        <input
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          id="email"
        />
        {emailInputIsInValid && (
          <p className="error-text">EMail has to be valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button
          className={!formIsValid ? "invalid" : ""}
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
