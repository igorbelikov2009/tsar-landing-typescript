import React, { FC } from "react";
import styles from "./ColoredBlock.module.scss";

interface ColoredBlockProps {
  image: string;
}

const ColoredBlock: FC<ColoredBlockProps> = ({ image }) => {
  return <div className={styles["colored-block"]}></div>;
};

export default ColoredBlock;
