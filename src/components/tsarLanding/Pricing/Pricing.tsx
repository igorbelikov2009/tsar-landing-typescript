import React, { FC } from "react";
import { ITsarCardItem } from "../../../models/types";
import TsarCard from "../tsarCardRadio/TsarCard/TsarCard";
import styles from "./Pricing.module.scss";

interface PricingProps {
  currentValue: string;
  emitValue: (value: string) => void;
}

const Pricing: FC<PricingProps> = ({ currentValue, emitValue }) => {
  const TsarCards: ITsarCardItem[] = [
    {
      value: "Базовый на 1 месяц",
      namePackage: "Базовый",
      description: "Самый популярный",
      price: "900 ₽",
      title1: "Консультации с врачами онлайн без ограничений",
      title2: "Доставка лекарств",
      title3: null,
      title4: null,
      textButton: "Выбрать на 1 месяц",
    },
    {
      value: "Расширенный на 1 месяц",
      namePackage: "Расширенный",
      description: null,
      price: "5 200 ₽",
      title1: "Консультации с врачами онлайн без ограничений",
      title2: "Доставка лекарств",
      title3: "Вызовы врачей на дом",
      title4: null,
      textButton: "Выбрать на 1 месяц",
    },
    {
      value: "Полный на 1 месяц",
      namePackage: "Полный",
      description: null,
      price: "8 200 ₽",
      title1: "Консультации с врачами онлайн без ограничений",
      title2: "Доставка лекарств",
      title3: "Вызовы врачей на дом",
      title4: "Страховка от COVID-19",
      textButton: "Выбрать на 1 месяц",
    },
  ];

  const onChangeCardValue = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["pricing"]}>
      <div className={styles["pricing-container"]}>
        <div className={styles["container-for-cards"]}>
          {TsarCards.map((card, index) => (
            <TsarCard
              key={index}
              value={card.value}
              namePackage={card.namePackage}
              description={card.description}
              price={card.price}
              title1={card.title1}
              title2={card.title2}
              title3={card.title3}
              title4={card.title4}
              textButton={card.textButton}
              emitValue={onChangeCardValue}
              isActive={card.value === currentValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
