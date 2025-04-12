// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { LanguageContext } from '../contexts/LanguageContext';
// import translations from '../utils/translations';
// import './Blog.css';

// // Import images from src/assets
// import image1 from '../assets/image1.jpeg';
// import image2 from '../assets/image2.jpeg';
// import image3 from '../assets/image 3.jpeg';
// import image4 from '../assets/image 4.jpeg';
// import image5 from '../assets/image 5.jpeg';
// import image6 from '../assets/image 6.jpeg';
// import image7 from '../assets/image 7.jpeg';
// import image8 from '../assets/image 8.jpeg';

// const Blog = () => {
//   const { language } = useContext(LanguageContext);
//   const t = translations[language];
//   const [activeCategory, setActiveCategory] = useState('Health');
//   const navigate = useNavigate();

//   const blogPosts = [
//     {
//       category: 'Health',
//       title: 'Nigeria Struggles to Rein in a Widespread Meningitis Outbreak That Has Killed at Least 150',
//       date: 'April 9, 2025',
//       author: 'Associated Press',
//       summary:
//         'Nigerian health authorities are struggling to contain a rapidly spreading meningitis outbreak that has so far killed 151 people across the nation, mostly in remote northern regions with children affected...',
//       status: 'true',
//       image: image1,
//     },
//     {
//       category: 'Health',
//       title: 'Health Experts Say Only 40% of LGAs in Nigeria Have Qualified Medical Officers',
//       date: 'April 9, 2025',
//       author: 'Marian Ileyemi',
//       summary:
//         'Public health experts have raised concerns over Nigeria’s primary healthcare system, revealing that only about 40 percent of local government areas (LGAs) have medically qualified Medical Officers...',
//       status: 'true',
//       image: image2,
//     },
//     {
//       category: 'Health',
//       title: 'Nigeria Loses Billions as 16,000 Doctors Exit in Seven Years—Minister',
//       date: 'April 9, 2025',
//       author: 'Marian Ileyemi',
//       summary:
//         'Nigeria has lost over 16,000 doctors in the last five to seven years, resulting in significant financial losses, according to the Coordinating Minister of Health and Social Welfare, Muhammad Pate. The minister...',
//       status: 'true',
//       image: image3,
//     },
//     {
//       category: 'Health',
//       title: 'Nigerian Govt Allocates N700bn to Tackle HIV, Tuberculosis, and Malaria',
//       date: 'March 18, 2025',
//       author: 'Nike Adebowale-Tambe',
//       summary:
//         'As part of efforts to strengthen domestic health funding, the Nigerian government has earmarked N700 billion to combat HIV/AIDS, Tuberculosis, and Malaria, while also enhancing immunization efforts...',
//       status: 'false',
//       image: image4,
//     },
//     {
//       category: 'Politics',
//       title: 'Speak Up, Nigeria is Collapsing, Don’t Fear Anybody – Peter Obi',
//       date: 'April 9, 2025',
//       author: 'Nwafor Sunday',
//       summary:
//         'Mr. Peter Obi, the Presidential Candidate of the Labour Party (LP) in the 2023 general election, has urged party members not to fear anyone, emphasizing that Nigeria is in a state of collapse and urgent...',
//       status: 'true',
//       image: image5,
//     },
//     {
//       category: 'Politics',
//       title: 'Nigeria Looking at Opportunities from Trump’s Tariffs – Finance Minister Edun',
//       date: 'April 8, 2025',
//       author: 'Pache Chiedozie',
//       summary:
//         'Minister of Finance, Wale Edun, has stated that the Economic Management Team is exploring how Nigeria can benefit from the recent tariffs imposed by U.S. President Donald Trump on several co...',
//       status: 'true',
//       image: image6,
//     },
//     {
//       category: 'Politics',
//       title: 'Police Commands Brace for Fresh Nationwide Protests',
//       date: 'April 7, 2025',
//       author: 'Elliot Ovadje',
//       summary:
//         'Police commands across Nigeria are preparing for potential nationwide protests. Authorities are on high alert to manage and respond to any demonstrations that may arise, ensuring public safet...',
//       status: 'true',
//       image: image7,
//     },
//     {
//       category: 'Politics',
//       title: 'APC Governors Beg Buhari to Halt Mass Defection to SDP, But He Refuses to Intervene',
//       date: 'April 8, 2025',
//       author: 'First News',
//       summary:
//         'Governors from the All Progressives Congress (APC) have reportedly appealed to President Muhammadu Buhari to intervene in the mass defection of party members to the Social Democratic Party (SDP). H...',
//       status: 'false',
//       image: image8,
//     },
//     {
//       category: 'Security',
//       title: 'Boko Haram Intensifies Attacks in Borno State, Reclaiming Territory',
//       date: 'April 9, 2025',
//       author: 'Reuters',
//       summary:
//         'Boko Haram has escalated its attacks and kidnappings in Borno State, Nigeria, with limited resistance from security forces, according to Governor Babagana Zulum. The militant group, along with its offsho...',
//       status: 'false',
//       image: image8,
//     },
//     {
//       category: 'Security',
//       title: 'Gunmen Kill at Least 52 People in Plateau State',
//       date: 'April 7, 2025',
//       author: 'Reuters',
//       summary:
//         'Gunmen have killed at least 52 people and displaced nearly 2,000 others over several days of attacks in Nigeria’s northern Plateau State, an area with a history of violence between farmers and cattle...',
//       status: 'true',
//       image: image1,
//     },
//     {
//       category: 'Security',
//       title: 'Nigeria to Launch E-Visa System by May 2025 to Boost Border Security',
//       date: 'April 9, 2025',
//       author: 'Oluchi Okorafor',
//       summary:
//         'The Nigerian government has announced plans to launch an electronic visa (e-visa) system by May 2025 to enhance border security and streamline travel processes. The e-visa system aims to f...',
//       status: 'true',
//       image: image1,
//     },
//   ];

