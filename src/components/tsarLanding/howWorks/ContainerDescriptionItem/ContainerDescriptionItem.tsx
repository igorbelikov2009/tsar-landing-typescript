import React, { FC } from "react";
import styles from "./ContainerDescriptionItem.module.scss";

export interface ContainerDescriptionItemProps {
  num: string;
  title: string;
}

const ContainerDescriptionItem: FC<ContainerDescriptionItemProps> = ({ num, title }) => {
  return (
    <div className={styles["container-description-item"]}>
      <div className={styles["container-number"]}>
        <p className={styles["number"]}> {num} </p>
      </div>

      <div className={styles["container-title"]}>
        <div className={styles["title"]}> {title} </div>
      </div>
    </div>
  );
};

export default ContainerDescriptionItem;
