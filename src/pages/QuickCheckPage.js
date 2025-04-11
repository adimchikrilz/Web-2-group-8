import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { ClaimsContext } from '../contexts/ClaimsContext';
import translations from '../utils/translations';
import './QuickCheckPage.css';

const QuickCheckPage = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState('initial');
  const [result, setResult] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { language } = useContext(LanguageContext);
  const { addClaim } = useContext(ClaimsContext);
  const t = translations[language];
  const navigate = useNavigate();

  const toggleOnlineStatus = () => {
    setIsOnline((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setState('verifying');

    setTimeout(() => {
      const verdictOptions = ['true', 'false', 'uncertain'];
      const verdict = verdictOptions[Math.floor(Math.random() * 3)];
      const resultData = {
        input,
        verdict,
        explanation:
          verdict === 'true'
            ? 'This claim is true. Nigerian health authorities are struggling to contain a rapidly spreading meningitis outbreak that has so far killed 151 people across the nation.'
            : verdict === 'false'
            ? 'This went viral but is false and dangerous – Tinubu did not resign from the presidential office in March 2025.'
            : 'Hmm... We couldn’t find any result that is correct from the link you pasted.',
        blockchainHash: 'abct123',
        timestamp: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        wallet: 'BRBK...sLJM',
      };

      setResult(resultData);
      setState('result');

      addClaim({
        text: input,
        timestamp: resultData.timestamp,
        date: resultData.date,
        wallet: resultData.wallet,
        status: verdict === 'true' ? 'true' : verdict === 'false' ? 'false' : 'uncertain',
      });

      setTimeout(() => {
        navigate('/verified-claims');
      }, 10000);
    }, 1500);
  };

  const handleCheckAnother = () => {
    setInput('');
    setResult(null);
    setState('initial');
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  return (
    <div className="quick-check-page">
      <div className="container">
        {state === 'initial' && (
          <>
          <h1 className="title-h1">{t.quickCheckTitle}</h1>
            <p className="real-or-fake">{language === 'en' ? 'Is It Real or Fake?' : 'Is It Real or Fake?'}</p>
            <form onSubmit={handleSubmit} className="quick-check-form">
              <div className="input-container">
                <input
                  type="text"
                  placeholder={t.enterText}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="claim-input"
                />
                <button type="button" className="upload-button">
                  <span className="upload-icon">📷</span> Upload an Image
                </button>
                <button type="button" className="offline-toggle" onClick={toggleOnlineStatus}>
                  <span className="offline-icon">🌐</span>
                  {isOnline ? 'Use Offline' : 'Use Online'}
                </button>
                <button type="submit" className="verify-button">
                  {t.checkText}
                </button>
              </div>
            </form>
          </>
        )}

        {state === 'verifying' && (
          <>
            <h1 className="title-h1">Verifying...</h1>
            <form className="quick-check-form">
              <div className="input-container">
                <input
                  type="text"
                  value={input}
                  className="claim-input"
                  disabled
                />
                <button type="button" className="upload-button" disabled>
                  <span className="upload-icon">📷</span> Upload an Image
                </button>
                <button type="button" className="offline-toggle" disabled>
                  <span className="offline-icon">🌐</span>
                  {isOnline ? 'Use Offline' : 'Use Online'}
                </button>
                <button type="button" className="verify-button" disabled>
                  {t.checkText}
                </button>
              </div>
            </form>
          </>
        )}

        {state === 'result' && (
          <div className="result-container">
            <h1 className={`result-title ${result.verdict}`}>
              {result.verdict === 'true' ? 'TRUE!' : result.verdict === 'false' ? 'Fake News!' : 'Result not found...'}
            </h1>
            <p className="result-explanation">{result.explanation}</p>
            <p className="blockchain-info">Verified on the Quick Check Tool</p>
            <div className="result-buttons">
              {result.verdict === 'true' && (
                <button className="view-result-button">View Result</button>
              )}
              <button onClick={handleCheckAnother} className="check-another-button">
                Check Another
              </button>
            </div>
            <button onClick={handleLearnMore} className="learn-more-link">
              Learn more about this result...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickCheckPage;
