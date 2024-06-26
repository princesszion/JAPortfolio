import React, { useState } from 'react';
import styles from './BibleStudy.module.css';
import bibleImage from '../assets/images/bible.jpg'; // Replace with the actual path to your image

const BibleStudyPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    whatsapp: ''
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission goes here
    setFeedback('Thank you for signing up! You will receive the joining links soon.');
    setFormData({
      firstName: '',
      lastName: '',
      location: '',
      email: '',
      whatsapp: ''
    });
  };

  return (
    <div className={styles.bibleStudyPage}>
      <header className={styles.header}>
        <img src={bibleImage} alt="Bible" className={styles.headerImage} />
        <h1>Bible Study</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.infoSection}>
          <h2>Information</h2>
          <p>Interested in joining us for a virtual bible study? Sign up and you will receive the joining links.</p>
        </section>
        <section className={styles.formSection}>
          <h2>Sign Up</h2>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="location">Current Location – City/Country</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="whatsapp">Whatsapp Number</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>Sign Up</button>
          </form>
          {feedback && <p className={styles.feedback}>{feedback}</p>}
        </section>
      </main>
    </div>
  );
};

export default BibleStudyPage;
