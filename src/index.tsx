import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import  App  from "./App";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json';
import ua from './lang/ua.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ua: {
        translation: ua
      }
    },
    lng: 'ua', // встановлення мови за замовчуванням
    fallbackLng: 'ua', // якщо переклад не знайдено, використовуйте англійську мову
    interpolation: {
      escapeValue: false // дозволяє використовувати html в перекладах
    }
  });

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

