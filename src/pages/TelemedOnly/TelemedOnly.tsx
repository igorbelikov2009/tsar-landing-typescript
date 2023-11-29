import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TelemedOnly.module.scss";
import telemedImage from "../../assets/images/telemed/Header.jpg";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";

const TelemedOnly: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
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

        <Horizontal />
      </div>

      <button onClick={clickHandler} style={{ marginTop: 16 }}>
        Оформить полис
      </button>
    </>
  );
};

export default TelemedOnly;
