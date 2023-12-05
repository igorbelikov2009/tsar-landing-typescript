export interface IOptionItem {
  date: string;
  value: string;
  id: string;
  name?: string;
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
  price: string;
  title1: string;
  title2: string;
  title3: string | null;
  title4: string | null;
  textButton: string;
}

export interface RadioLabelProps {
  value: string;
  title: string;
  isActive: boolean;
  emitValue: (event: string) => void;
}

export interface RadioItemProps {
  value: string;
  title: string;
  name?: string;
}

export interface RadioProps {
  optionsItems: RadioItemProps[];
  emitValue: (event: string) => void;
  currentValue: string;
}

export interface IOptionItem {
  date: string;
  value: string;
  id: string;
  name?: string;
}
