import React from "react";
import Card, { CardProps } from "../Card/Card";
import styles from "./Сonsultations.module.scss";

const Сonsultations = () => {
  const cards: CardProps[] = [
    {
      icon: "clockDark",
      isBig: false,
      isDecreased: true,
      heading: "Круглосуточно и без выходных",
      title: "Онлайн-консультации терапевта и врачей-специалистов",
    },
    {
      icon: "houseColored",
      isBig: false,
      isDecreased: true,
      heading: "Не выходя из дома",
      title: "Консультации в чате или по аудио- или видеосвязи",
    },
    {
      icon: "ambulanceColored",
      isBig: false,
      isDecreased: true,
      heading: "Безлимитные консультации",
      title: "Вы платите один раз и можете консультироваться у разных врачей в течении года",
    },
  ];

  return (
    <div className={styles["consultations"]}>
      <div className={styles["container-consultations"]}>
        <div className={styles["container-for-cards"]}>
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              isBig={card.isBig}
              isDecreased={card.isDecreased}
              heading={card.heading}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Сonsultations;
