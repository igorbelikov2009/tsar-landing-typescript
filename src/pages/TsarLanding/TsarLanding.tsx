import React, { FC, useState, useContext } from "react";
import { UserDataContext } from "../../context/index";
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
  // const { selectedPackage, setSelectedPackage, packagePrice, setPackagePrice, isDarkgray, setIsDarkgray } =
  //   useContext(UserDataContext);
  const {
    userName,
    surname,
    patronymic,
    phone,
    selectedPackage,
    setSelectedPackage,
    packagePrice,
    setPackagePrice,
    isDarkgray,
    setIsDarkgray,
  } = useContext(UserDataContext);

  console.log(userName, surname, patronymic, phone, selectedPackage, packagePrice);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [numberMonths, setNumberMonths] = useState<number>(1);
  const [choosePackage, setСhoosePackage] = useState("на 1 месяц");

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/telemed");
    setIsDarkgray(true);
  };

  const onChangeSelectedPackage = (value: string) => {
    setSelectedPackage(value);
    // console.log(value);
  };
  const onChangePackagePrice = (value: number) => {
    setPackagePrice(value);
    // console.log(value);
  };

  const getNumberMonths = (valueСhoosePackage: string, numberMonths: number) => {
    setNumberMonths(numberMonths);
    setСhoosePackage(valueСhoosePackage.toLowerCase());
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

        <Horizontal isDarkgray={isDarkgray} />
        <СhoosePackage emitNumberMonths={getNumberMonths} />
        <Pricing
          currentValue={selectedPackage}
          valueСhoosePackage={choosePackage}
          numberMonths={numberMonths}
          emitValue={onChangeSelectedPackage}
          emitPackagePrice={onChangePackagePrice}
        />
        <ConsultationsDoctors />
        <Services />
        <RenaissanceHealth />
        <HowWorks />
        <TsarForm valueСhoosePackage={choosePackage} />

        <Footer />
      </div>
    </>
  );
};

export default TsarLanding;
