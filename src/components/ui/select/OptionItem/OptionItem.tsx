import React, { FC } from "react";
import styles from "./OptionItem.module.scss";

export interface OptionItemProps {
  isActive: boolean;
  label: string;
  value: string;
  emitValue: (event: string) => void;
}

const OptionItem: FC<OptionItemProps> = ({ isActive, label, value, emitValue }) => {
  const selectorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["option-active"] : styles["option"]}>
      {label}
      <input className={styles["input"]} type="radio" value={value} name="label" onChange={selectorHandler} />
    </label>
  );
};

export default OptionItem;
