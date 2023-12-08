import React, { FC } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  name: string;
  isError: boolean;
  isHeight48px: boolean;
  emitValue: (value: string) => void;
  emitFocus: () => void;
  emitBlur: () => void;
}

const InputField: FC<InputFieldProps> = ({ type, name, isError, isHeight48px, emitBlur, emitFocus, emitValue }) => {
  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  if (isHeight48px) {
    return (
      <input
        type={type}
        name={name}
        onFocus={emitFocus}
        onBlur={emitBlur}
        onChange={handlerInput}
        className={isError ? styles["my-input__field_invalid-16px"] : styles["my-input__field-16px"]}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      onFocus={emitFocus}
      onBlur={emitBlur}
      onChange={handlerInput}
      className={isError ? styles["my-input__field_invalid-24px"] : styles["my-input__field-24px"]}
    />
  );
};

export default InputField;
