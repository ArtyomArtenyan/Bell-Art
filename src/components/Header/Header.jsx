import React from "react";
import Logo from "../Pictures/logo/Logo_Photo.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector/LanguageSelector.jsx";

const Header = () => {
  const { t } = useTranslation();
  console.log(t("home"));
  return (
    <nav className="bg-#fff w-[1920px] h-[120px] shrink-0 relative shadow-[3sh]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex w-[84px] h-[84px] pt-0 px-[10px] flex-col justify-center items-center gap-[5px] text-center absolute left-[200px] top-[18px]">
          <img src={Logo} alt="Logo" className="w-16 h-16 inline" />
          <p className="logo name text-[#e5b727] text-sm/[14.63px] font-normal w-14 h-[15px] ">
            {t("logo")}
          </p>
        </div>
        <div className="Nav w-[823px] h-6 relative">
          <ul className="inline-flex gap-20 items-start text-[20px] absolute top-12 left-[549px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("product")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("services")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("contact")}
              </NavLink>
            </li>
          </ul>
        </div>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Header;
