import React, { FC, useState, useContext } from "react";
import { UserDataContext } from "../../../context/index";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Checkbox from "../../ui/Checkbox/Checkbox";
import InputSubmit from "../../ui/inputs/InputSubmit/InputSubmit";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import SelectorAndOptionBlock from "../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import styles from "./TsarForm.module.scss";
//
import ReactSelect from "react-select";
import { IOption, IPackade } from "../../../models/types";

interface TsarFormProps {
  valueСhoosePackage: string;
}

type Inputs = {
  userName: string;
  surname: string; // фамилия
  patronymic: string; // отчество
  phone: string;
  packade: IPackade;
};

const TsarForm: FC<TsarFormProps> = ({ valueСhoosePackage }) => {
  const { userName, setUserName, surname, setSurname, patronymic, setPatronymic, phone, setPhone } =
    useContext(UserDataContext);

  console.log(userName, surname, patronymic, phone);
  const [isDormancyUserName, setDormancyUserName] = useState(true);
  const [isDormancySurname, setDormancySurname] = useState(true);
  const [isDormancyPatronymic, setDormancyPatronymic] = useState(true);
  const [isDormancyPhone, setDormancyPhone] = useState(true);

  // для кастомного селекта
  const [currentValue, setCurrentValue] = useState("Выбрать пакет");
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkgray] = useState(false);

  // selector
  const options: IOption[] = [
    { value: `Базовый ${valueСhoosePackage}`, label: `Базовый ${valueСhoosePackage}` },
    { value: `Расширенный ${valueСhoosePackage}`, label: `Расширенный ${valueСhoosePackage}` },
    { value: `Полный ${valueСhoosePackage}`, label: `Полный ${valueСhoosePackage}` },
  ];

  // checkbox
  const [isAgree, setAgree] = useState(false);
  const title = "Продолжая, я соглашаюсь с  ";
  const span = " правилами ";
  const secondTitle = " и ";
  const secondSpan = " программой ";
  const subtitle = "оказания услуг.";

  // for react-select
  const getValue = (value: string) => (value ? options.find((option) => option.value === value) : "");

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
    control, // для селектора
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  let formData = {};

  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // formData - это набор данных из нашей формы
    console.log(formData);
    localStorage.setItem("userData-renaissance-health", JSON.stringify(formData));
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
  if (localStorage.getItem("userData-renaissance-health")) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formData = JSON.parse(localStorage.getItem("userData-renaissance-health") || "");
    // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
    // не была нулевой. JSON.parse(localStorage.getItem("userData-renaissance-health") || "")
  }
  // console.log(formData);

  // для кастомного селекта
  const onClickSelector = () => {
    setIsVisible((prev) => !prev);
  };
  const onChangeRadio = (value: string) => {
    setCurrentValue(value);
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
                  setUserName(event.target.value);
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
                  setSurname(event.target.value);
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
                  setPatronymic(event.target.value);
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
                  setPhone(event.target.value); ///////////////////////////////
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
            <Controller
              control={control}
              name="packade.choosePackade"
              rules={{ required: "Packade is require!" }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <div>
                  <ReactSelect
                    placeholder="Выбрать пакет"
                    options={options}
                    value={getValue(value)}
                    onChange={(newValue) => onChange((newValue as IOption).value)}
                  />

                  {error && <div className={styles["my-input__error"]}>{error.message || "Error!"} </div>}
                </div>
              )}
            />

            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={options}
              isVisible={isVisible}
              isDarkgray={isDarkgray}
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
