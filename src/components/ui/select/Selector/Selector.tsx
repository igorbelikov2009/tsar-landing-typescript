import React, { FC } from "react";
import styles from "./Selector.module.scss";

export interface SelectorProps {
  value: string;
  isVisible: boolean;
  isDarkgray: boolean;
  onClickSelector: () => void;
}

const Selector: FC<SelectorProps> = ({ value, isVisible, isDarkgray, onClickSelector }) => {
  return (
    <div className={styles["selector"]}>
      <div className={styles["container-title"]}>
        <div className={isDarkgray ? styles["container-darkgray"] : styles["container-gray"]} onClick={onClickSelector}>
          <div className={styles["selector-date"]}>
            <p className={isDarkgray ? styles["selector-value-white"] : styles["selector-value-gray"]}>{value}</p>
          </div>

          <div className={styles["icon-container"]}>
            {isDarkgray ? (
              <img
                className={isVisible ? styles["icon-rotate-180"] : styles["icon-rotate-0"]}
                src="/icons/triple/Arrow Down/Light.svg"
                alt="Arrow"
              />
            ) : (
              <img
                className={isVisible ? styles["icon-rotate-180"] : styles["icon-rotate-0"]}
                src="/icons/triple/Arrow Down/Dark.svg"
                alt="Arrow"
              />
            )}
          </div>
        </div>

        {!isDarkgray ? (
          <div className={isVisible ? styles["white-line-height-2"] : styles["white-line-height-1"]}>
            <div className={isVisible ? styles["black-line-width-0"] : styles["black-line-width-50"]}></div>

            <div className={isVisible ? styles["black-line-width-0"] : styles["black-line-width-50"]}></div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Selector;
