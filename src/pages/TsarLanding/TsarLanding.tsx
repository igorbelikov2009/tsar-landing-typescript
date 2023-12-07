import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TsarLanding.module.scss";
import tsarImage from "../../assets/images/tsarLanding/Header.png";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import СhoosePackage from "../../components/tsarLanding/СhoosePackage/СhoosePackage";
import Pricing from "../../components/tsarLanding/Pricing/Pricing";
import ConsultationsDoctors from "../../components/tsarLanding/ConsultationsDoctors/ConsultationsDoctors";
import Services from "../../components/tsarLanding/services/Services/Services";
import RenaissanceHealth from "../../components/tsarLanding/renaissanceHealth/RenaissanceHealth/RenaissanceHealth";
import HowWorks from "../../components/tsarLanding/howWorks/HowWorks/HowWorks";
import Footer from "../../components/Footer/Footer";
import TsarForm from "../../components/tsarLanding/TsarForm/TsarForm";

const TsarLanding: FC = () => {
  const [cardValue, setCardValue] = useState("Базовый на 1 месяц");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [numberMonths, setNumberMonths] = useState<number>(1);
  const [valueСhoosePackage, setValueСhoosePackage] = useState<string>("на 1 месяц");
  const [packagePrice, setPackagePrice] = useState(0);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/telemed");
  };

  const onChangeCardValue = (value: string) => {
    setCardValue(value);
    console.log(value);
  };
  const onChangePackagePrice = (value: number) => {
    setPackagePrice(value);
    console.log(value);
  };

  const getNumberMonths = (valueСhoosePackage: string, numberMonths: number) => {
    setNumberMonths(numberMonths);
    setValueСhoosePackage(valueСhoosePackage.toLowerCase());
    // console.log(valueСhoosePackage.toLowerCase(), numberMonths);
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
        <СhoosePackage emitNumberMonths={getNumberMonths} />
        <Pricing
          currentValue={cardValue}
          valueСhoosePackage={valueСhoosePackage}
          numberMonths={numberMonths}
          emitValue={onChangeCardValue}
          emitPackagePrice={onChangePackagePrice}
        />
        <ConsultationsDoctors />
        <Services />
        <RenaissanceHealth />
        <HowWorks />
        <TsarForm valueСhoosePackage={valueСhoosePackage} />

        <Footer />
      </div>
    </>
  );
};

export default TsarLanding;
