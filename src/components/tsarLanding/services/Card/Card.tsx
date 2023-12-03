import React, { FC } from "react";
import ImagesItem from "../../../ui/ImagesItem/ImagesItem";
import styles from "./Card.module.scss";

export interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  descriptionSpan: string;
  subdescription: string;
}

const Card: FC<CardProps> = ({ image, alt, title, description, descriptionSpan, subdescription }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["container-images"]}>
        <ImagesItem image={image} alt={alt} />
        <div className={styles["container-titles"]}>
          <p className={styles["title"]}> {title} </p>
        </div>
      </div>

      <p className={styles["description"]}>
        {description}
        <span className={styles["description_span"]}> {descriptionSpan} </span>
        {subdescription}
      </p>
    </div>
  );
};

export default Card;
