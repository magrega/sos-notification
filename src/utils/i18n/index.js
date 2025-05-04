import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/en.json";
import translationRU from "./ru/ru.json";

i18next
  .use(LanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    keySeparator: ".",
    defaultNS: "translation",
    ns: [],
    interpolation: {
      escapeValue: false,
    },
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
    },
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU },
    },
  });

export default i18next;
