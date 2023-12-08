/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../../context";
import styles from "./ArrowNavigator.module.scss";

const ArrowNavigator = () => {
  const { selectedPackage, setSelectedPackage, packagePrice, setPackagePrice, isDarkgray, setIsDarkgray } =
    useContext(UserDataContext);
  // console.log(selectedPackage, packagePrice, isDarkgray);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
    setIsDarkgray(false);
  };

  return (
    <div className={styles["arrow-navigator"]}>
      <div onClick={clickHandler} className={styles["container-arrow"]}>
        <img className={styles["arrow"]} src="/icons/triple/Arrow Down/Dark.svg" alt="Arrow" />
      </div>
    </div>
  );
};

export default ArrowNavigator;
