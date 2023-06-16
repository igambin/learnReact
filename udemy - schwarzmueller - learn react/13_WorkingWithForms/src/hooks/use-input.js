import { useState } from "react";

const useInput = (name, label, type, valueValidator, errMsg) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = valueValidator(value);
  const hasError = !isValid && isTouched;

  const errorMsg = `'${label}' ${errMsg}`;

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    name,
    label,
    type,
    value,
    isValid,
    hasError,
    errorMsg,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
