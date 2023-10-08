import React from "react";
import { useTranslation } from "react-i18next";
import ru from "../../Pictures/flags/ru.jpg";
import en from "../../Pictures/flags/en.jpg";
import arm from "../../Pictures/flags/arm.jpg";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="LanguageSelector w-16 h-6 m-auto lg:py-12">
      <div className="language flex">
        <button
          className={`arm w-6 h-6 shrink-0 ${
            i18n.language === "arm" ? "hidden" : ""
          }`}
          onClick={() => handleLanguageChange("arm")}
        >
          <img src={arm} alt="arm flag" />
        </button>
        <button
          className={`ru w-6 h-6 shrink-0 ${
            i18n.language === "ru" ? "hidden" : ""
          }`}
          onClick={() => handleLanguageChange("ru")}
        >
          <img src={ru} alt="ru flag" />
        </button>
        <button
          className={`en w-6 h-6 shrink-0 ${
            i18n.language === "en" ? "hidden" : ""
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          <img src={en} alt="en flag" />
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
