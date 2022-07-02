import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [formValues, handleInputChange, reset];
};
