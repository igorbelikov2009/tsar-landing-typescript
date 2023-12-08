/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useContext } from "react";
import { UserDataContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import styles from "./PackageOfServices.module.scss";
import tsarImage from "../../assets/images/tsarLanding/Header.png";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import ColoredBlock from "../../components/packageOfServices/ColoredBlock/ColoredBlock";

const PackageOfServices: FC = () => {
  const {
    userName,
    setUserName,
    surname,
    setSurname,
    patronymic,
    setPatronymic,
    phone,
    setPhone,
    selectedPackage,
    setSelectedPackage,
    packagePrice,
    setPackagePrice,
    isDarkgray,
    setIsDarkgray,
  } = useContext(UserDataContext);
  console.log(userName, surname, patronymic, phone, selectedPackage, packagePrice);

  return (
    <div className={styles["package-of-services"]}>
      <ColoredBlock image={tsarImage} />
      <Horizontal isDarkgray={isDarkgray} />
    </div>
  );
};

export default PackageOfServices;
