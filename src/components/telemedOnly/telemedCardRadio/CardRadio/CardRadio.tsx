import React, { FC } from "react";
import styles from "./CardRadio.module.scss";

interface CardRadioProps {
  value: string;
  emitValue: (event: string) => void;
}

const CardRadio: FC<CardRadioProps> = ({ value, emitValue }) => {
  const onChangeCardRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <>
      <input type="radio" name="card" value={value} onChange={onChangeCardRadio} className={styles["card-radio"]} />
    </>
  );
};

export default CardRadio;
