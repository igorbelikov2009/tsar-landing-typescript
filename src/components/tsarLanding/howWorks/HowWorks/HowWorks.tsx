import React from "react";
import ContainerDescriptionItem, {
  ContainerDescriptionItemProps,
} from "../ContainerDescriptionItem/ContainerDescriptionItem";
import styles from "./HowWorks.module.scss";

const HowWorks = () => {
  const DescriptionItem: ContainerDescriptionItemProps[] = [
    { num: "1", title: "Оформите подходящий пакет — на 1, 3 или 12 месяцев." },
    { num: "2", title: "Войдите по номеру телефона в личный кабинет «Ренессанс здоровье». На сайте или в приложении." },
    { num: "3", title: "Выберите врача в разделе «Онлайн-консультации»." },
    { num: "4", title: "Общайтесь в удобном для вас формате" },
  ];

  return (
    <div className={styles["how-works"]}>
      <div className={styles["container-how-works"]}>
        <div className={styles["container-heading"]}>
          <h1 className={styles["heading"]}> Как это работает </h1>
        </div>

        <div className={styles["container-content"]}>
          <div className={styles["container-description"]}>
            {DescriptionItem.map((card, index) => (
              <ContainerDescriptionItem key={index} num={card.num} title={card.title} />
            ))}
          </div>

          <div className={styles["container-youtube"]}>
            <p className={styles["description-youtube"]}>Embed YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
