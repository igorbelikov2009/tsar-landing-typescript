import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import OptionItem from "../OptionItem/OptionItem";
import styles from "./OptionBlockForSelector.module.scss";

interface OptionBlockForSelectorProps {
  optionsItems: IOptionItem[];
  emitValue: (event: string, id: string) => void;
  currentValue: string;
}

const OptionBlockForSelector: FC<OptionBlockForSelectorProps> = ({ optionsItems, currentValue, emitValue }) => {
  const onChangeOption = (value: string, id: string) => {
    emitValue(value, id);
  };

  return (
    <div className={styles["options-block"]}>
      <div className={styles["scrollable-block"]}>
        {optionsItems.map((option, index) => (
          <OptionItem
            key={index}
            data={option.data}
            value={option.value}
            id={option.id}
            isActive={option.value === currentValue}
            emitValue={onChangeOption}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionBlockForSelector;
