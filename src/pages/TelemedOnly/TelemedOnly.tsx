import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TelemedOnly.module.scss";
import telemedImage from "../../assets/images/telemed/Header.jpg";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import Pricing from "../../components/telemedOnly/Pricing/Pricing";

const TelemedOnly: FC = () => {
  const [cardValue, setCardValue] = useState(0);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  const onChangeCardValue = (value: string) => {
    setCardValue(Number(value));
    console.log(Number(value));
  };

  return (
    <>
      <div className={styles["telemed-only"]}>
        <TopMenu
          image={telemedImage}
          heading="Консультации с врачами онлайн"
          subheading="Получите квалифицированную помощь без посещения поликлиники. Срочные вопросы, расшифровка анализов и обследований круглосуточно из дома."
          textButton="Выбрать полис"
          emitClick={clickHandler}
        ></TopMenu>

        <Horizontal />
        <Pricing currentValue={cardValue} emitValue={onChangeCardValue} />
      </div>
    </>
  );
};

export default TelemedOnly;
