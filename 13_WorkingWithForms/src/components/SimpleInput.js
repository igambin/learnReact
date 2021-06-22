import useInput from "../hooks/use-input";
import Input from "./UI/Input";

const SimpleInput = (props) => {
  const notEmptyValidator = (input) => input.trim() !== "";
  const emailValidator = (input) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.trim()
    );

  const nameInput = useInput(
    "name",
    "Name",
    "text",
    notEmptyValidator,
    "must not be empty!"
  );
  const emailInput = useInput(
    "email",
    "Your E-Mail",
    "email",
    emailValidator,
    "has to be valid!"
  );

  const formIsValid = nameInput.isValid && emailInput.isValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(nameInput.value + ", " + emailInput.value);

    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input input={nameInput} />
      <Input input={emailInput} />
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
