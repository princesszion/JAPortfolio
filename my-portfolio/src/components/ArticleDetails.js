import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ArticleDetails.module.css';

const BASE_URL = 'http://127.0.0.1:8000';

const ArticleDetails = () => {
  const { id } = useParams();
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

  const paragraphs = article.content.split('\n').map((para, index) => (
    <p key={index} className={styles.content}>{para}</p>
  ));

  return (
    <div className={styles.articleDetails}>
      <h1>{article.title}</h1>
      <img src={`${BASE_URL}${article.thumbnail}`} alt={article.title} className={styles.thumbnail} />
      {paragraphs}
      <p className={styles.author}>By {article.author}</p>
    </div>
  );
};

export default ArticleDetails;
