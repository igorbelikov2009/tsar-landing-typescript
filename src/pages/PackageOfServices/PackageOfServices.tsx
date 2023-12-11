/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserDataContext } from "../../context/index";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import ColoredBlock from "../../components/packageOfServices/ColoredBlock/ColoredBlock";
import ArrowNavigator from "../../components/packageOfServices/ArrowNavigator/ArrowNavigator";
import ServicesPackage from "../../components/packageOfServices/ServicesPackage/ServicesPackage";
import InputTitle from "../../components/ui/inputs/InputTitle/InputTitle";
import styles from "./PackageOfServices.module.scss";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import InputSubmit from "../../components/ui/inputs/InputSubmit/InputSubmit";

type Inputs = {
  passportSeries: string;
  passportNumber: string;
  dateOfBirth: string;
  address: string;
  dataName?: string;
  dateOfBirthAnotherPerson?: string; /// AnotherPerson
  promoCode?: string;
};

const PackageOfServices: FC = () => {
  const {
    userName,
    setUserName,
    surname,
    setSurname,
    patronymic,
    setPatronymic,
    phone,
    setPhone,
    selectedPackage,
    setSelectedPackage,
    packagePrice,
    setPackagePrice,
    isDarkgray,
    setIsDarkgray,
  } = useContext(UserDataContext);
  // console.log(userName, surname, patronymic, phone, selectedPackage, packagePrice);

  const [isDormancyPassportSeries, setDormancyPassportSeries] = useState(true);
  const [isDormancyPassportNumber, setDormancyPassportNumber] = useState(true);
  const [isDormancyDateOfBirth, setDormancyDateOfBirth] = useState(true);
  const [isDormancyAddress, setDormancyAddress] = useState(true);

  const [isDormancyDataName, setDormancyDataName] = useState(true);
  const [isDormancyDateBirthAnother, setDormancyDateBirthAnother] = useState(true); //
  const [isDormancyPromoCode, setDormancyPromoCode] = useState(true);

  const [seriesPassport, setSeriesPassport] = useState("");
  const [numberPassport, setNumberPassport] = useState("");
  const [dateOfBirtPassporth, setDateOfBirthPassport] = useState("");

  const [addressPassport, setAddressPassport] = useState("");
  const [amount, setAmount] = useState<number>(packagePrice);
  //
  const [nameData, setNameData] = useState("Жопа");
  const [dateOfBirthAnotherPerson, setDateOfBirthAnotherPerson] = useState(""); //
  const [promoCode, setPromoCode] = useState("");
  // console.log(seriesPassport, numberPassport, dateOfBirtPassporth, addressPassport);

  // useEffect(() => {
  //   setNameData(`${userName}  ${surname}   ${patronymic}`);
  // }, [patronymic, surname, userName]);

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
    setDormancyDataName(true);
    setDormancyDateBirthAnother(true);
  };
  // console.log(watch("firstName")); // следит за изменением значения

  // checkboxs
  const [isAgreeForMe, setAgreeForMe] = useState(false);
  const [isAgreeAnotherPerson, setAgreeAnotherPerson] = useState(false);
  const [isAgreeWholeFamily, setAgreeWholeFamily] = useState(false);
  const [isArrivalDoctor, setArrivalDoctor] = useState(false);
  const [isMkad30Km, setMkad30Km] = useState(false);

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
    if (!isAgreeWholeFamily) {
      setAmount((prev) => prev + 1000);
    } else {
      setAmount((prev) => prev - 1000);
    }
  };

  const toogleArrivalDoctor = () => {
    setArrivalDoctor(!isArrivalDoctor);
    // console.log(!isArrivalDoctor);
  };

  const toogleMkad30Km = () => {
    setMkad30Km(!isMkad30Km);
    if (!isMkad30Km) {
      setAmount((prev) => prev + 1200);
    } else {
      setAmount((prev) => prev - 1200);
    }
  };
  // console.log(amount);

  return (
    <div className={styles["package-of-services"]}>
      <ColoredBlock />
      <Horizontal isDarkgray={isDarkgray} />
      <div className={styles["package-of-services__container"]}>
        <ArrowNavigator />

        <div className={styles["user-data"]}>
          <div className={styles["user-data__container-name"]}>
            <p className={styles["user-data__name"]}> {surname} </p>
            <p className={styles["user-data__name"]}> {userName} </p>
            <p className={styles["user-data__name"]}> {patronymic} </p>
          </div>
          <p className={styles["user-data__phone"]}> {phone} </p>
          <div className={styles["user-data__container-selected-package"]}>
            <p className={styles["user-data__selected-package"]}> {selectedPackage} </p>
            <p className={styles["user-data__amount-to-paid"]}> - {packagePrice} р </p>
          </div>
        </div>

        <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["passport-details"]}>
            <div className={styles["passport-details__line"]}></div>

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
                        message: "Максимум 6 символов",
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
                        message: "Максимум 10 символов",
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
          </div>

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
                          if (watch("dataName")?.length === 0) {
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
                    <InputTitle title="Дата рождения" isDormancy={isDormancyDateBirthAnother} />

                    <input
                      className={
                        errors?.dateOfBirthAnotherPerson ? styles["my-input__field_invalid"] : styles["my-input__field"]
                      }
                      type="text"
                      {...register("dateOfBirthAnotherPerson", {
                        required: "Это поле обязательно к заполнению",
                        onChange: (event) => {
                          setDormancyDateBirthAnother(false);
                          setDateOfBirthAnotherPerson(event.target.value);
                        },
                        onBlur: () => {
                          if (watch("dateOfBirthAnotherPerson")?.length === 0) {
                            setDormancyDateBirthAnother(true);
                          }
                        },
                        minLength: {
                          value: 10,
                          message: "Минимум 10 символов",
                        },
                        maxLength: {
                          value: 10,
                          message: "Максимум 10 символов",
                        },
                      })}
                    />

                    {errors?.dateOfBirthAnotherPerson && (
                      <span className={styles["my-input__error"]}>
                        {errors?.dateOfBirthAnotherPerson?.message || "Error!"}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            ) : (
              <div className={styles["services-package__container-data-another-person-hide"]}>
                <div className={styles["services-package__container-for-name"]}>
                  <label className={styles["my-input__label"]}>
                    <InputTitle title="Фамилия Имя Отчество" />

                    <input className={styles["my-input__field"]} />
                  </label>
                </div>

                <div className={styles["services-package__container-for-date-birth"]}>
                  <label className={styles["my-input__label"]}>
                    <InputTitle title="Дата рождения" />

                    <input
                      className={
                        errors?.dateOfBirthAnotherPerson ? styles["my-input__field_invalid"] : styles["my-input__field"]
                      }
                      type="text"
                    />

                    {errors?.dateOfBirthAnotherPerson && (
                      <span className={styles["my-input__error"]}>
                        {errors?.dateOfBirthAnotherPerson?.message || "Error!"}
                      </span>
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

            <div className={styles["services-package__doctors-visit"]}>
              <div className={styles["services-package__container-checkbox"]}>
                <Checkbox
                  isCircle={true}
                  checkedValue={isArrivalDoctor}
                  toogleChecked={toogleArrivalDoctor}
                  title="Выезд врача в пределах МКАД"
                />
              </div>

              <div className={styles["services-package__container-checkbox"]}>
                <Checkbox isCircle={true} checkedValue={isMkad30Km} toogleChecked={toogleMkad30Km} title="МКАД +30км" />
              </div>

              <div className={styles["services-package__container-for-checkbox-description"]}>
                <p className={styles["services-package__checkbox-description"]}>+ 1200 ₽</p>
              </div>
            </div>

            <div className={styles["services-package__container-promo-code"]}>
              <div className={styles["services-package__container-promo-code-title"]}>
                <label className={styles["my-input__label"]}>
                  <InputTitle title="Промокод" isDormancy={isDormancyPromoCode} />

                  <input
                    className={errors?.promoCode ? styles["my-input__field_invalid"] : styles["my-input__field"]}
                    type="promoCode"
                    {...register("promoCode", {
                      required: "Это поле обязательно к заполнению",
                      onChange: (event) => {
                        setDormancyPromoCode(false);
                        setPromoCode(event.target.value);
                      },
                      onBlur: () => {
                        if (watch("promoCode")?.length === 0) {
                          setDormancyPromoCode(true);
                        }
                      },

                      minLength: {
                        value: 6,
                        message: "Минимум 6 символов",
                      },
                    })}
                  />
                  {errors?.promoCode && (
                    <span className={styles["my-input__error"]}>{errors?.promoCode?.message || "Error!"} </span>
                  )}
                </label>
              </div>
              <div className={styles["services-package__container-promo-code-button"]}>
                {/* <button disabled={!!errors?.promoCode} className={styles["services-package__promo-code-button"]}> */}
                <button disabled className={styles["services-package__promo-code-button"]}>
                  Применить
                </button>
              </div>
            </div>
          </div>

          <div className={styles["services-available__container"]}>
            <p className={styles["services-available"]}>Услуги будут доступны в течение суток после оплаты.</p>
          </div>

          <div className={styles["container-submit"]}>
            <InputSubmit children={`Оплатить ${amount} ₽`} disabled={!isValid} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageOfServices;
