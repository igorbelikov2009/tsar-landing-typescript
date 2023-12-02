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
    { title: "На 1 месяц", value: "0" },
    { title: "На 3 месяца", value: "1" },
    { title: "На 12 месяцев", value: "2" },
  ];

  return (
    <div className={styles["choose-package"]}>
      <RadioTriple currentValue={currentValue} optionsItems={optionsItems} emitValue={onChangeRadio} />
    </div>
  );
};

export default СhoosePackage;
