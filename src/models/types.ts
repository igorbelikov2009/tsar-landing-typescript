export interface IOptionItem {
  label: string;
  value: string;
}

export interface ITelemedCardItem {
  value: string;
  background: string;
  priceTerm: string;
  priceMmonth: string;
  price: string;
  description: string;
  textButton: string;
}

export interface ITsarCardItem {
  value: string;
  namePackage: string;
  description: string | null;
  price: number;
  currency: string;
  title1: string;
  title2: string;
  title3: string | null;
  title4: string | null;
  textButton: string;
}

export interface RadioLabelProps {
  value: string;
  numberMonths: number;
  isActive: boolean;
  emitValue: (event: string, numberMonths: number) => void;
}

export interface RadioItemProps {
  value: string;
  numberMonths: number;
}

export interface RadioProps {
  optionsItems: RadioItemProps[];
  emitValue: (event: string, numberMonths: number) => void;
  currentValue: string;
  numberMonths: number;
}

// export interface IOptionItem {
//   label: string;
//   value: string;
// }

//  for react-select
export interface IOption {
  value: string;
  label: string;
}

export interface IPackade {
  // country: string;
  // city: string;
  // street: string;
  // house: string;
  choosePackade: string;
}
