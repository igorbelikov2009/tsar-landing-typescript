import React, { FC } from "react";
import { RadioProps } from "../../../../../models/types";
import RadioTripleItem from "../RadioTripleItem/RadioTripleItem";
import styles from "./RadioTriple.module.scss";

const RadioTriple: FC<RadioProps> = ({ optionsItems, currentValue, emitValue }) => {
  const onChangeRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["radio-triple"]}>
      <div className={styles["radio-triple__items-container"]}>
        {optionsItems.map((item) => (
          <RadioTripleItem
            key={item.value}
            value={item.value}
            title={item.title}
            emitValue={onChangeRadio}
            isActive={item.value === currentValue}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioTriple;
