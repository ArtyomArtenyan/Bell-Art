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
    <div className="flex items-center absolute top-12 left-[1656px]">
      {" "}
      <button
        className={`w-6 h-6 shrink-0 ${
          i18n.language === "arm" ? "hidden" : ""
        }`}
        onClick={() => handleLanguageChange("arm")}
      >
        {" "}
        <img src={arm} alt="arm flag" />
      </button>
      <button
        className={`w-6 h-6 shrink-0 ${i18n.language === "ru" ? "hidden" : ""}`}
        onClick={() => handleLanguageChange("ru")}
      >
        {" "}
        <img src={ru} alt="ru flag" />
      </button>
      <button
        className={`w-6 h-6 shrink-0 ${i18n.language === "en" ? "hidden" : ""}`}
        onClick={() => handleLanguageChange("en")}
      >
        {" "}
        <img src={en} alt="en flag" />
      </button>
    </div>
  );
};

export default LanguageSelector;
