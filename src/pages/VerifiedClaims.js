import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ClaimsContext } from '../contexts/ClaimsContext';
import translations from '../utils/translations';
import './VerifiedClaims.css';

// Import images from src/assets
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
// import image7 from '../assets/image 7.jpeg';
// import image8 from '../assets/image 8.jpeg';

const VerifiedClaims = () => {
  const { language } = useContext(LanguageContext);
  const { claims } = useContext(ClaimsContext);
  const t = translations[language];
  const [selectedClaim, setSelectedClaim] = useState(null);

  const verifiedClaims = [
    {
      category: 'Health',
      title: 'Nigeria Struggles to Rein in a Widespread Meningitis Outbreak That Has Killed at Least 150',
      date: 'April 9, 2025',
      author: 'Associated Press',
      summary:
        'Nigerian health authorities are struggling to contain a rapidly spreading meningitis outbreak that has so far killed 151 people across the nation, mostly in remote northern regions with children affected...',
      details:
        'ABUJA, NIGERIA (AP) - Nigerian health authorities are struggling to contain a rapidly spreading meningitis outbreak that has so far killed 151 people across the west African nation, mostly in remote parts of the northern region with children affected the most. While cases first recorded in October have spread to 23 of Nigeria’s 36 states, nearly half of the deaths, 74, were reported this year, the Nigeria Center for Disease Control said this week, with local partners describing the recent rise in fatalities as “alarming.” Most deaths from the disease have been mainly due to infected people not going to health facilities or arriving there late with severe complications, NCDC spokesperson Sani Datti told The Associated Press, a common problem in past outbreaks in the country. The current outbreak has hit Africa’s most populous country as its health sector reels from U.S. aid cuts ordered by the Trump administration in February that have affected multiple countries. Nigeria relied heavily on such aid over the years to help fight similar outbreaks and support its underfunded healthcare systems. Seasonal meningitis outbreaks are common during the dry season, especially in northern Nigeria. Almost all the worst-hit states are in the north, where health providers have warned the outbreak is rapidly spreading in hard-to-reach areas.',
      status: 'true',
      image: image1, // Placeholder for image URL
    },
    {
      category: 'Health',
      title: 'Health Experts Say Only 40% of LGAs in Nigeria Have Qualified Medical Officers',
      date: 'April 9, 2025',
      author: 'Marian Ileyemi',
      summary:
        'Public health experts have raised concerns over Nigeria’s primary healthcare system, revealing that only about 40 percent of local government areas (LGAs) have medically qualified Medical Officers...',
      status: 'false',
      image: image2,
    },
    {
      category: 'Politics',
      title: 'Speak Up, Nigeria is Collapsing, Don’t Fear Anybody - Peter Obi',
      date: 'April 9, 2025',
      author: 'Nwafor Sunday',
      summary:
        'Mr. Peter Obi, the Presidential Candidate of the Labour Party (LP) in the 2023 general election, has urged party members not to fear anyone, emphasizing that Nigeria is in a state of collapse and urgent...',
      status: 'uncertain',
      image: image9,
    },
    {
      category: 'Politics',
      title: 'Nigeria Looking at Opportunities from Trump’s Tariffs - Finance Minister Edun',
      date: 'April 8, 2025',
      author: 'Pache Chiedozie',
      summary:
        'Minister of Finance, Wale Edun, has stated that the Economic Management Team is exploring how Nigeria can benefit from the recent tariffs imposed by U.S. President Donald Trump on several co...',
      status: 'true',
      image: image10,
    },
    {
      category: 'Security',
      title: 'Boko Haram Intensifies Attacks in Borno State, Reclaiming Territory',
      date: 'April 9, 2025',
      author: 'Reuters',
      summary:
        'Boko Haram has escalated its attacks and kidnappings in Borno State, Nigeria, with limited response from security forces, according to Governor Babagana Zulum. The militant group, along with its offsho...',
      status: 'true',
      image: image11,
    },
    {
      category: 'Security',
      title: 'Gunmen Kill at Least 52 People in Plateau State',
      date: 'April 7, 2025',
      author: 'Reuters',
      summary:
        'Gunmen have killed at least 52 people and displaced nearly 2,000 others over several days of attacks in Nigeria’s northern Plateau State, an area with a history of violence between farmers and cattle...',
      status: 'true',
      image: image12,
    },
  ];

  const handleClaimClick = (claim) => {
    setSelectedClaim(claim);
  };

  const handleBackToList = () => {
    setSelectedClaim(null);
  };

  const handlePublish = () => {
    console.log('Publish clicked');
  };

  return (
    <div className="verified-claims">
      <div className="container">
        {!selectedClaim ? (
          <>
            <h1 className="page-title">{t.verifiedClaimsTitle}</h1>
            <div className="claims-list">
              {verifiedClaims.map((claim, index) => (
                <div key={index} className="claim-card" onClick={() => handleClaimClick(claim)}>
                  <div className="claim-image-placeholder">
                    {claim.image ? (
                      <img src={claim.image} alt={claim.title} className="claim-image" />
                    ) : (
                      <div className="image-placeholder">No Image Available</div>
                    )}
                  </div>
                  <span className={`category-label ${claim.category.toLowerCase()}`}>
                    {claim.category}
                  </span>
                  <h2 className="claim-title">{claim.title}</h2>
                  <p className="claim-date">Date: {claim.date}</p>
                  <p className="claim-author">Author: {claim.author}</p>
                  <p className="claim-summary">{claim.summary}</p>
                  <button className="view-more-button">View more</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="claim-details">
            <div className="claim-details-image-placeholder">
              {selectedClaim.image ? (
                <img src={selectedClaim.image} alt={selectedClaim.title} className="claim-details-image" />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
            </div>
            <h1 className="claim-details-title">{selectedClaim.title}</h1>
            <p className="claim-details-meta">
              Date Published: {selectedClaim.date} | Author: {selectedClaim.author}
            </p>
            {selectedClaim.status === 'true' && (
              <div className="status-badge correct">CORRECT</div>
            )}
            <div className="action-buttons">
              <button className="publish-button" onClick={handlePublish}>
                Publish
              </button>
              <button className="search-another-button" onClick={handleBackToList}>
                Search another NEWS or Claim
              </button>
            </div>
            <p className="claim-verification">
              - The claim that there is currently a widespread meningitis outbreak that has killed at least 150 people is correct.
            </p>
            <p className="claim-details-text">{selectedClaim.details}</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <p>Fighting Misinformation in Nigeria with Quick Check Tool © TruthCheck 2025</p>
      </footer>
    </div>
  );
};

export default VerifiedClaims;