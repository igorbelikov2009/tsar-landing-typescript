import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TsarLanding.module.scss";
import tsarImage from "../../assets/images/tsarLanding/Header.png";

const TsarLanding: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/telemed");
  };

  return (
    <>
      <div className={styles["tsar-landing"]}>
        <TopMenu image={tsarImage}></TopMenu>
        <div className={styles["horizontal"]}></div>
      </div>

      <button onClick={clickHandler} style={{ marginTop: 16 }}>
        Показать список врачей
      </button>
    </>
  );
};

export default TsarLanding;
