import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ArticleDetails.module.css';

const BASE_URL = 'http://127.0.0.1:8000'; // Base URL for Django server

const ArticleDetails = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/api/blogposts/${id}/`)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.articleDetails}>
      <h1>{article.title}</h1>
      <img src={`${BASE_URL}${article.thumbnail}`} alt={article.title} className={styles.thumbnail} />
      <p className={styles.content}>{article.content}</p>
      <p className={styles.author}>By {article.author}</p>
    </div>
  );
};

export default ArticleDetails;
