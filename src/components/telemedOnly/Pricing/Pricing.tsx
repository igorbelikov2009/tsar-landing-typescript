import React, { FC } from "react";
import { ITelemedCardItem } from "../../../models/types";
import Card from "../telemedCardRadio/Card/Card";
import styles from "./Pricing.module.scss";

interface PricingProps {
  currentValue: number;
  emitValue: (value: string) => void;
}

const Pricing: FC<PricingProps> = ({ currentValue, emitValue }) => {
  const TelemedCards: ITelemedCardItem[] = [
    {
      value: "0",
      image: "../../../assets/images/clouds/Clouds_1.svg",
      priceTerm: "1",
      priceMmonth: "месяц",
      price: "100 ₽",
      description: "Самый популярный",
      textButton: "Выбрать",
    },
    {
      value: "1",
      image: "../../../assets/images/clouds/Clouds_2.svg",
      priceTerm: "3",
      priceMmonth: "месяцев",
      price: "700 ₽",
      description: "Практичный",
      textButton: "Выбрать",
    },
    {
      value: "2",
      image: "../../../assets/images/clouds/Clouds_3.svg",
      priceTerm: "12",
      priceMmonth: "месяцев",
      price: "900 ₽",
      description: "Выгодный",
      textButton: "Выбрать",
    },
  ];

  const onChangeCardValue = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["pricing"]}>
      <div className={styles["pricing-container"]}>
        <div className={styles["headings-container"]}>
          <p className={styles["heading"]}>Консультации с врачами онлайн без ограничений. </p>
          <span className={styles["heading"]}> Доставка лекарств </span>
        </div>

        <div className={styles["container-for-cards"]}>
          {TelemedCards.map((card, index) => (
            <Card
              key={index}
              value={card.value}
              image={card.image}
              priceTerm={card.priceTerm}
              priceMmonth={card.priceMmonth}
              price={card.price}
              description={card.description}
              textButton={card.textButton}
              emitValue={onChangeCardValue}
              isActive={index === currentValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
