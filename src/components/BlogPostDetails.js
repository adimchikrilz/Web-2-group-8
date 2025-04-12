import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BlogPostDetail.css';

const BlogPostDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { post } = state || {};

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) {
      setError('No blog post found. Please go back to the Blog page and select a post to view.');
    }
  }, [post]);

  if (error) {
    return (
      <div className="blog-post-detail">
        <div className="container">
          <h1>Blog Post Details</h1>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')} className="back-button">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-detail">
        <div className="container">
          <h1>Blog Post Details</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const handlePublish = () => {
    console.log('Publish clicked for post:', post.title);
    // Add logic to publish the post (e.g., API call)
  };

  const handleBackToList = () => {
    navigate('/blog');
  };

  return (
    <div className="blog-post-detail">
      <div className="container">
        <div className="post-details">
          <div className="post-image-container">
            {post.image ? (
              <img src={post.image} alt={post.title} className="post-image" />
            ) : (
              <div className="image-placeholder">No Image Available</div>
            )}
            {post.status === 'true' && (
              <div className="status-badge correct">CORRECT</div>
            )}
            {post.status === 'false' && (
              <div className="status-badge fake">FAKE NEWS</div>
            )}
          </div>
          <h1 className="post-details-title">{post.title}</h1>
          <p className="post-details-meta">
            Date Published: {post.date} | Author: {post.author}
          </p>
          <div className="action-buttons">
            <button className="publish-button" onClick={handlePublish}>
              Publish
            </button>
            <button className="search-another-button" onClick={handleBackToList}>
              Search another Blog Post
            </button>
          </div>
          <p className="post-verification">
            - The claim that {post.title.toLowerCase()} is {post.status === 'true' ? 'correct' : 'fake'}.
          </p>
          <p className="post-details-text">{post.summary}</p>
        </div>
      </div>
      <footer className="footer">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <p>Fighting Misinformation in Nigeria with Quick Check Tool © TruthCheck 2025</p>
      </footer>
    </div>
  );
};

export default BlogPostDetail;