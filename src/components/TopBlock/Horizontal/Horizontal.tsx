import React, { FC, useState } from "react";
import styles from "./Horizontal.module.scss";
import logotypeWhite from "../../../assets/logotypes/logotypeWhite.svg";
import logotypeVector from "../../../assets/logotypes/logotypeVector.svg";
// import Form from "react-bootstrap/Form";
import SelectorAndOptionBlock from "../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import { IOptionItem } from "../../../models/types";

const Horizontal: FC = () => {
  const [currentValue, setCurrentValue] = useState("Москва");
  const [, setId] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkgray] = useState(true);

  const optionsItems: IOptionItem[] = [
    { id: "0", value: "Москва", date: "Москва" },
    { id: "1", value: "Санкт-Петербург", date: "Санкт-Петербург" },
    { id: "2", value: "Екатеринбург", date: "Екатеринбург" },
    { id: "3", value: "Другие регионы", date: "Другие регионы" },
  ];

  const onClickSelector = () => {
    setIsVisible((prev) => !prev);
  };
  const onChangeRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setId(id);
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
            {/* <Form>
              <Form.Select value={value} onChange={handleSelect} aria-label="Default select example">
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Екатеренбург">Екатеренбург</option>
                <option value="Другие регионы">Другие регионы</option>
              </Form.Select>
            </Form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Horizontal;
