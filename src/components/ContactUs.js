import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import translations from '../utils/translations';
import './ContactUs.css';

const ContactUs = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the message
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1000);
  };

  return (
    <div className="contact-us">
      <div className="container">
        <h1 className="page-title">{t.contactUsTitle}</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t.formName}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.formEmail}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t.formMessage}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className="send-button">
            {t.sendMessageButton}
          </button>
          {status === 'success' && <p className="success-message">{t.messageSentSuccess}</p>}
          {status === 'error' && <p className="error-message">{t.messageSentError}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;