import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../translations/en.json";
import translationRU from "../translations/ru.json";
import translationAM from "../translations/arm.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  arm: {
    translation: translationAM,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "arm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
