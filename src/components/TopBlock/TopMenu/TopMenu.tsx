import React, { FC } from "react";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary/ButtonPrimary";

import styles from "./TopMenu.module.scss";

interface TopMenuProps {
  image: string;
  heading: string;
  subheading: string;
  textButton: string;
  emitClick: () => void;
}

const TopMenu: FC<TopMenuProps> = ({ image, heading, subheading, textButton, emitClick }) => {
  return (
    <section className={styles["top-menu"]} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}> {heading} </h1>
        <h2 className={styles["subheading"]}> {subheading} </h2>

        <div className={styles["cotainer-button"]}>
          <ButtonPrimary textButton={textButton} emitClick={emitClick} />
        </div>
      </div>
    </section>
  );
};

export default TopMenu;
