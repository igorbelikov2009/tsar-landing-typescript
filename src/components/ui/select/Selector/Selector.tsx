import React, { FC } from "react";
import styles from "./Selector.module.scss";

export interface SelectorProps {
  value: string;

  // onClickSelector: () => void;
}

const Selector: FC<SelectorProps> = ({ value }) => {
  return (
    <div className={styles["selector"]}>
      <div className={styles["container-title"]}>
        <div className={styles["border-gray"]}>
          <div className={styles["container-gray"]}>
            <div className={styles["selector-data"]}>
              <p className={styles["selector-value"]}>{value}</p>
            </div>

            <div className={styles["icon-container"]}>
              <img className={styles["icon-rotate-180"]} src="/icons/triple/Arrow Down/Dark.svg" alt="Arrow" />
            </div>
          </div>

          <div className={styles["white-line-height-2"]}>
            <div className={styles["black-line-width-0"]}></div>

            <div className={styles["black-line-width-0"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
