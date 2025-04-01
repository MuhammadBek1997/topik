import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import uztranslation from '../public/locales/uzb.json'
import rutranslation from '../public/locales/rus.json'
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";


const lang = localStorage.getItem("i18nextLng") || "uz";






i18n
.use(I18NextHttpBackend)
.use(i18nextBrowserLanguagedetector)
.use(initReactI18next)
.init({
    fallbackLang: 'uz',
    eng:lang,
    debugger:true,
    resources:{
        uz:{translation:uztranslation},
        ru:{translation:rutranslation}
    }
})

export default i18n