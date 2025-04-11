import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import translations from '../utils/translations';
import './LandingPage.css';

const LandingPage = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>{t.landingTitle}</h1>
      <h2>{t.landingSubtitle}</h2>
      <p>{t.landingDescription}</p>
      <button className="cta-btn" onClick={() => navigate('/quick-check')}>
        {t.searchButton}
      </button>
    </section>
  );
};

export default LandingPage;