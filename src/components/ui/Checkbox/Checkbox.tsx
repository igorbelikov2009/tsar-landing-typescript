import React, { FC } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  isCircle?: boolean;
  checkedValue: boolean;
  toogleChecked: () => void;
  title?: string;
  span?: string;
  secondTitle?: string;
  secondSpan?: string;
  subtitle?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  isCircle,
  checkedValue,
  toogleChecked,
  title,
  span,
  secondTitle,
  secondSpan,
  subtitle,
}) => {
  const checkboxHandler = () => {
    toogleChecked();
  };

  return (
    <label role="checkbox" aria-checked={true} aria-labelledby="foo" className={styles["checkbox"]}>
      <span className={isCircle ? styles["checkbox__checker_circle"] : styles["checkbox__checker"]} />
      {isCircle ? (
        <div
          className={
            checkedValue ? styles["checkbox__switch_visible-circle"] : styles["checkbox__switch_invisible-circle"]
          }
        />
      ) : (
        <div className={checkedValue ? styles["checkbox__switch_visible"] : styles["checkbox__switch_invisible"]} />
      )}

      <input type="checkbox" checked={checkedValue} onChange={checkboxHandler} className={styles["checkbox__input"]} />

      <div className={styles["checkbox__agree"]}>
        <p className={styles["checkbox__agree-title"]}>
          {title}
          <span className={styles["checkbox__agree-span"]}>{span} </span>
        </p>

        <p className={styles["checkbox__agree-second-title"]}>
          {secondTitle}
          <span className={styles["checkbox__agree-span"]}> {secondSpan} </span>
          <span className={styles["checkbox__agree-title"]}> {subtitle} </span>
        </p>
      </div>
    </label>
  );
};

export default Checkbox;
