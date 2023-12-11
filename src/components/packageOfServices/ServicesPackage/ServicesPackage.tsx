/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkbox from "../../ui/Checkbox/Checkbox";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import styles from "./ServicesPackage.module.scss";

type Inputs = {
  dataName: string;
  dateOfBirth: string;
  pormoCode: string;
};

const ServicesPackage = () => {
  const [isDormancyDataName, setDormancyDataName] = useState(true);
  const [isDormancyDateOfBirth, setDormancyDateOfBirth] = useState(true);
  const [isDormancyPormoCode, setDormancyPormoCode] = useState(true);

  const [nameData, setNameData] = useState("");
  const [dateOfBirtPassporth, setDateOfBirthPassport] = useState("");
  const [pormoCode, setPormoCode] = useState("");

  const [isAgreeForMe, setAgreeForMe] = useState(false);
  const [isAgreeAnotherPerson, setAgreeAnotherPerson] = useState(false);
  const [isAgreeWholeFamily, setAgreeWholeFamily] = useState(false);
  const [isArrivalDoctor, setArrivalDoctor] = useState(false);
  const [isMkad30Km, setMkad30Km] = useState(false);

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

  const toogleArrivalDoctor = () => {
    setArrivalDoctor(!isArrivalDoctor);
    // console.log(!isArrivalDoctor);
  };

  const toogleMkad30Km = () => {
    setMkad30Km(!isMkad30Km);
    // console.log(!isMkad30Km);
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

      {isAgreeAnotherPerson ? (
        <div className={styles["services-package__container-data-another-person-show"]}>
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
      ) : (
        <div className={styles["services-package__container-data-another-person-hide"]}>
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
      )}

      <div className={styles["services-package__container-checkbox"]}>
        <Checkbox
          isCircle={true}
          checkedValue={isAgreeWholeFamily}
          toogleChecked={toogleWholeFamily}
          title="Всей семье"
        />
      </div>

      <div className={styles["services-package__container-for-checkbox-description"]}>
        <p className={styles["services-package__checkbox-description"]}>
          Супруг, супруга, дети до 18 лет{" "}
          <span className={styles["services-package__checkbox-description-span"]}> + 1000 ₽</span>
        </p>
      </div>

      <div className={styles["services-package__line"]}></div>

      <div className={styles["services-package__container-checkbox"]}>
        <Checkbox
          isCircle={true}
          checkedValue={isArrivalDoctor}
          toogleChecked={toogleArrivalDoctor}
          title="Выезд врача в пределах МКАД"
        />
      </div>

      <div className={styles["services-package__container-checkbox"]}>
        <Checkbox isCircle={true} checkedValue={isMkad30Km} toogleChecked={toogleMkad30Km} title="Всей семье" />
      </div>

      <div className={styles["services-package__container-for-checkbox-description"]}>
        <p className={styles["services-package__checkbox-description"]}>+ 1000 ₽</p>
      </div>

      <div className={styles["services-package__container-promo-code"]}>
        <div className={styles["services-package__container-promo-code-title"]}>
          <label className={styles["my-input__label"]}>
            <InputTitle title="Промокод" isDormancy={isDormancyPormoCode} />

            <input
              className={errors?.pormoCode ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="pormoCode"
              {...register("pormoCode", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyPormoCode(false);
                  setPormoCode(event.target.value);
                },
                onBlur: () => {
                  if (watch("pormoCode").length === 0) {
                    setDormancyPormoCode(true);
                  }
                },

                minLength: {
                  value: 6,
                  message: "Минимум 6 символов",
                },
              })}
            />
            {errors?.pormoCode && (
              <span className={styles["my-input__error"]}>{errors?.pormoCode?.message || "Error!"} </span>
            )}
          </label>
        </div>
        <div className={styles["services-package__container-promo-code-button"]}>
          <button disabled={!!errors?.pormoCode} className={styles["services-package__promo-code-button"]}>
            Применить
          </button>
        </div>
      </div>

      <div className={styles["services-package__line"]}></div>
      <div className={styles["services-package__container-services-available"]}>
        <p className={styles["services-package__services-available"]}>
          Услуги будут доступны в течение суток после оплаты.
        </p>
      </div>
    </div>
  );
};

export default ServicesPackage;
