/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkbox from "../../ui/Checkbox/Checkbox";
import InputSubmit from "../../ui/inputs/InputSubmit/InputSubmit";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import styles from "./PassportDetails.module.scss";

type Inputs = {
  passportSeries: string;
  passportNumber: string;
  dateOfBirth: string;
  address: string;
};

const PassportDetails = () => {
  const [isDormancyPassportSeries, setDormancyPassportSeries] = useState(true);
  const [isDormancyPassportNumber, setDormancyPassportNumber] = useState(true);
  const [isDormancyDateOfBirth, setDormancyDateOfBirth] = useState(true);
  const [isDormancyAddress, setDormancyAddress] = useState(true);

  const [seriesPassport, setSeriesPassport] = useState("");
  const [numberPassport, setNumberPassport] = useState("");
  const [dateOfBirtPassporth, setDateOfBirthPassport] = useState("");
  const [addressPassport, setAddressPassport] = useState("");
  // console.log(seriesPassport, numberPassport, dateOfBirtPassporth, addressPassport);

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
    setDormancyPassportSeries(true);
    setDormancyPassportNumber(true);
    setDormancyDateOfBirth(true);
    setDormancyAddress(true);
  };
  // console.log(watch("firstName")); // следит за изменением значения

  return (
    <form className={styles["passport-details"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["passport-details__container-heading"]}>
        <h1 className={styles["passport-details__heading"]}> Паспорт </h1>
      </div>

      <div className={styles["passport-details__data-container"]}>
        <div className={styles["passport-details__container-passport-series"]}>
          <label className={styles["my-input__label"]}>
            <InputTitle title="серия" isDormancy={isDormancyPassportSeries} />

            <input
              className={errors?.passportSeries ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="passportSeries"
              {...register("passportSeries", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyPassportSeries(false);
                  setSeriesPassport(event.target.value);
                },
                onBlur: () => {
                  if (watch("passportSeries").length === 0) {
                    setDormancyPassportSeries(true);
                  }
                },

                minLength: {
                  value: 4,
                  message: "Минимум 4 символа",
                },
                maxLength: {
                  value: 4,
                  message: "Максимум 4 символа",
                },
              })}
            />
            {errors?.passportSeries && (
              <span className={styles["my-input__error"]}>{errors?.passportSeries?.message || "Error!"} </span>
            )}
          </label>
        </div>

        <div className={styles["passport-details__container-passport-number"]}>
          <label className={styles["my-input__label"]}>
            <InputTitle title="номер" isDormancy={isDormancyPassportNumber} />

            <input
              className={errors?.passportNumber ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="text"
              {...register("passportNumber", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyPassportNumber(false);
                  setNumberPassport(event.target.value);
                },
                onBlur: () => {
                  if (watch("passportNumber").length === 0) {
                    setDormancyPassportNumber(true);
                  }
                },
                minLength: {
                  value: 6,
                  message: "Минимум 6 символов",
                },
                maxLength: {
                  value: 6,
                  message: "Минимум 6 символов",
                },
              })}
            />

            {errors?.passportNumber && (
              <span className={styles["my-input__error"]}>{errors?.passportNumber?.message || "Error!"}</span>
            )}
          </label>
        </div>

        <div className={styles["passport-details__container-date-of-birth"]}>
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

      <div className={styles["passport-details__container-address"]}>
        <label className={styles["my-input__label"]}>
          <InputTitle title="Адрес регистрации" isDormancy={isDormancyAddress} />

          <input
            className={errors?.address ? styles["my-input__field_invalid"] : styles["my-input__field"]}
            type="text"
            {...register("address", {
              required: "Это поле обязательно к заполнению",
              onChange: (event) => {
                setDormancyAddress(false);
                setAddressPassport(event.target.value);
              },
              onBlur: () => {
                if (watch("address").length === 0) {
                  setDormancyAddress(true);
                }
              },
              minLength: {
                value: 11,
                message: "Минимум 11 символов",
              },
            })}
          />
          {errors?.address && (
            <span className={styles["my-input__error"]}>{errors?.address?.message || "Error!"} </span>
          )}
        </label>
      </div>
    </form>
  );
};

export default PassportDetails;
