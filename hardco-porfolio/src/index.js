import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    supportedLngs:['en','ch'],
    fallbackLng: "ch",
    detection:{
      order: ['cookie','htmlTag','localStorage', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense:false}
});  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);