import React, { FC } from "react";
import styles from "./Pricing.module.scss";

const Pricing: FC = () => {
  return (
    <div className={styles["pricing"]}>
      <div className={styles["pricing-container"]}>
        <div className={styles["headings-container"]}>
          <p className={styles["heading"]}>Консультации с врачами онлайн без ограничений. </p>
          <span className={styles["heading"]}> Доставка лекарств </span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
