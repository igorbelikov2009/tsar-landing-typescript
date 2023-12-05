import React, { FC } from "react";
import ParagraphBefore from "../../../ui/ParagraphBefore/ParagraphBefore";
import styles from "./DescriptionItem.module.scss";

export interface DescriptionItemProps {
  paragraph: string;
}

const DescriptionItem: FC<DescriptionItemProps> = ({ paragraph }) => {
  return (
    <div className={styles["description-item"]}>
      <div className={styles["container-description-item"]}>
        <ParagraphBefore paragraph={paragraph} />
      </div>
    </div>
  );
};

export default DescriptionItem;