//   const filteredPosts = blogPosts.filter(
//     (post) => activeCategory === 'All' || post.category === activeCategory
//   );

//   const handleEditClick = (post) => {
//     if (post && post.title) {
//       navigate(`/edit-blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, { state: { post } });
//     } else {
//       console.error('Post data is incomplete:', post);
//     }
//   };

//   const handleViewMore = (post) => {
//     if (post && post.title) {
//       navigate(`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, { state: { post } });
//     } else {
//       console.error('Post data is incomplete:', post);
//     }
//   };

//   return (
//     <div className="blog">
//       <div className="container">
//         <h1 className="page-title">{t.blogTitle}</h1>
//         <div className="category-tabs">
//           {['Health', 'Politics', 'Security'].map((category) => (
//             <button
//               key={category}
//               className={`tab ${activeCategory === category ? 'active' : ''}`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="posts-list">
//           {filteredPosts.length > 0 ? (
//             filteredPosts.map((post, index) => (
//               <div key={index} className="post-card">
//                 <div className="post-image-container">
//                   {post.image ? (
//                     <img src={post.image} alt={post.title} className="post-image" />
//                   ) : (
//                     <div className="image-placeholder">No Image Available</div>
//                   )}
//                   <div className={`status-badge ${post.status === 'true' ? 'correct' : 'fake'}`}>
//                     {post.status === 'true' ? 'CORRECT' : 'FAKE NEWS'}
//                   </div>
//                 </div>
//                 <div className="post-content">
//                   <span className={`category-label ${post.category.toLowerCase()}`}>
//                     {post.category}
//                   </span>
//                   <h2 className="post-title">{post.title}</h2>
//                   <p className="post-date">Date: {post.date}</p>
//                   <p className="post-author">Author: {post.author}</p>
//                   <p className="post-summary">{post.summary}</p>
//                   <div className="post-actions">
//                     <button className="view-more-button" onClick={() => handleViewMore(post)}>
//                       View more
//                     </button>
//                     <button className="edit-button" onClick={() => handleEditClick(post)}>
//                       Ask to edit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No posts found in this category.</p>
//           )}
//         </div>
//       </div>
//       <footer className="footer">
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//         <p>Fighting Misinformation in Nigeria with Quick Check Tool © TruthCheck 2025</p>
//       </footer>
//     </div>
//   );
// };

