import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TelemedOnly.module.scss";
import telemedImage from "../../assets/images/telemed/Header.jpg";
import logotypeWhite from "../../assets/logotypes/logotypeWhite.svg";
import logotypeVector from "../../assets/logotypes/logotypeVector.svg";

const TelemedOnly: FC = () => {
  const [value, setValue] = useState<string>("Москва");
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles["telemed-only"]}>
        <TopMenu
          image={telemedImage}
          heading="Консультации с врачами онлайн"
          subheading="Получите квалифицированную помощь без посещения поликлиники. Срочные вопросы, расшифровка анализов и обследований круглосуточно из дома."
          textButton="Выбрать полис"
        ></TopMenu>
        <div className={styles["horizontal"]}></div>

        <div className={styles["horizontal-content"]}>
          <div className={styles["container"]}>
            <div className={styles["container-logo"]}>
              <img className={styles["logotypeWhite"]} src={logotypeWhite} alt="logotype" />
              <img className={styles["logotypeVector"]} src={logotypeVector} alt="logotype" />
            </div>

            <div className={styles["container-select"]}>fghdsfghdfghdfghdfghdfg</div>
          </div>
        </div>
      </div>

      <button onClick={clickHandler} style={{ marginTop: 16 }}>
        Оформить полис
      </button>
    </>
  );
};

export default TelemedOnly;
