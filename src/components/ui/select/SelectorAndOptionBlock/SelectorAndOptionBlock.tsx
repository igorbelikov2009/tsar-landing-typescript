import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import OptionBlockForSelector from "../OptionBlockForSelector/OptionBlockForSelector";
import Selector from "../Selector/Selector";
import styles from "./SelectorAndOptionBlock.module.scss";

interface SelectorAndOptionBlockProps {
  optionsItems: IOptionItem[];
  currentValue: string;
  emitChangeOptions: (value: string, id: string) => void;
}

// const ControllerOption
const SelectorAndOptionBlock: FC<SelectorAndOptionBlockProps> = ({ optionsItems, currentValue, emitChangeOptions }) => {
  const onChangeRadio = (value: string, id: string) => {
    emitChangeOptions(value, id);
  };

  return (
    <div className={styles["container"]}>
      <Selector value={currentValue} />

      <div className={styles["select-options_show"]}>
        <OptionBlockForSelector optionsItems={optionsItems} currentValue={currentValue} emitValue={onChangeRadio} />
      </div>
    </div>
  );
};

export default SelectorAndOptionBlock;
