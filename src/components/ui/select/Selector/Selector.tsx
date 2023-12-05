import React, { FC } from "react";
import styles from "./Selector.module.scss";

export interface SelectorProps {
  value: string;
  isVisible: boolean;
  onClickSelector: () => void;
}

const Selector: FC<SelectorProps> = ({ value, isVisible, onClickSelector }) => {
  return (
    <div className={styles["selector"]}>
      <div className={styles["container-title"]}>
        <div className={isVisible ? styles["container-gray"] : styles["container-white"]} onClick={onClickSelector}>
          <div className={styles["selector-date"]}>
            <p className={styles["selector-value"]}>{value}</p>
          </div>

          <div className={styles["icon-container"]}>
            <img
              className={isVisible ? styles["icon-rotate-180"] : styles["icon-rotate-0"]}
              src="/icons/triple/Arrow Down/Dark.svg"
              alt="Arrow"
            />
          </div>
        </div>

        <div className={isVisible ? styles["white-line-height-2"] : styles["white-line-height-1"]}>
          <div className={isVisible ? styles["black-line-width-0"] : styles["black-line-width-50"]}></div>

          <div className={isVisible ? styles["black-line-width-0"] : styles["black-line-width-50"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
