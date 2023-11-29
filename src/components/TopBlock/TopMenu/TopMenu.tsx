import React, { FC } from "react";

import styles from "./TopMenu.module.scss";

interface TopMenuProps {
  image: string;
  heading: string;
  subheading: string;
  textButton: string;
}

const TopMenu: FC<TopMenuProps> = ({ image, heading, subheading, textButton }) => {
  return (
    <section className={styles["top-menu"]} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}> {heading} </h1>
        <h2 className={styles["subheading"]}> {subheading} </h2>
        <button className={styles["button"]}> {textButton} </button>
      </div>
    </section>
  );
};

export default TopMenu;
