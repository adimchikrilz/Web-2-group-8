// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { LanguageContext } from '../contexts/LanguageContext';
// import logo from '../assets/logo.png'
// const Header = () => {
//   const { language, setLanguage } = useContext(LanguageContext);

//   return (
//     <header>
//       <div className="logo">
//         {/* Replace with actual logo image */}
//         <img src={logo} alt="TruthCheck Logo" />
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/quick-check">Quick Check</Link></li>
//           <li><Link to="/verified-claims">Verified Claims</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//         </ul>
//       </nav>
//       <div className="header-right">
//         <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//           <option value="en">EN</option>
//         </select>
//         <button className="contact-btn">Contact Us</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="TruthCheck Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/quick-check" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Quick Check
            </NavLink>
          </li>
          <li>
            <NavLink to="/verified-claims" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Verified Claims
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="language-dropdown">
          <span className="globe-icon">🌐</span>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">EN</option>
          </select>
        </div>
        <button className="contact-btn">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
