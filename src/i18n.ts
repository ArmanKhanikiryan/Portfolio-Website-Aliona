import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import UkraineTranslations from "./translations/ua.json";
import EnglishTranslations from "./translations/en.json";
const resources = {
    en: {
        translation: EnglishTranslations,
    },
    ua: {
        translation: UkraineTranslations,
    }
};

i18next.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;