import React, { FC } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  name: string;
  isError: boolean;
  emitValue: (value: string) => void;
  emitFocus: () => void;
  emitBlur: () => void;
}

const InputField: FC<InputFieldProps> = ({ type, name, isError, emitBlur, emitFocus, emitValue }) => {
  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      onFocus={emitFocus}
      onBlur={emitBlur}
      onChange={handlerInput}
      className={isError ? styles["my-input__field_invalid"] : styles["my-input__field"]}
    />
  );
};

export default InputField;
