import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TopMenu from "../../components/TopBlock/TopMenu/TopMenu";
import styles from "./TelemedOnly.module.scss";
import telemedImage from "../../assets/images/telemed/Header.jpg";

const TelemedOnly: FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles["telemed-only"]}>
        <TopMenu image={telemedImage}></TopMenu>
        <div className={styles["horizontal"]}></div>
      </div>

      <button onClick={clickHandler} style={{ marginTop: 16 }}>
        Оформить полис
      </button>
    </>
  );
};

export default TelemedOnly;
