import React, { FC, useState, useContext } from "react";
import { UserDataContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TelemedOnly.module.scss";
import telemedImage from "../../assets/images/telemed/Header.jpg";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import Pricing from "../../components/telemedOnly/Pricing/Pricing";
import Footer from "../../components/Footer/Footer";
import Сonsultations from "../../components/telemedOnly/consultations/Сonsultations/Сonsultations";
import HowWorks from "../../components/telemedOnly/howWorks/HowWorks/HowWorks";
import Explanations from "../../components/telemedOnly/howWorks/Explanations/Explanations";
import TelemedForm from "../../components/telemedOnly/TelemedForm/TelemedForm";

const TelemedOnly: FC = () => {
  const { isDarkgray, setIsDarkgray } = useContext(UserDataContext);

  const [cardValue, setCardValue] = useState(0);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
    setIsDarkgray(false);
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

        <Horizontal isDarkgray={isDarkgray} />
        <Pricing currentValue={cardValue} emitValue={onChangeCardValue} />
        <Сonsultations />
        <HowWorks />
        <Explanations />
        <TelemedForm />
        <Footer />
      </div>
    </>
  );
};

export default TelemedOnly;
