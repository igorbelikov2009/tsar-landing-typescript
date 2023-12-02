import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TsarLanding.module.scss";
import tsarImage from "../../assets/images/tsarLanding/Header.png";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import СhoosePackage from "../../components/tsarLanding/СhoosePackage/СhoosePackage";
import Pricing from "../../components/tsarLanding/Pricing/Pricing";

const TsarLanding: FC = () => {
  const [cardValue, setCardValue] = useState(0);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/telemed");
  };

  const onChangeCardValue = (value: string) => {
    setCardValue(Number(value));
    console.log(Number(value));
  };

  return (
    <>
      <div className={styles["tsar-landing"]}>
        <TopMenu
          image={tsarImage}
          heading="Персональная медицинская помощь у вас дома"
          subheading="Получайте квалифицированную медицинскую помощь не выходя из дома"
          textButton="Выбрать пакет"
          emitClick={clickHandler}
        ></TopMenu>

        <Horizontal />
        <СhoosePackage />
        <Pricing currentValue={cardValue} emitValue={onChangeCardValue} />
      </div>
    </>
  );
};

export default TsarLanding;
