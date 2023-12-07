import React, { FC } from "react";
import { RadioProps } from "../../../../../models/types";
import RadioTripleItem from "../RadioTripleItem/RadioTripleItem";
import styles from "./RadioTriple.module.scss";

const RadioTriple: FC<RadioProps> = ({ optionsItems, currentValue, emitValue, numberMonths }) => {
  const onChangeRadio = (value: string, numberMonths: number) => {
    emitValue(value, numberMonths);
  };

  return (
    <div className={styles["radio-triple"]}>
      <div className={styles["radio-triple__items-container"]}>
        {optionsItems.map((item) => (
          <RadioTripleItem
            key={item.value}
            value={item.value}
            numberMonths={item.numberMonths}
            emitValue={onChangeRadio}
            isActive={item.value === currentValue}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioTriple;
