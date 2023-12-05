import React, { FC } from "react";
import styles from "./OptionItem.module.scss";

export interface OptionItemProps {
  isActive: boolean;
  date: string;
  value: string;
  id: string;
  emitValue: (event: string, id: string) => void;
}

const OptionItem: FC<OptionItemProps> = ({ isActive, date, value, id, emitValue }) => {
  const selectorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["option-active"] : styles["option"]}>
      {date}
      <input className={styles["input"]} type="radio" value={value} id={id} name="date" onChange={selectorHandler} />
    </label>
  );
};

export default OptionItem;
