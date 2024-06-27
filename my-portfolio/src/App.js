// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import ArticlesPage from './components/ArticlesPage';
// import ArticleDetails from './components/ArticleDetails'; // New import
// import ContactPage from './components/ContactPage';
// import ContactMessagesPage from './components/ContactMessagesPage';

// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/articles" element={<ArticlesPage />} />
//           <Route path="/articles/:id" element={<ArticleDetails />} /> {/* New route */}
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/contact-messages" element={<ContactMessagesPage />} />

//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ContactMessagesPage from './components/ContactMessagesPage';
import ArticlesPage from './components/ArticlesPage';
import ArticleDetails from './components/ArticleDetails';
import CreateArticlePage from './components/CreateArticlePage'; 
import BibleStudyPage from './components/BibleStudyPage';
import PodcastPage from './components/PodcastPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-messages" element={<ContactMessagesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/create-article" element={<CreateArticlePage />} />
          <Route path="/bible-study" element={<BibleStudyPage  />} />
          <Route path="/podcast" element={ <PodcastPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
