import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CreateArticle.module.css';

const BASE_URL = 'http://127.0.0.1:8000'; // Base URL for Django server

const CreateArticlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    thumbnail: null,
    author: '',
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/api/api/categories/`)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      thumbnail: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('title', formData.title);
    formDataToSubmit.append('content', formData.content);
    formDataToSubmit.append('thumbnail', formData.thumbnail);
    formDataToSubmit.append('author', formData.author);
    formDataToSubmit.append('category', formData.category);

    console.log('FormData to submit:', formDataToSubmit);

    axios.post(`${BASE_URL}/api/api/blogposts/`, formDataToSubmit, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setFeedback('Article created successfully!');
      setFormData({
        title: '',
        content: '',
        thumbnail: null,
        author: '',
        category: ''
      });
    })
    .catch(error => {
      console.error('Error creating article:', error);
      setFeedback('Failed to create article. Please try again.');
    });
  };

  return (
    <div className={styles.createArticlePage}>
      <header className={styles.header}>
        <h1>Create New Article</h1>
      </header>
      <main className={styles.mainContent}>
        <form className={styles.createArticleForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              onChange={handleFileChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className={styles.submitBtn}>Create Article</button>
        </form>
        {feedback && <p className={styles.feedback}>{feedback}</p>}
      </main>
    </div>
  );
};

export default CreateArticlePage;
