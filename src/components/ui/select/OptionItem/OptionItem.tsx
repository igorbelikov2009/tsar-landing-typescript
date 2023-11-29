import React, { FC } from "react";
import styles from "./OptionItem.module.scss";

export interface OptionItemProps {
  isActive: boolean;
  data: string | undefined;
  value: string;
  id: string;
  emitValue: (event: string, id: string) => void;
}

const OptionItem: FC<OptionItemProps> = ({ isActive, data, value, id, emitValue }) => {
  const selectorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["option-active"] : styles["option"]}>
      {data}
      <input className={styles["input"]} type="radio" value={value} id={id} name="data" onChange={selectorHandler} />
    </label>
  );
};

export default OptionItem;
