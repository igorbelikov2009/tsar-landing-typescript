import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IOptionItem } from "../../../models/types";
import Checkbox from "../../ui/Checkbox/Checkbox";
import InputSubmit from "../../ui/inputs/InputSubmit/InputSubmit";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import SelectorAndOptionBlock from "../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import styles from "./TsarForm.module.scss";

type Inputs = {
  userName: string;
  surname: string; // фамилия
  patronymic: string; // отчество
  phone: string;
};

const TsarForm = () => {
  const [isDormancyUserName, setDormancyUserName] = useState(true);
  const [isDormancySurname, setDormancySurname] = useState(true);
  const [isDormancyPatronymic, setDormancyPatronymic] = useState(true);
  const [isDormancyPhone, setDormancyPhone] = useState(true);
  const [isAgree, setAgree] = useState(false);

  const [currentValue, setCurrentValue] = useState("Базовый на 1 месяц");
  const [, setId] = useState("0");
  const [isVisible, setIsVisible] = useState(false);

  const title = "Продолжая, я соглашаюсь с  ";
  const span = " правилами ";
  const secondTitle = " и ";
  const secondSpan = " программой ";
  const subtitle = "оказания услуг.";

  const optionsItems: IOptionItem[] = [
    { id: "0", value: "Базовый на 1 месяц", date: "Базовый на 1 месяц" },
    { id: "1", value: "Расширенный на 1 месяц", date: "Расширенный на 1 месяц" },
    { id: "2", value: "Полный на 1 месяц", date: "Полный на 1 месяц" },
  ];

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
    // console.log(formData);
    localStorage.setItem("formData-renaissance-pension", JSON.stringify(formData));
    reset();
    setDormancyUserName(true);
    setDormancySurname(true);
    setDormancyPatronymic(true);
    setDormancyPhone(true);
    setAgree(false);
  };
  // console.log(watch("firstName")); // следит за изменением значения

  const toogleChecked = () => {
    setAgree(!isAgree);
  };

  // Восстановить из localStorage
  if (localStorage.getItem("formData-renaissance-pension")) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formData = JSON.parse(localStorage.getItem("formData-renaissance-pension") || "");
    // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
    // не была нулевой. JSON.parse(localStorage.getItem("formData-renaissance-pension") || "")
  }
  //   console.log(formData);

  const onClickSelector = () => {
    setIsVisible((prev) => !prev);
  };
  const onChangeRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setId(id);
  };
  const onClickRadio = () => {
    setIsVisible(false);
  };

  return (
    <section className={styles["form"]}>
      <div className={styles["form__container"]}>
        <div className={styles["form__container-header"]}>
          <h1 className={styles["form__header"]}>Оформить пакет медицинской помощи</h1>
        </div>

        {/* Здесь через onSubmit мы передаём данные полей в обёртку handleSubmit() */}
        <form className={styles["form__form"]} onSubmit={handleSubmit(onSubmit)}>
          {/* включить проверку с обязательными или другими стандартными правилами проверки HTML */}

          <label className={styles["my-input__label"]}>
            <InputTitle title="Фамилия" isDormancy={isDormancySurname} />

            <input
              className={errors?.surname ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="surname"
              {...register("surname", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancySurname(false);
                },
                onBlur: () => {
                  if (watch("surname").length === 0) {
                    setDormancySurname(true);
                  }
                },

                minLength: {
                  value: 5,
                  message: "Минимум 5 символов",
                },
              })}
            />
            {errors?.surname && (
              <span className={styles["my-input__error"]}>{errors?.surname?.message || "Error!"} </span>
            )}
          </label>

          <label className={styles["my-input__label"]}>
            <InputTitle title="Имя" isDormancy={isDormancyUserName} />

            <input
              className={errors?.userName ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="text"
              {...register("userName", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyUserName(false);
                },
                onBlur: () => {
                  if (watch("userName").length === 0) {
                    setDormancyUserName(true);
                  }
                },
                minLength: {
                  value: 3,
                  message: "Минимум 3 символов",
                },
              })}
            />

            {errors?.userName && (
              <span className={styles["my-input__error"]}>{errors?.userName?.message || "Error!"}</span>
            )}
          </label>

          <label className={styles["my-input__label"]}>
            <InputTitle title="Отчество" isDormancy={isDormancyPatronymic} />

            <input
              className={errors?.patronymic ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="text"
              {...register("patronymic", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyPatronymic(false);
                },
                onBlur: () => {
                  if (watch("patronymic").length === 0) {
                    setDormancyPatronymic(true);
                  }
                },

                minLength: {
                  value: 5,
                  message: "Минимум 5 символов",
                },
              })}
            />
            {errors?.patronymic && (
              <span className={styles["my-input__error"]}>{errors?.patronymic?.message || "Error!"} </span>
            )}
          </label>

          <label className={styles["my-input__label"]}>
            <InputTitle title="Телефон" isDormancy={isDormancyPhone} />

            <input
              className={errors?.phone ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="tel"
              {...register("phone", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyPhone(false);
                },
                onBlur: () => {
                  if (watch("phone").length === 0) {
                    setDormancyPhone(true);
                  }
                },
                minLength: {
                  value: 11,
                  message: "Минимум 11 символов",
                },
                maxLength: {
                  value: 16,
                  message: "Максимум 16 символов",
                },
              })}
            />
            {errors?.phone && <span className={styles["my-input__error"]}>{errors?.phone?.message || "Error!"} </span>}
          </label>

          <div className={styles["form__checkbox-container"]}>
            <Checkbox
              checkedValue={isAgree}
              toogleChecked={toogleChecked}
              title={title}
              span={span}
              secondTitle={secondTitle}
              secondSpan={secondSpan}
              subtitle={subtitle}
            />
          </div>

          <div className={styles["form__selector-container"]}>
            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={optionsItems}
              isVisible={isVisible}
              onClickSelector={onClickSelector}
              emitOnChangeRadio={onChangeRadio}
              emitOnClickRadio={onClickRadio}
            />
          </div>

          <div className={styles["form__button-container"]}>
            <InputSubmit children="Оформить" disabled={!isValid || !isAgree} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default TsarForm;
