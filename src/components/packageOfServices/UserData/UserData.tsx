import React, { useContext } from "react";
import { UserDataContext } from "../../../context/index";
import styles from "./UserData.module.scss";

const UserData = () => {
  const { userName, surname, patronymic, phone, selectedPackage, packagePrice } = useContext(UserDataContext);

  console.log(userName, surname, patronymic, phone, selectedPackage, packagePrice);

  return (
    <div className={styles["user-data"]}>
      <div className={styles["user-data__container-name"]}>
        <p className={styles["user-data__name"]}> {surname} </p>
        <p className={styles["user-data__name"]}> {userName} </p>
        <p className={styles["user-data__name"]}> {patronymic} </p>
      </div>
      <p className={styles["user-data__phone"]}> {phone} </p>
      <div className={styles["user-data__container-selected-package"]}>
        <p className={styles["user-data__selected-package"]}> {selectedPackage} </p>
        <p className={styles["user-data__amount-to-paid"]}> - {packagePrice} р </p>
      </div>
    </div>
  );
};

export default UserData;
