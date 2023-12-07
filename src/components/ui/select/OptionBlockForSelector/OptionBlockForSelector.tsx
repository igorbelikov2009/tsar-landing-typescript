import React, { FC } from "react";
import { IOption } from "../../../../models/types";
import OptionItem from "../OptionItem/OptionItem";
import styles from "./OptionBlockForSelector.module.scss";

interface OptionBlockForSelectorProps {
  optionsItems: IOption[];
  emitValue: (event: string) => void;
  onClickOptionsBlock: () => void;
  currentValue: string;
}

const OptionBlockForSelector: FC<OptionBlockForSelectorProps> = ({
  optionsItems,
  currentValue,
  emitValue,
  onClickOptionsBlock,
}) => {
  const onChangeOption = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["options-block"]} onClick={onClickOptionsBlock}>
      <div className={styles["scrollable-block"]}>
        {optionsItems.map((option, index) => (
          <OptionItem
            key={index}
            label={option.label}
            value={option.value}
            isActive={option.value === currentValue}
            emitValue={onChangeOption}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionBlockForSelector;
