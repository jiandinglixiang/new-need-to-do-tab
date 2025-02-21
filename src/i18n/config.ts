import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to React",
      "settings": "Settings",
      "home": "Home",
      "language": "Language"
    }
  },
  zh: {
    translation: {
      "welcome": "欢迎使用 React",
      "settings": "设置",
      "home": "首页",
      "language": "语言"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "zh", // 默认语言
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 