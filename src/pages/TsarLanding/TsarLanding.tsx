import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TsarLanding.module.scss";
import tsarImage from "../../assets/images/tsarLanding/Header.png";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";

const TsarLanding: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/telemed");
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
      </div>
    </>
  );
};

export default TsarLanding;
