import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditBlogPost.css';

const EditBlogPost = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { post } = state || {};

  // Initialize formData as null
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  // Use useEffect to initialize formData when the post is available
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        category: post.category || '',
        date: post.date || '',
        author: post.author || '',
        summary: post.summary || '',
        status: post.status || 'true',
        image: post.image || '',
      });
    } else {
      setError('No blog post found. Please go back to the Blog page and select a post to edit.');
    }
  }, [post]);

  // Handle the case where post is not available
  if (error) {
    return (
      <div className="edit-blog-post">
        <div className="container">
          <h1>Edit Blog Post</h1>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')} className="back-button">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Show a loading state while formData is being initialized
  if (!formData) {
    return (
      <div className="edit-blog-post">
        <div className="container">
          <h1>Edit Blog Post</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated blog post:', formData);
    // Add logic to save the updated post (e.g., API call)
    navigate('/blog'); // Redirect back to the Blog page after saving
  };

  return (
    <div className="edit-blog-post">
      <div className="container">
        <h1 className="page-title">Edit Blog Post</h1>
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Health">Health</option>
              <option value="Politics">Politics</option>
              <option value="Security">Security</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="true">Correct</option>
              <option value="false">Fake News</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="save-button">
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate('/blog')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogPost;