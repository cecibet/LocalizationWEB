import i18next from "i18next";
import Fetch from 'i18next-fetch-backend';
import { initReactI18next } from "react-i18next";

i18next
  .use(Fetch)
  .use(initReactI18next)
  .init({
    ns: ['t'],
    fallbackLng: "en",
    supportedLngs: ["es", "en", "fr"],
    backend: {
      loadPath: `https://localhost:7103/api/Translations?lang={{lng}}`
    }
  })
