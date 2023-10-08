import React, { useState } from "react";
import Logo from "../Pictures/logo/Logo_Photo.svg";
import HamburgerMenu from "../Pictures/HamburgerMenu/Hamburger_Menu.svg";
import CloseIcon from "../Pictures/HamburgerMenu/Vector 1.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector/LanguageSelector.jsx";

const Header = () => {
  const { t } = useTranslation();
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const toggleWindow = () => {
    setIsWindowOpen(!isWindowOpen);
  };

  return (
    <div className="HeaderWrapper h-[120px] sr:h-[104px] xg:py-[6px] xg:h-16 sr:py-4 py-[18px]">
      <header className="Header shadow-[custom] bg-white flex m-[0px_auto] w-[79.8vw] lg:items-center sr:items-center lg:justify-between sr:justify-between">
        <div className="HeaderLogo  sr:pl-0">
          <div className="Logo  flex px-[0.625rem]  flex-col justify-center items-center gap-[0.313rem] sr:gap-[3px]">
            <NavLink to="/">
              <img
                className="w-16 h-16 sr:w-14 sr:h-14 xg:w-10 xg:h-10"
                src={Logo}
                alt=""
              />
            </NavLink>
            <span className="text-[0.75rem] sr:text-[11px] xg:text-[7px] font-normal leading-normal text-secondaryColor">
              {t("logo")}
            </span>
          </div>
        </div>
        <nav className="HeaderMenu flex-auto m-auto  lg:hidden ">
          <ul className="MenuList flex  justify-evenly">
            <li className="MenuItem ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("home")}
              </NavLink>
            </li>
            <li className="MenuItem">
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("product")}
              </NavLink>
            </li>
            <li className="MenuItem">
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("services")}
              </NavLink>
            </li>
            <li className="MenuItem ">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-[#e5b727]" : "")}
              >
                {t("contact")}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden m-auto">
          <LanguageSelector />
        </div>

        <div className="HamburgerMenu hidden lg:flex justify-end sr:block z-[9992]">
          <button className="HamburgerMenuContainer  w-8 h-4">
            <img
              onClick={toggleWindow}
              src={HamburgerMenu}
              alt="HamburgerMenu"
            />
          </button>
        </div>

        {isWindowOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleWindow}
          ></div>
        )}

        <div
          className={`fixed top-0 right-0 h-full w-[373px] sr:w-[333px] xg:w-[390px] z-[9999]  bg-white p-4 transition-transform ${
            isWindowOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          <div className="topPart">
            <div className="flex justify-start pt-[52px] pl-10 absolute">
              <button onClick={toggleWindow} className="text-black">
                <img className="w-4 h-4" src={CloseIcon} alt="" />
              </button>
            </div>
            <div className="MediaLanguages pl-[189px] sr:pl-[149px] xg:pl-[302px]">
              <LanguageSelector />
            </div>
          </div>
          <div className="bottomPart">
            <nav className="HeaderMenu relative">
              <ul className="MenuList absolute pl-10 pt-[92px] flex flex-col text-[18px]">
                <li className="MenuItem ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-[#e5b727]" : ""
                    }
                  >
                    {t("home")}
                  </NavLink>
                </li>
                <li className="MenuItem  mt-16">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      isActive ? "text-[#e5b727]" : ""
                    }
                  >
                    {t("product")}
                  </NavLink>
                </li>
                <li className="MenuItem  mt-16">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "text-[#e5b727]" : ""
                    }
                  >
                    {t("services")}
                  </NavLink>
                </li>
                <li className="MenuItem  mt-16">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-[#e5b727]" : ""
                    }
                  >
                    {t("contact")}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