// export default Blog;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import translations from '../utils/translations';
import './Blog.css';

// Import images from src/assets
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image 3.jpeg';
import image4 from '../assets/image 4.jpeg';
import image5 from '../assets/image 5.jpeg';
import image6 from '../assets/image 6.jpeg';
import image7 from '../assets/image 7.jpeg';
import image8 from '../assets/image 8.jpeg';

const Blog = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('health'); // Use category keys
  const navigate = useNavigate();

  const blogPosts = [
    {
      category: 'health',
      title: 'Nigeria Struggles to Rein in a Widespread Meningitis Outbreak That Has Killed at Least 150',
      date: 'April 9, 2025',
      author: 'Associated Press',
      summary:
        'Nigerian health authorities are struggling to contain a rapidly spreading meningitis outbreak that has so far killed 151 people across the nation, mostly in remote northern regions with children affected...',
      status: 'true',
      image: image1,
    },
    {
      category: 'health',
      title: 'Health Experts Say Only 40% of LGAs in Nigeria Have Qualified Medical Officers',
      date: 'April 9, 2025',
      author: 'Marian Ileyemi',
      summary:
        'Public health experts have raised concerns over Nigeria’s primary healthcare system, revealing that only about 40 percent of local government areas (LGAs) have medically qualified Medical Officers...',
      status: 'true',
      image: image2,
    },
    {
      category: 'health',
      title: 'Nigeria Loses Billions as 16,000 Doctors Exit in Seven Years—Minister',
      date: 'April 9, 2025',
      author: 'Marian Ileyemi',
      summary:
        'Nigeria has lost over 16,000 doctors in the last five to seven years, resulting in significant financial losses, according to the Coordinating Minister of Health and Social Welfare, Muhammad Pate. The minister...',
      status: 'true',
      image: image3,
    },
    {
      category: 'health',
      title: 'Nigerian Govt Allocates N700bn to Tackle HIV, Tuberculosis, and Malaria',
      date: 'March 18, 2025',
      author: 'Nike Adebowale-Tambe',
      summary:
        'As part of efforts to strengthen domestic health funding, the Nigerian government has earmarked N700 billion to combat HIV/AIDS, Tuberculosis, and Malaria, while also enhancing immunization efforts...',
      status: 'false',
      image: image4,
    },
    {
      category: 'politics',
      title: 'Speak Up, Nigeria is Collapsing, Don’t Fear Anybody – Peter Obi',
      date: 'April 9, 2025',
      author: 'Nwafor Sunday',
      summary:
        'Mr. Peter Obi, the Presidential Candidate of the Labour Party (LP) in the 2023 general election, has urged party members not to fear anyone, emphasizing that Nigeria is in a state of collapse and urgent...',
      status: 'true',
      image: image5,
    },
    {
      category: 'politics',
      title: 'Nigeria Looking at Opportunities from Trump’s Tariffs – Finance Minister Edun',
      date: 'April 8, 2025',
      author: 'Pache Chiedozie',
      summary:
        'Minister of Finance, Wale Edun, has stated that the Economic Management Team is exploring how Nigeria can benefit from the recent tariffs imposed by U.S. President Donald Trump on several co...',
      status: 'true',
      image: image6,
    },
    {
      category: 'politics',
      title: 'Police Commands Brace for Fresh Nationwide Protests',
      date: 'April 7, 2025',
      author: 'Elliot Ovadje',
      summary:
        'Police commands across Nigeria are preparing for potential nationwide protests. Authorities are on high alert to manage and respond to any demonstrations that may arise, ensuring public safet...',
      status: 'true',
      image: image7,
    },
    {
      category: 'politics',
      title: 'APC Governors Beg Buhari to Halt Mass Defection to SDP, But He Refuses to Intervene',
      date: 'April 8, 2025',
      author: 'First News',
      summary:
        'Governors from the All Progressives Congress (APC) have reportedly appealed to President Muhammadu Buhari to intervene in the mass defection of party members to the Social Democratic Party (SDP). H...',
      status: 'false',
      image: image8,
    },
    {
      category: 'security',
      title: 'Boko Haram Intensifies Attacks in Borno State, Reclaiming Territory',
      date: 'April 9, 2025',
      author: 'Reuters',
      summary:
        'Boko Haram has escalated its attacks and kidnappings in Borno State, Nigeria, with limited resistance from security forces, according to Governor Babagana Zulum. The militant group, along with its offsho...',
      status: 'false',
      image: image8,
    },
    {
      category: 'security',
      title: 'Gunmen Kill at Least 52 People in Plateau State',
      date: 'April 7, 2025',
      author: 'Reuters',
      summary:
        'Gunmen have killed at least 52 people and displaced nearly 2,000 others over several days of attacks in Nigeria’s northern Plateau State, an area with a history of violence between farmers and cattle...',
      status: 'true',
      image: image1,
    },
    {
      category: 'security',
      title: 'Nigeria to Launch E-Visa System by May 2025 to Boost Border Security',
      date: 'April 9, 2025',
      author: 'Oluchi Okorafor',
      summary:
        'The Nigerian government has announced plans to launch an electronic visa (e-visa) system by May 2025 to enhance border security and streamline travel processes. The e-visa system aims to f...',
      status: 'true',
      image: image1,
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === 'all' || post.category === activeCategory
  );

  const handleEditClick = (post) => {
    if (post && post.title) {
      navigate(`/edit-blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, { state: { post } });
    } else {
      console.error('Post data is incomplete:', post);
    }
  };

  const handleViewMore = (post) => {
    if (post && post.title) {
      navigate(`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, { state: { post } });
    } else {
      console.error('Post data is incomplete:', post);
    }
  };

  const getCategoryLabel = (categoryKey) => {
    switch (categoryKey) {
      case 'health':
        return t.categoryHealth;
      case 'politics':
        return t.categoryPolitics;
      case 'security':
        return t.categorySecurity;
      default:
        return categoryKey;
    }
  };

  return (
    <div className="blog">
      <div className="container">
        <h1 className="page-title">{t.blogTitle}</h1>
        <div className="category-tabs">
          {[
            { key: 'health', label: t.categoryHealth },
            { key: 'politics', label: t.categoryPolitics },
            { key: 'security', label: t.categorySecurity },
          ].map((category) => (
            <button
              key={category.key}
              className={`tab ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="posts-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div key={index} className="post-card">
                <div className="post-image-container">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="post-image" />
                  ) : (
                    <div className="image-placeholder">{t.noImageAvailable}</div>
                  )}
                  <div className={`status-badge ${post.status === 'true' ? 'correct' : 'fake'}`}>
                    {post.status === 'true' ? t.statusCorrect : t.statusFake}
                  </div>
                </div>
                <div className="post-content">
                  <span className={`category-label ${post.category}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-date">{t.date} {post.date}</p>
                  <p className="post-author">{t.author} {post.author}</p>
                  <p className="post-summary">{post.summary}</p>
                  <div className="post-actions">
                    <button className="view-more-button" onClick={() => handleViewMore(post)}>
                      {t.viewMoreButton}
                    </button>
                    <button className="edit-button" onClick={() => handleEditClick(post)}>
                      {t.askToEditButton}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>{t.noPostsFound}</p>
          )}
        </div>
      </div>
      <footer className="footer">
        <a href="/about">{t.aboutLink}</a>
        <a href="/contact">{t.contactLink}</a>
        <p>{t.footerText}</p>
      </footer>
    </div>
  );
};

export default Blog;