import React, { FC } from "react";
import styles from "./TsarCardRadio.module.scss";

interface TsarCardRadioProps {
  value: string;
  emitValue: (event: string) => void;
}

const TsarCardRadio: FC<TsarCardRadioProps> = ({ value, emitValue }) => {
  const onChangeCardRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <>
      <input type="radio" name="card" value={value} onChange={onChangeCardRadio} className={styles["card-radio"]} />
    </>
  );
};

export default TsarCardRadio;
