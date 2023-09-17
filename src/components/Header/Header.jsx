import React from "react";
import Logo from "../Pictures/logo/Logo_Photo.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector/LanguageSelector.jsx";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header flex bg-#fff w-[1920px] h-[120px] shrink-0 shadow-[3sh] md:w-[1520px] md:h-[120px]">
      <div className="logoContainer py-[18px] pl-[200px]">
        <div className="LogoCon flex w-[84px] h-[84px] px-[10px] flex-col justify-center items-center gap-[5px] text-center">
          <div className="logo">
            <img src={Logo} alt="Logo" className="w-16 h-16 inline" />
          </div>
          <div className="logoText">
            <p className="text-[#e5b727] text-[12px] leading-[14.63px] font-normal w-14 h-[15px] md:text-[12px]">
              {t("logo")}
            </p>
          </div>
        </div>
      </div>

      <div className="Navigation absolute pl-[549px]  py-12 md:pl-[373px]">
        <nav className="nav  w-[823px] h-6">
          <ul className="inline-flex  gap-20 items-start text-[20px] leading-[24.38px] font-light md:gap-16">
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
        </nav>
      </div>

      <LanguageSelector />
    </div>
  );
};
export default Header;
