import React, { FC } from "react";
import styles from "./ConsultationsDoctors.module.scss";
import doctor from "../../../assets/images/tsarLanding/doctor.jpg";
import phone from "../../../assets/images/tsarLanding/phone.jpg";
import ButtonSecondary from "../../ui/buttons/ButtonSecondary/ButtonSecondary";

const ConsultationsDoctors: FC = () => {
  const ckickHandler = () => {
    console.log("список врачей");
  };

  return (
    <div className={styles["consultations-doctors"]}>
      <div className={styles["main-container"]}>
        <h1 className={styles["heading"]}> Консультации с врачами онлайн </h1>
        <div className={styles["content"]}>
          <div className={styles["container-descriptions"]}>
            <p className={styles["descriptions"]}>
              Не ходите лишний раз в поликлинику. Онлайн-консультации с квалифицированными врачами — безопасный способ
              решить медицинские вопросы.
            </p>
            <p className={styles["descriptions"]}>
              Обратитесь к терапевту, кардиологу, неврологу, лору и многим другим специалистам в личном кабинете
              Ренессанс здоровье. В приложении или на сайте.
            </p>
            <p className={styles["descriptions"]}>
              Ответим на вопросы о симптомах, расшифруем результаты анализов, проконсультируем по назначенным при
              лечении препаратами, предоставим «второе мнение», если сомневаетесь в диагнозе.
            </p>
          </div>

          <div className={styles["container-images"]}>
            <img className={styles["images-item"]} src={doctor} alt="doctor" />
            <img className={styles["images-item"]} src={phone} alt="phone" />
          </div>
        </div>

        <div className={styles["container-button"]}>
          <ButtonSecondary textButton="Показать список врачей" emitClick={ckickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ConsultationsDoctors;
