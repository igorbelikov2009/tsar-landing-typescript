import React, { FC } from "react";
import { ITsarCardItem } from "../../../models/types";
import TsarCard from "../tsarCardRadio/TsarCard/TsarCard";
import styles from "./Pricing.module.scss";

interface PricingProps {
  currentValue: string;
  valueСhoosePackage: string;
  numberMonths: number;
  emitValue: (value: string) => void;
  emitPackagePrice: (packagePrice: number) => void;
}

const Pricing: FC<PricingProps> = ({ currentValue, valueСhoosePackage, numberMonths, emitValue, emitPackagePrice }) => {
  const TsarCards: ITsarCardItem[] = [
    {
      value: `Базовый ${valueСhoosePackage}`,
      namePackage: "Базовый",
      description: "Самый популярный",
      price: 900,
      currency: " ₽",
      title1: "Консультации с врачами онлайн без ограничений",
      title2: "Доставка лекарств",
      title3: null,
      title4: null,
      textButton: `Выбрать ${valueСhoosePackage}`,
    },
    {
      value: "Расширенный на 1 месяц",
      namePackage: "Расширенный",
      description: null,
      price: 5200,
      currency: " ₽",
      title1: "Консультации с врачами онлайн без ограничений",
      title2: "Доставка лекарств",
      title3: "Вызовы врачей на дом",
      title4: null,
      textButton: `Выбрать ${valueСhoosePackage}`,
    },
    {
      value: "Полный на 1 месяц",
      namePackage: "Полный",
      description: null,
      price: 8200,
      currency: " ₽",
      title1: "Консультации с врачами онлайн без ограничений",
      title2: "Доставка лекарств",
      title3: "Вызовы врачей на дом",
      title4: "Страховка от COVID-19",
      textButton: `Выбрать ${valueСhoosePackage}`,
    },
  ];

  const onChangeCardValue = (value: string) => {
    emitValue(value);
    // console.log(value);
  };
  const onChangePackagePrice = (packagePrice: number) => {
    emitPackagePrice(packagePrice);
    // console.log(packagePrice);
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
              currency={card.currency}
              title1={card.title1}
              title2={card.title2}
              title3={card.title3}
              title4={card.title4}
              textButton={card.textButton}
              numberMonths={numberMonths}
              emitValue={onChangeCardValue}
              emitPackagePrice={onChangePackagePrice}
              isActive={card.value === currentValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
