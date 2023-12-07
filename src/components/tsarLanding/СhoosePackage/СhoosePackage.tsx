import React, { FC, useState } from "react";
import RadioTriple from "../../ui/radio/tripleRadio/RadioTriple/RadioTriple";
import styles from "./СhoosePackage.module.scss";
import { RadioItemProps } from "../../../models/types";

interface СhoosePackageProps {
  emitNumberMonths: (value: string, numberMonths: number) => void;
}

const СhoosePackage: FC<СhoosePackageProps> = ({ emitNumberMonths }) => {
  const [currentValue, setCurrentValue] = useState<string>("На 1 месяц");
  const [currentNumberMonths, setcurrentNumberMonths] = useState<number>(1);

  const onChangeRadio = (value: string, numberMonths: number) => {
    setCurrentValue(value);
    setcurrentNumberMonths(numberMonths);
    // console.log("value:" + value, "numberMonths: " + numberMonths);
    emitNumberMonths(value, numberMonths);
  };

  const optionsItems: RadioItemProps[] = [
    { numberMonths: 1, value: "На 1 месяц" },
    { numberMonths: 3, value: "На 3 месяца" },
    { numberMonths: 12, value: "На 12 месяцев" },
  ];

  return (
    <div className={styles["choose-package"]}>
      <RadioTriple
        currentValue={currentValue}
        numberMonths={currentNumberMonths}
        optionsItems={optionsItems}
        emitValue={onChangeRadio}
      />
    </div>
  );
};

export default СhoosePackage;
