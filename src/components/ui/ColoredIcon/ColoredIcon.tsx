import React, { FC } from "react";
import styles from "./ColoredIcon.module.scss";

interface ColoredIconProps {
  icon: string;
  isBig?: boolean;
  isDecreased?: boolean;
}

const ColoredIcon: FC<ColoredIconProps> = ({ icon, isBig, isDecreased }) => {
  if (isBig) {
    return <img src={`/icons/${icon}.svg`} alt="icon" className={styles["colored-icon__big"]} />;
  }

  if (isDecreased) {
    return <img src={`/icons/${icon}.svg`} alt="icon" className={styles["colored-icon__decreased"]} />;
  }

  return <img src={`/icons/${icon}.svg`} alt="icon" className={styles["colored-icon"]} />;
};

export default ColoredIcon;
