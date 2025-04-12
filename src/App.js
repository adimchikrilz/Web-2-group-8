import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageContext } from './contexts/LanguageContext';
import { ClaimsContext } from './contexts/ClaimsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import QuickCheckPage from './pages/QuickCheckPage';
import VerifiedClaims from './pages/VerifiedClaims';
import Blog from './pages/Blog'; // Your Blog component
import './App.css';
import EditBlogPost from './pages/EditBlogPost'; // Ensure this import is correct
import BlogPostDetail from './components/BlogPostDetails'; // Ensure this import is correct
import ContactUs from './components/ContactUs';
const App = () => {
  const [language, setLanguage] = React.useState('en');
  const [claims, setClaims] = React.useState([]);

  const addClaim = (claim) => {
    setClaims([...claims, claim]);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ClaimsContext.Provider value={{ claims, addClaim }}>
        <Router>
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/quick-check" element={<QuickCheckPage />} />
                <Route path="/verified-claims" element={<VerifiedClaims />} />
                <Route path="/blog/:slug" element={<BlogPostDetail />} />
                <Route path="/edit-blog/:slug" element={<EditBlogPost />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ClaimsContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
