import React, { FC, useState } from "react";
import styles from "./Horizontal.module.scss";
import logotypeWhite from "../../../assets/logotypes/logotypeWhite.svg";
import logotypeVector from "../../../assets/logotypes/logotypeVector.svg";
// import Form from "react-bootstrap/Form";
import SelectorAndOptionBlock from "../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import { IOption } from "../../../models/types";

const Horizontal: FC = () => {
  const [currentValue, setCurrentValue] = useState("Москва");
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkgray] = useState(true);

  const optionsItems: IOption[] = [
    { value: "Москва", label: "Москва" },
    { value: "Санкт-Петербург", label: "Санкт-Петербург" },
    { value: "Екатеринбург", label: "Екатеринбург" },
    { value: "Другие регионы", label: "Другие регионы" },
  ];

  const onClickSelector = () => {
    setIsVisible((prev) => !prev);
  };
  const onChangeRadio = (value: string) => {
    setCurrentValue(value);
  };
  const onClickRadio = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className={styles["horizontal"]}></div>

      <div className={styles["horizontal-content"]}>
        <div className={styles["container"]}>
          <div className={styles["container-logo"]}>
            <img className={styles["logotypeWhite"]} src={logotypeWhite} alt="logotype" />
            <img className={styles["logotypeVector"]} src={logotypeVector} alt="logotype" />
          </div>

          <div className={styles["container-select"]}>
            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={optionsItems}
              isVisible={isVisible}
              isDarkgray={isDarkgray}
              onClickSelector={onClickSelector}
              emitOnChangeRadio={onChangeRadio}
              emitOnClickRadio={onClickRadio}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Horizontal;
