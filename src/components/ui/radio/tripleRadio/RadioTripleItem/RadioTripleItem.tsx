import React, { FC } from "react";
import { RadioLabelProps } from "../../../../../models/types";
import styles from "./RadioTripleItem.module.scss";

const RadioTripleItem: FC<RadioLabelProps> = ({ value, index, emitValue, isActive }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value, index);
    // console.log(event.target.value, index);
  };

  return (
    <label className={isActive ? styles["item_acive"] : styles["item"]}>
      <input className={styles["field"]} type="radio" name="content" value={value} onChange={radioHandler} />
      <p className={isActive ? styles["title-active"] : styles["title"]}>{value}</p>
    </label>
  );
};

export default RadioTripleItem;
