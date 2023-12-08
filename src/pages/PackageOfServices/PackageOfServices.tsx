/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useContext } from "react";
import { UserDataContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import styles from "./PackageOfServices.module.scss";
import Horizontal from "../../components/TopBlock/Horizontal/Horizontal";
import ColoredBlock from "../../components/packageOfServices/ColoredBlock/ColoredBlock";
import ArrowNavigator from "../../components/packageOfServices/ArrowNavigator/ArrowNavigator";
import UserData from "../../components/packageOfServices/UserData/UserData";
import PassportDetails from "../../components/packageOfServices/PassportDetails/PassportDetails";

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
  // console.log(userName, surname, patronymic, phone, selectedPackage, packagePrice);

  return (
    <div className={styles["package-of-services"]}>
      <ColoredBlock />
      <Horizontal isDarkgray={isDarkgray} />
      <div className={styles["package-of-services__container"]}>
        <ArrowNavigator />
        <UserData />
        <PassportDetails />
      </div>
    </div>
  );
};

export default PackageOfServices;
