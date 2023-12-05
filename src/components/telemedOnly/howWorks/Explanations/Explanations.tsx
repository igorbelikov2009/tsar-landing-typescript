import React from "react";
import styles from "./Explanations.module.scss";
import ButtonSecondary from "../../../ui/buttons/ButtonSecondary/ButtonSecondary";
import ContainerTitle, { ContainerTitleProps } from "../ContainerTitle/ContainerTitle";

const Explanations = () => {
  const onClickHandler = () => {
    console.log("Оформить полис");
  };

  const titles: ContainerTitleProps[] = [
    {
      title:
        "Оформите полис для получения консультаций. Если планируете обсуждать здоровье близких - не забудьте добавить их в список застрахованных.",
      paragraphs: null,
    },
    { title: "Стоимость полиса для детей - 2490 р./год. Для взрослых - 3490 р./год.", paragraphs: null },
    {
      title: "При оформлении полисов на двух и более человек - скидки:",
      paragraphs: ['2 полиса - 5%"', 'от 3 до 5 - 10%"', "больше 5 - 15%"],
    },
  ];

  return (
    <div className={styles["explanations"]}>
      <div className={styles["container-explanations"]}>
        <div className={styles["container-description"]}>
          {titles.map((title) => (
            <ContainerTitle key={title.title} title={title.title} paragraphs={title.paragraphs} />
          ))}
        </div>

        <div className={styles["container-button"]}>
          <ButtonSecondary textButton="Оформить полис" emitClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Explanations;
