import React, { FC } from "react";
import styles from "./ButtonSecondary.module.scss";

interface ButtonSecondaryProps {
  textButton: string;
  emitClick: () => void;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = ({ textButton, emitClick }) => {
  return (
    <button className={styles["button"]} onClick={emitClick}>
      {textButton}
    </button>
  );
};

export default ButtonSecondary;
