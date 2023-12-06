import React, { useState } from "react";
import RadioTriple from "../../ui/radio/tripleRadio/RadioTriple/RadioTriple";
import styles from "./СhoosePackage.module.scss";
import { RadioItemProps } from "../../../models/types";

const СhoosePackage = () => {
  const [currentValue, setCurrentValue] = useState<string>("На 1 месяц");
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const onChangeRadio = (value: string, index: number) => {
    setCurrentValue(value);
    setCurrentIndex(index);
    console.log(value, index);
  };

  const optionsItems: RadioItemProps[] = [
    { index: 1, value: "На 1 месяц" },
    { index: 3, value: "На 3 месяца" },
    { index: 12, value: "На 12 месяцев" },
  ];

  return (
    <div className={styles["choose-package"]}>
      <RadioTriple
        currentValue={currentValue}
        index={currentIndex}
        optionsItems={optionsItems}
        emitValue={onChangeRadio}
      />
    </div>
  );
};

export default СhoosePackage;
