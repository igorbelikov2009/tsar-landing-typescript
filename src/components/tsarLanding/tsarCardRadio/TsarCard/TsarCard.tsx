import React, { FC, useState } from "react";
import TsarCardRadio from "../TsarCardRadio/TsarCardRadio";
import styles from "./TsarCard.module.scss";
import iconHelper from "../../../../assets/icons/iconHelper.png";

interface TsarCardProps {
  isActive: boolean;
  value: string;
  namePackage: string;
  description: string | null;
  price: number;
  currency: string;
  title1: string;
  title2: string;
  title3: string | null;
  title4: string | null;
  textButton: string;

  numberMonths: number;
  emitValue: (value: string) => void;
}

const TsarCard: FC<TsarCardProps> = ({
  isActive,
  value,
  namePackage,
  description,
  price,
  currency,
  title1,
  title2,
  title3,
  title4,
  textButton,
  numberMonths,
  emitValue,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
  const packagePrice = price * numberMonths;

  const handlerRadio = (value: string) => {
    emitValue(value);
    // console.log(value);
  };

  return (
    <label
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={isActive ? styles["card_actived"] : styles["card"]}
      style={{ border: isHovered ? "#155ba1 1px solid" : "#28323c 1px solid" }}
    >
      <TsarCardRadio value={value} emitValue={handlerRadio} />

      <div className={styles["container-content"]}>
        <div className={styles["container-descriptions"]}>
          <p className={styles["name-package"]}> {namePackage} </p>

          {description ? <p className={styles["description"]}> {description} </p> : <p></p>}
        </div>

        <div className={styles["container-price"]}>
          <h1 className={styles["price"]}> {packagePrice} </h1>
          <h1 className={styles["currency"]}> {currency} </h1>
        </div>

        <div className={styles["container-titles"]}>
          <img className={styles["icon-helper"]} src={iconHelper} alt="iconHelper" />
          <p className={styles["title"]}> {title1} </p>
        </div>

        <div className={styles["container-titles"]}>
          <img className={styles["icon-helper"]} src={iconHelper} alt="iconHelper" />
          <p className={styles["title"]}> {title2} </p>
        </div>

        {title3 ? (
          <div className={styles["container-titles"]}>
            <img className={styles["icon-helper"]} src={iconHelper} alt="iconHelper" />
            <p className={styles["title"]}> {title3} </p>
          </div>
        ) : (
          <div></div>
        )}

        {title4 ? (
          <div className={styles["container-titles"]}>
            <img className={styles["icon-helper"]} src={iconHelper} alt="iconHelper" />
            <p className={styles["title"]}> {title4} </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className={styles["container-button"]}>
        <button className={styles["button"]}>{textButton}</button>
      </div>
    </label>
  );
};

export default TsarCard;
