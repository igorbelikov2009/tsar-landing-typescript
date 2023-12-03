import React, { FC } from "react";
import styles from "./Services.module.scss";
import Card, { CardProps } from "../Card/Card";

const Services: FC = () => {
  const cards: CardProps[] = [
    {
      image: "patient",
      alt: "patient",
      title: "Доставка лекарств",
      description: "Специальные условия на онлайн-заказ и доставку лекарств в",
      descriptionSpan: " eapteka.ru ",
      subdescription: " для клиентов «Ренессанс здоровье». Берегите время и здоровье, избегая лишних походов в аптеку.",
    },
    {
      image: "child",
      alt: "child",
      title: "Вызовы врачей на дом",
      description:
        "Если онлайн консультации недостаточно, вы сможете вызвать терапевта на дом. Провести дополнительный осмотр или уточнить диагноз. Для базового тарифа вызов врача доступен при оплате за вызов.",
      descriptionSpan: "",
      subdescription: "",
    },
    {
      image: "inspection",
      alt: "inspection",
      title: "АнтиВирус",
      description:
        "Страховка на случай инфекционного заболевания, включая COVID-19. Выплаты по больничному листу в результате болезни или смерти застрахованного.",
      descriptionSpan: "",
      subdescription: "",
    },
  ];

  return (
    <div className={styles["services"]}>
      <div className={styles["container-services"]}>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            alt={card.alt}
            title={card.title}
            description={card.description}
            descriptionSpan={card.descriptionSpan}
            subdescription={card.subdescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
