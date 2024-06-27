import React from 'react';
import styles from './PodcastPage.module.css';
import backgroundImage from '../assets/images/background.jpg'; // Replace with the actual path to your background image

const PodcastPage = () => {
  return (
    <div className={styles.podcastPage} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <h1>COMING SOON ...</h1> 
        <p>STAY TUNED</p>
      </div>
    </div>
  );
};

export default PodcastPage;
