import React, { FC } from "react";
import ColoredIcon from "../../../ui/ColoredIcon/ColoredIcon";
import styles from "./Card.module.scss";

export interface CardProps {
  icon: string;
  isBig: boolean;
  isDecreased: boolean;
  heading: string;
  title: string;
}

const Card: FC<CardProps> = ({ icon, isBig, isDecreased, heading, title }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["container-content"]}>
        <div className={styles["container-icon"]}>
          <ColoredIcon icon={icon} isBig={isBig} isDecreased={isDecreased} />
        </div>

        <div className={styles["container-heading"]}>
          <p className={styles["heading"]}> {heading} </p>
        </div>

        <div className={styles["container-titles"]}>
          <p className={styles["title"]}> {title} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
