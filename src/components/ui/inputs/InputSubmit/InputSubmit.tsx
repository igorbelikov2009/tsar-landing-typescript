import React, { FC } from "react";
import styles from "./InputSubmit.module.scss";

interface InputSubmitProps {
  children: string;
  disabled?: boolean;
  emitCLick?: () => void;
}

const InputSubmit: FC<InputSubmitProps> = ({ children, disabled, emitCLick }) => {
  return (
    <>
      <input
        className={styles["input-submit"]}
        type="submit"
        value={children}
        disabled={disabled}
        onClick={emitCLick}
      />
    </>
  );
};

export default InputSubmit;
