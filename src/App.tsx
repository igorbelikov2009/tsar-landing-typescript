import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { UserDataContext } from "./context";

function App() {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<string>("Базовый на 1 месяц");
  const [packagePrice, setPackagePrice] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("userData-renaissance-health")) {
      setAuth(true);
    }
  }, []);

  return (
    <div>
      <UserDataContext.Provider
        value={{
          isAuth,
          setAuth,
          userName,
          setUserName,
          surname,
          setSurname,
          patronymic,
          setPatronymic,
          phone,
          setPhone,
          selectedPackage,
          setSelectedPackage,
          packagePrice,
          setPackagePrice,
        }}
      >
        <AppRouter />
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
