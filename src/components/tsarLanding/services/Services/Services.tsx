import React, { FC } from "react";
import styles from "./Services.module.scss";
import patient from "../../../../assets/images/tsarLanding/patient.jpg";
import child from "../../../../assets/images/tsarLanding/child.jpg";
import inspection from "../../../../assets/images/tsarLanding/inspection.jpg";

const Services: FC = () => {
  return (
    <div className={styles["services"]}>
      <div className={styles["container-services"]}>
        <div className={styles["card"]}>
          <div className={styles["container-images"]}>
            <img className={styles["image"]} src={patient} alt="patient" />

            <div className={styles["container-titles"]}>
              <p className={styles["title"]}>Доставка лекарств</p>
            </div>
          </div>

          <p className={styles["description"]}>
            Специальные условия на онлайн-заказ и доставку лекарств в
            <span className={styles["description_span"]}>eapteka.ru</span>
            для клиентов «Ренессанс здоровье». Берегите время и здоровье, избегая лишних походов в аптеку.
          </p>
        </div>

        <div className={styles["card"]}>
          <div className={styles["container-images"]}>
            <img className={styles["image"]} src={child} alt="child" />
            <div className={styles["container-titles"]}>
              <p className={styles["title"]}>Вызовы врачей на дом</p>
            </div>
          </div>

          <p className={styles["description"]}>
            Если онлайн консультации недостаточно, вы сможете вызвать терапевта на дом. Провести дополнительный осмотр
            или уточнить диагноз. Для базового тарифа вызов врача доступен при оплате за вызов.
          </p>
        </div>

        <div className={styles["card"]}>
          <div className={styles["container-images"]}>
            <img className={styles["image"]} src={inspection} alt="inspection" />
            <div className={styles["container-titles"]}>
              <p className={styles["title"]}>АнтиВирус</p>
            </div>
          </div>

          <p className={styles["description"]}>
            Страховка на случай инфекционного заболевания, включая COVID-19. Выплаты по больничному листу в результате
            болезни или смерти застрахованного.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
