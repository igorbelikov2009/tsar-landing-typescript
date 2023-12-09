import React, { FC } from "react";
import { IOption } from "../../../../models/types";
import OptionItem from "../OptionItem/OptionItem";
import styles from "./SelectorOptions.module.scss";

interface SelectorOptionsProps {
  //   isActive: boolean;
  isVisible: boolean;
  optionsItems: IOption[];
  //   label: string;
  currentValue: string;
  onClickSelector: () => void;
  emitOnChangeRadio: (value: string) => void;
  emitOnClickRadio: () => void;
}

const SelectorOptions: FC<SelectorOptionsProps> = ({
  //   isActive,
  isVisible,
  optionsItems,
  //   label,
  currentValue,
  onClickSelector,
  emitOnChangeRadio,
  emitOnClickRadio,
}) => {
  //
  const onClickContainerSelector = () => {
    onClickSelector();
  };

  //   const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     emitOnChangeRadio(event.target.value);
  //   };

  const onChangeRadio = (value: string) => {
    emitOnChangeRadio(value);
  };

  const onClickOptionsRadio = () => {
    emitOnClickRadio();
  };

  return (
    <div className={styles["container-selector-options"]}>
      <div className={styles["selector"]}>
        <div className={styles["selector__container-title"]}>
          <div className={isVisible ? styles["selector__border-gray"] : styles["selector__border-white"]}>
            <div
              className={isVisible ? styles["selector__container-gray"] : styles["selector__container-white"]}
              onClick={onClickContainerSelector}
            >
              <div className={styles["selector__selector-date"]}>
                <p className={styles["selector__selector-value"]}>{currentValue}</p>
              </div>

              <div className={styles["selector__icon-container"]}>
                <img
                  className={isVisible ? styles["selector__icon-rotate-180"] : styles["selector__icon-rotate-0"]}
                  src="/icons/triple/Arrow Down/Dark.svg"
                  alt="Arrow"
                />
              </div>
            </div>

            <div
              className={isVisible ? styles["selector__white-line-height-2"] : styles["selector__white-line-height-1"]}
            >
              <div
                className={isVisible ? styles["selector__black-line-width-0"] : styles["selector__black-line-width-50"]}
              ></div>

              <div
                className={isVisible ? styles["selector__black-line-width-0"] : styles["selector__black-line-width-50"]}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className={isVisible ? styles["options-block_show"] : styles["options-block_hide"]}>
        <div className={styles["options-block"]} onClick={onClickOptionsRadio}>
          <div className={styles["options-block__scrollable-block"]}>
            {optionsItems.map((option, index) => (
              <OptionItem
                key={index}
                value={option.value}
                label={option.label}
                isActive={option.value === currentValue}
                emitValue={onChangeRadio}
              />
              //   <div key={index} className={isActive ? styles["option-active"] : styles["option"]}>
              //     {option.label}
              //     <input className={styles["input"]} type="radio" value={option.value} onChange={onChangeRadio} />
              //   </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorOptions;
