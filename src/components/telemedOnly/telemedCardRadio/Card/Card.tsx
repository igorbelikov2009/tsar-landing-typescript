import React, { FC, useState } from "react";
import BackgroundItem from "../../../ui/BackgroundItem/BackgroundItem";
import CardRadio from "../CardRadio/CardRadio";
import styles from "./Card.module.scss";

interface ITelemedCardProps {
  isActive: boolean;

  value: string;
  background: string;
  priceTerm: string;
  priceMmonth: string;
  price: string;
  description: string;
  textButton: string;

  emitValue: (value: string) => void;
}

const Card: FC<ITelemedCardProps> = ({
  isActive,
  value,
  priceTerm,
  priceMmonth,
  price,
  description,
  background,
  textButton,
  emitValue,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
  const handlerRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <label
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={isActive ? styles["card_actived"] : styles["card"]}
      style={{
        border: isHovered ? "#155ba1 1px solid" : "#28323c 1px solid",
      }}
    >
      <CardRadio value={value} emitValue={handlerRadio} />

      <div className={styles["container-content"]}>
        <div className={styles["container-prices"]}>
          <h1 className={styles["price-term"]}> {priceTerm} </h1>
          <p className={styles["price-month"]}> {priceMmonth} </p>
          <p className={styles["price"]}> {price} </p>
        </div>

        <div className={styles["container-description"]}>
          <p className={styles["description"]}> {description} </p>
        </div>
      </div>

      <div className={styles["container-button"]}>
        <button className={styles["button"]}>{textButton}</button>
      </div>
      <div className={styles["container-image"]}>
        <BackgroundItem background={background} alt={background} />
      </div>
    </label>
  );
};

export default Card;
