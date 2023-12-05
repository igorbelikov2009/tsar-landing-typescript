// В проекте не учавствует, оставил для себя
import React, { FC, useState } from "react";
import InputField from "../InputField/InputField";
import InputTitle from "../InputTitle/InputTitle";
import styles from "./MyInput.module.scss";

interface MyInputProps {
  type: string; // "text"
  name: string; // "firstName"
  // возможные поля валидации
  required?: any;
  minLength?: number; // 2
  maxLength?: number; // 11
  email?: any;
  numeric?: any;
  // возможные поля валидации
  title: string; // "Ваше имя"
  validationError: string; // текст ошибки проверки ("Некорректное имя")
  isRequiredError: boolean; // false, начинает работать при условии dirty = true
  isValidationError: boolean; // Ошибка проверки
  emitValue: (value: string) => void;
}

const MyInput: FC<MyInputProps> = ({
  type, // тип поля
  name, // название поля
  minLength, // с хуком не надо
  maxLength, // с хуком не надо
  title, // название подсказки
  validationError, // с хуком не надо
  isRequiredError, // с хуком не надо
  isValidationError, // с хуком не надо
  emitValue, // с хуком не надо
}) => {
  const [isDormancy, setDormancy] = useState(true);
  const [isError, setError] = useState(false);

  const onFocus = () => {
    setDormancy(false);
  };
  const onBlur = () => {
    setDormancy(true);
  };

  const onChangeInput = (value: string) => {
    emitValue(value);
    if (minLength) {
      setError(value.length > minLength);
    }
    console.log(value);
  };

  // console.log("isDormancy :" + isDormancy, "isError :" + isError);

  return (
    <label className={styles["my-input__label"]}>
      <InputTitle title={title} isDormancy={isDormancy} />

      <InputField
        type={type}
        name={name}
        emitValue={onChangeInput}
        emitFocus={onFocus}
        emitBlur={onBlur}
        isError={isError}
      />

      {isRequiredError && (
        <p className={styles["my-input__error"]} v-if="$v.valueInput.$dirty && !$v.valueInput.required">
          "Обязательное поле"
        </p>
      )}

      {isValidationError && (
        <p className={styles["my-input__error"]} v-if="$v.valueInput.$dirty && !$v.valueInput.minLength">
          {validationError}
        </p>
      )}
    </label>
  );
};

export default MyInput;
