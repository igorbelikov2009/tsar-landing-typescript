import React, { FC } from "react";
import styles from "./BackgroundItem.module.scss";

interface BackgroundItemProps {
  background: string;
  alt: string;
}

const BackgroundItem: FC<BackgroundItemProps> = ({ background, alt }) => {
  return <img src={`/images/clouds/${background}.svg`} alt={alt} className={styles["background-item"]} />;
};

export default BackgroundItem;
