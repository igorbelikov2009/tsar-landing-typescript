import React, { FC, useState } from "react";
import styles from "./Horizontal.module.scss";
import logotypeWhite from "../../../assets/logotypes/logotypeWhite.svg";
import logotypeVector from "../../../assets/logotypes/logotypeVector.svg";
import Form from "react-bootstrap/Form";

const Horizontal: FC = () => {
  const [value, setValue] = useState<string>("Москва");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
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
            <Form>
              <Form.Select value={value} onChange={handleSelect} aria-label="Default select example">
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Екатеренбург">Екатеренбург</option>
                <option value="Другие регионы">Другие регионы</option>
              </Form.Select>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Horizontal;
