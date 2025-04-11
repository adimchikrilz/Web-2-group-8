import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ClaimsContext } from '../contexts/ClaimsContext';
import './VerifiedClaims.css';

const VerifiedClaims = () => {
  const { language } = useContext(LanguageContext);
  const { claims } = useContext(ClaimsContext);

  return (
    <div className="verified-claims-page">
      <h1>Verified Claims</h1>
      {claims.length === 0 ? (
        <p>No claims verified yet.</p>
      ) : (
        <ul>
          {claims.map((claim, index) => (
            <li key={index}>
              {claim.text} - {claim.status} (Verified on {claim.date} at {claim.timestamp})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VerifiedClaims;