import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <button
        className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`}
        onClick={() => changeLanguage('pt')}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSelector; 