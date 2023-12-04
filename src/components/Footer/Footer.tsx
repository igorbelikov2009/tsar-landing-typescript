import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["container-footer"]}>
        <div className={styles["container-titles"]}>
          <p className={styles["title"]}>Медицинские услуги оказываются партнерами:</p>

          <p className={styles["title"]}>
            ООО «Медкорп», Лицензия № ЛО-50-01-009076 от 10 Октября 2017 года.
            <span className={styles["title__span"]}>Адрес: 115114, г. Москва, Дербеневская наб. д. 7, стр. 22</span>
          </p>

          <p className={styles["title"]}>
            ООО «Доктор Рядом», Лицензия № ЛО-77-01-013560 от 29 Ноября 2016 года.
            <span className={styles["title__span"]}>
              Адрес: 107076, г. Москва, ул. Краснобогатырская, д. 44, стр. 1
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
