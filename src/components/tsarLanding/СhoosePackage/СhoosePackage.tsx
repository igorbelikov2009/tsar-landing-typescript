import React, { useState } from "react";
import RadioTriple from "../../ui/radio/tripleRadio/RadioTriple/RadioTriple";
import styles from "./СhoosePackage.module.scss";
import { RadioItemProps } from "../../../models/types";

const СhoosePackage = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const onChangeRadio = (value: string) => {
    setCurrentValue(value);
  };

  const optionsItems: RadioItemProps[] = [
    { title: "Базовый на 1 месяц", value: "Базовый на 1 месяц" },
    { title: "Расширенный на 1 месяц", value: "Расширенный на 1 месяц" },
    { title: "Полный на 1 месяц", value: "Полный на 1 месяц" },
  ];

  return (
    <div className={styles["choose-package"]}>
      <RadioTriple currentValue={currentValue} optionsItems={optionsItems} emitValue={onChangeRadio} />
    </div>
  );
};

export default СhoosePackage;
