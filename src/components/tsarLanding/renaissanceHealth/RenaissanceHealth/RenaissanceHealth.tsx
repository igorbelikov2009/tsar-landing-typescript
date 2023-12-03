import React, { FC } from "react";
import Card, { CardProps } from "../Card/Card";
import styles from "./RenaissanceHealth.module.scss";

const RenaissanceHealth: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const cards: CardProps[] = [
    {
      icon: "usersColored",
      isBig: false,
      isDecreased: true,
      price: "220 000",
      title: "Клиентов по всей",
      subtitle: "России",
    },
    {
      icon: "kameraColored",
      isBig: false,
      isDecreased: true,
      price: "2 000",
      title: "Онлайн-",
      subtitle: "консультаций в месяц",
    },
    {
      icon: "houseColored",
      isBig: false,
      isDecreased: true,
      price: "2 000",
      title: "Выездных ",
      subtitle: "консультаций",
    },
    { icon: "doctorColored", isBig: false, isDecreased: true, price: "500", title: "Врачей", subtitle: "" },
  ];

  return (
    <div className={styles["renaissance-health"]}>
      <div className={styles["container-renaissance-health"]}>
        <div className={styles["container-heading"]}>
          <h1 className={styles["heading"]}>
            Ренессанс здоровье —
            <span className={styles["heading_span"]}>входит в группу компаний Ренессанс страхование</span>
          </h1>
        </div>

        <div className={styles["container-cards"]}>
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              isBig={card.isBig}
              isDecreased={card.isDecreased}
              price={card.price}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenaissanceHealth;
