import { createContext } from "react";

interface IUserDataContext {
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;

  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;

  surname: string; // фамилия
  setSurname: React.Dispatch<React.SetStateAction<string>>;

  patronymic: string; // отчество
  setPatronymic: React.Dispatch<React.SetStateAction<string>>;

  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;

  selectedPackage: string;
  setSelectedPackage: React.Dispatch<React.SetStateAction<string>>;

  packagePrice: number;
  setPackagePrice: React.Dispatch<React.SetStateAction<number>>;

  isDarkgray: boolean;
  setIsDarkgray: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDataContext = createContext<IUserDataContext>({
  isAuth: false,
  setAuth: () => {},
  userName: "",
  setUserName: () => {},
  surname: "",
  setSurname: () => {},
  patronymic: "",
  setPatronymic: () => {},
  phone: "",
  setPhone: () => {},
  // selectedPackage: "Базовый на 1 месяц",
  selectedPackage: "",
  setSelectedPackage: () => {},
  packagePrice: 0,
  setPackagePrice: () => {},
  isDarkgray: false,
  setIsDarkgray: () => {},
});

/*
У нас есть useEffect в App.tsx, который автоматически записывает setAuth(true)
при условии, если хотя бы раз логинился в CallBack.tsx 
  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
  }, []);
*/
