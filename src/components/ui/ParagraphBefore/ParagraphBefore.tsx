import React, { FC } from "react";
import styles from "./ParagraphBefore.module.scss";

export interface IParagraphBefore {
  paragraph: string;
}

const ParagraphBefore: FC<IParagraphBefore> = ({ paragraph }) => {
  return <p className={styles["paragraph-before"]}>{paragraph}</p>;
};

export default ParagraphBefore;
