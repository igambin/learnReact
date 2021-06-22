import useInput from "../hooks/use-input";
import Input from "./UI/Input";

const BasicForm = (props) => {
  const textNotEmptyValidator = (input) => input.trim() !== "";
  const emailValidator = (input) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.trim()
    );

  const firstNameInput = useInput(
    "firstName",
    "First Name",
    "text",
    textNotEmptyValidator,
    "must not be empty!"
  );
  const lastNameInput = useInput(
    "lastName",
    "Last Name",
    "text",
    textNotEmptyValidator,
    "must not be empty!"
  );
  const emailInput = useInput(
    "email",
    "E-Mail Address",
    "email",
    emailValidator,
    "has to be valid!"
  );

  const formIsValid =
    firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(
      [firstNameInput, lastNameInput, emailInput].map((i) => i.value).join(", ")
    );

    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <Input input={firstNameInput} />
        <Input input={lastNameInput} />
      </div>
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

export default BasicForm;
