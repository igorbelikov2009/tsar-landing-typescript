import React, { FC } from "react";
import ParagraphBefore from "../../../ui/ParagraphBefore/ParagraphBefore";
import styles from "./ContainerTitle.module.scss";

export interface ContainerTitleProps {
  title: string;
  paragraphs: string[] | null;
}

const ContainerTitle: FC<ContainerTitleProps> = ({ title, paragraphs }) => {
  return (
    <div className={styles["container-title"]}>
      <p className={styles["title"]}> {title} </p>
      {paragraphs?.map((paragraph) => (
        <ParagraphBefore key={paragraph} paragraph={paragraph} />
      ))}
    </div>
  );
};

export default ContainerTitle;
