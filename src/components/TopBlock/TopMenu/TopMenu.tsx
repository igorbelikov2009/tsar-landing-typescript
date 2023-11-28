import React, { FC } from "react";

import styles from "./TopMenu.module.scss";

interface TopMenuProps {
  image: string;
  // heading: string;
  // subheading: string;
  // textButton: string;
}

const TopMenu: FC<TopMenuProps> = ({ image }) => {
  return (
    <section className={styles["top-menu"]} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}> Персональная медицинская помощь у вас дома </h1>
        <h2 className={styles["subheading"]}> Получайте квалифицированную медицинскую помощь не выходя из дома. </h2>
        <button className={styles["button"]}> Выбрать пакет </button>
      </div>
    </section>
  );
};

export default TopMenu;
