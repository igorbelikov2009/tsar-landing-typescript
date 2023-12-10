/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkbox from "../../ui/Checkbox/Checkbox";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import styles from "./ServicesPackage.module.scss";

type Inputs = {
  dataName: string;
  dateOfBirth: string;
};

const ServicesPackage = () => {
  const [isDormancyDataName, setDormancyDataName] = useState(true);
  const [isDormancyDateOfBirth, setDormancyDateOfBirth] = useState(true);

  const [nameData, setNameData] = useState("");
  const [dateOfBirtPassporth, setDateOfBirthPassport] = useState("");

  const [isAgreeForMe, setAgreeForMe] = useState(false);
  const [isAgreeAnotherPerson, setAgreeAnotherPerson] = useState(false);
  const [isAgreeWholeFamily, setAgreeWholeFamily] = useState(false);

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  let formData = {};

  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // formData - это набор данных из нашей формы
    console.log(formData);
    localStorage.setItem("userData-renaissance-health", JSON.stringify(formData));
    reset();
    setDormancyDataName(true);
    setDormancyDateOfBirth(true);
  };
  // console.log(watch("firstName")); // следит за изменением значения

  const toogleForMe = () => {
    setAgreeForMe(!isAgreeForMe);
    // console.log(!isAgreeForMe);
  };

  const toogleAnotherPerson = () => {
    setAgreeAnotherPerson(!isAgreeAnotherPerson);
    // console.log(!isAgreeAnotherPerson);
  };

  const toogleWholeFamily = () => {
    setAgreeWholeFamily(!isAgreeWholeFamily);
    // console.log(!isAgreeWholeFamily);
  };

  return (
    <div className={styles["services-package"]}>
      <div className={styles["services-package__container-heading"]}>
        <h1 className={styles["services-package__heading"]}> Пакет услуг </h1>
      </div>

      <div className={styles["services-package__container-checkbox"]}>
        <Checkbox isCircle={true} checkedValue={isAgreeForMe} toogleChecked={toogleForMe} title="Для меня" />
      </div>

      <div className={styles["services-package__container-checkbox"]}>
        <Checkbox
          isCircle={true}
          checkedValue={isAgreeAnotherPerson}
          toogleChecked={toogleAnotherPerson}
          title="Другому человеку"
        />
      </div>

      <div className={styles["services-package__container-data-another-person"]}>
        <div className={styles["services-package__container-for-name"]}>
          <label className={styles["my-input__label"]}>
            <InputTitle title="Фамилия Имя Отчество" isDormancy={isDormancyDataName} />

            <input
              className={errors?.dataName ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="dataName"
              {...register("dataName", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyDataName(false);
                  setNameData(event.target.value);
                },
                onBlur: () => {
                  if (watch("dataName").length === 0) {
                    setDormancyDataName(true);
                  }
                },

                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
            />
            {errors?.dataName && (
              <span className={styles["my-input__error"]}>{errors?.dataName?.message || "Error!"} </span>
            )}
          </label>
        </div>

        <div className={styles["services-package__container-for-date-birth"]}>
          <label className={styles["my-input__label"]}>
            <InputTitle title="Дата рождения" isDormancy={isDormancyDateOfBirth} />

            <input
              className={errors?.dateOfBirth ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="text"
              {...register("dateOfBirth", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyDateOfBirth(false);
                  setDateOfBirthPassport(event.target.value);
                },
                onBlur: () => {
                  if (watch("dateOfBirth").length === 0) {
                    setDormancyDateOfBirth(true);
                  }
                },
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
                maxLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
            />

            {errors?.dateOfBirth && (
              <span className={styles["my-input__error"]}>{errors?.dateOfBirth?.message || "Error!"}</span>
            )}
          </label>
        </div>
      </div>

      <div className={styles["services-package__container-checkbox"]}>
        <Checkbox
          isCircle={true}
          checkedValue={isAgreeWholeFamily}
          toogleChecked={toogleWholeFamily}
          title="Всей семье"
        />
      </div>
    </div>
  );
};

export default ServicesPackage;
