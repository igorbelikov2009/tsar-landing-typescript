import React, { FC } from "react";
import styles from "./InputSubmit.module.scss";

interface InputSubmitProps {
  children: string;
  disabled?: boolean;
}

const InputSubmit: FC<InputSubmitProps> = ({ children, disabled }) => {
  return (
    <>
      <input className={styles["input-submit"]} type="submit" value={children} disabled={disabled} />
    </>
  );
};

export default InputSubmit;
