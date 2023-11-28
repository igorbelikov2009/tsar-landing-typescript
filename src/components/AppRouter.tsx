import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import TelemedOnly from "../pages/TelemedOnly/TelemedOnly";
import TsarLanding from "../pages/TsarLanding/TsarLanding";

const AppRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TsarLanding />} />
        <Route path="/telemed" element={<TelemedOnly />} />
      </Routes>
    </>
  );
};

export default AppRouter;
