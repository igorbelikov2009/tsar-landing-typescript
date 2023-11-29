import React, { FC } from "react";
import styles from "./ButtonPrimary.module.scss";

interface ButtonPrimaryProps {
  textButton: string;
  //   path: string;
  emitClick: () => void;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ textButton, emitClick }) => {
  return (
    <button className={styles["button"]} onClick={emitClick}>
      {textButton}
    </button>
  );
};

export default ButtonPrimary;
