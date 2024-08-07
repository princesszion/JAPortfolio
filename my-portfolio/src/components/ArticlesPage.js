// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import styles from './Articles.module.css';

// const BASE_URL = 'http://127.0.0.1:8000/api/api/'; // Base URL for Django server

// const ArticlesPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(0); // Use ID 0 for "All Categories"
//   const [articles, setArticles] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
    

    
//     axios.get('http://212.129.37.106:8081/api/api/categories/')
//       .then(response => {
//         console.log('Categories fetched:', response.data); // Debugging log
//         setCategories([{ id: 0, name: 'All Categories' }, ...response.data]);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });

//     axios.get('http://212.129.37.106:8081/api/api/blogposts/')
//       .then(response => {
//         console.log('Articles fetched:', response.data); // Debugging log
//         setArticles(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching articles:', error);
//       });
//   }, []);

//   const handleCategoryClick = (category) => {
//     console.log('Category clicked:', category); // Debugging log
//     setSelectedCategory(category.id);
//   };

//   const filteredArticles = selectedCategory === 0
//     ? articles
//     : articles.filter(article => {
//         console.log('Article category:', article.category.id, 'Selected category:', selectedCategory); // Debugging log
//         return article.category.id === selectedCategory;
//       });

//   console.log('Filtered Articles:', filteredArticles); // Debugging log

//   return (
//     <div className={styles.articlesPage}>
//       <header className={styles.header}>
//         <h1>Articles</h1>
//         <div className={styles.headingLine}></div>
//         <div className={styles.line}>Always stop by here for articles within the thematic areas below.This is not an exhaustive list of thematic areas, as the Lord inspires us to share across other areas, we shall bring it forth!</div>
//         <nav className={styles.nav}>
//           {categories.map(category => (
//             <button
//               key={category.id}
//               className={category.id === selectedCategory ? styles.activeCategory : ''}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category.name}
//             </button>
//           ))}
//         </nav>
//       </header>
//       <main className={styles.mainContent}>
//         {filteredArticles.map(article => {
//           const imageUrl = article.thumbnail.startsWith('http') ? article.thumbnail : `${BASE_URL}${article.thumbnail}`;
//           const previewContent = article.content.split(" ").slice(0, 20).join(" ") + "..."; // Show only the first 20 words
//           return (
//             <div key={article.id} className={styles.article}>
//               <img src={imageUrl} alt={article.title} className={styles.thumbnail} />
//               <h2>{article.title}</h2>
//               <p>{previewContent}</p>
//               <Link to={`/articles/${article.id}`} className={styles.readMoreButton}>Read More</Link>
//               {/* <p className={styles.author}>By {article.author}</p> */}
//             </div>
//           );
//         })}
//       </main>
//     </div>
//   );
// };

// export default ArticlesPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Articles.module.css';

const BASE_URL = 'http://127.0.0.1:8000/api/api/'; // Base URL for Django server

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Use ID 0 for "All Categories"
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.jacksonandalice.com:8081/api/api/categories/')
      .then(response => {
        setCategories([{ id: 0, name: 'All Categories' }, ...response.data]);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });

    axios.get('https://api.jacksonandalice.com:8081/api/api/blogposts/')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
  };

  const filteredArticles = selectedCategory === 0
    ? articles
    : articles.filter(article => article.category.id === selectedCategory);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Articles</h1>
        <div className={styles.headingLine}></div>
        <div className={styles.line}>
          Always stop by here for articles within the thematic areas below. This is not an exhaustive list of thematic areas; as the Lord inspires us to share across other areas, we shall bring it forth!
        </div>
        <nav className={styles.nav}>
          {categories.map(category => (
            <button
              key={category.id}
              className={category.id === selectedCategory ? styles.activeCategory : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </header>
      <main className={styles.mainContent}>
        {filteredArticles.map(article => {
          const imageUrl = article.thumbnail.startsWith('http') ? article.thumbnail : `${BASE_URL}${article.thumbnail}`;
          const previewContent = article.content.split(" ").slice(0, 20).join(" ") + "...";
          return (
            <div key={article.id} className={styles.article}>
              <img src={imageUrl} alt={article.title} className={styles.thumbnail} />
              <h2>{article.title}</h2>
              <p>{previewContent}</p>
              <Link to={`/articles/${article.id}`} className={styles.readMoreButton}>Read More</Link>
            </div>
          );
        })}
      </main>
      
    </div>
  );
};

export default ArticlesPage;
