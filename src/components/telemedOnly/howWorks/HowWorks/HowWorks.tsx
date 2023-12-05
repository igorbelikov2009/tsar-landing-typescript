import React from "react";
import DescriptionItem, { DescriptionItemProps } from "../DescriptionItem/DescriptionItem";
import styles from "./HowWorks.module.scss";

const HowWorks = () => {
  const paragraphs: DescriptionItemProps[] = [
    {
      paragraph:
        "ВОЗ и Минздрав рекомендуют при любой эпидемии меньше контактировать с  другими людьми. В том числе, это касается походов в поликлинику.",
    },
    {
      paragraph:
        "Онлайн-консультации с квалифицированными врачами в приложении Ренессанс здоровье - безопасный способ решить медицинские вопросы.",
    },
    {
      paragraph:
        "Расшифруем результаты анализов, проконсультируем по назначенным при лечении препаратами, предоставим 'второе мнение', если сомневаетесь в диагнозе.",
    },
  ];

  return (
    <div className={styles["how-works"]}>
      <div className={styles["container-how-works"]}>
        <div className={styles["container-heading"]}>
          <h1 className={styles["heading"]}> Как это работает </h1>
        </div>

        <div className={styles["container-content"]}>
          <div className={styles["container-description"]}>
            {paragraphs.map((paragraph) => (
              <DescriptionItem key={paragraph.paragraph} paragraph={paragraph.paragraph} />
            ))}
          </div>

          <div className={styles["container-photo"]}>
            <p className={styles["description-photo"]}>Здесь должна быть фотография</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
