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
      <h1>TruthCheck!</h1>
      <h2>Your shield against lies.</h2>
      <p>Verify news and claims in Nigeria <br/> instantly with the QuickCheck Tool.</p>
      <button className="cta-btn" onClick={() => navigate('/quick-check')}>
        Search with QuickCheck
      </button>
    </section>
  );
};

export default LandingPage;