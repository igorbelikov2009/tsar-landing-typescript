import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import OptionBlockForSelector from "../OptionBlockForSelector/OptionBlockForSelector";
import Selector from "../Selector/Selector";
import styles from "./SelectorAndOptionBlock.module.scss";

interface SelectorAndOptionBlockProps {
  isVisible: boolean;
  isDarkgray: boolean;
  optionsItems: IOptionItem[];
  currentValue: string;
  onClickSelector: () => void;
  emitOnChangeRadio: (value: string) => void;
  emitOnClickRadio: () => void;
}

// const ControllerOption
const SelectorAndOptionBlock: FC<SelectorAndOptionBlockProps> = ({
  isVisible,
  isDarkgray,
  optionsItems,
  currentValue,
  onClickSelector,
  emitOnChangeRadio,
  emitOnClickRadio,
}) => {
  const onClickRadioSelector = () => {
    onClickSelector();
  };

  const onChangeRadio = (value: string) => {
    emitOnChangeRadio(value);
  };
  const onClickRadio = () => {
    emitOnClickRadio();
  };

  return (
    <div className={styles["container"]}>
      <Selector
        value={currentValue}
        isVisible={isVisible}
        isDarkgray={isDarkgray}
        onClickSelector={onClickRadioSelector}
      />

      <div className={isVisible ? styles["select-options_show"] : styles["select-options_hide"]}>
        <OptionBlockForSelector
          optionsItems={optionsItems}
          currentValue={currentValue}
          emitValue={onChangeRadio}
          onClickOptionsBlock={onClickRadio}
        />
      </div>
    </div>
  );
};

export default SelectorAndOptionBlock;
