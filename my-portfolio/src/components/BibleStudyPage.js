import React, { useState } from 'react';
import axios from 'axios';
import styles from './BibleStudy.module.css';
import bibleImage from '../assets/images/bible.jpg'; // Replace with the actual path to your image

const BASE_URL = 'http://127.0.0.1:8000';

const BibleStudyPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    location: '',
    email: '',
    phone: '' // Change this to 'phone' to match the backend
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
    axios.post(`${BASE_URL}/api/api/submit-bible-study-form/`, formData)
      .then(response => {
        setFeedback('Thank you for signing up! You will receive the joining links soon.');
        setFormData({
          first_name: '',
          last_name: '',
          location: '',
          email: '',
          phone: '' // Reset the 'phone' field as well
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setFeedback('Failed to sign up. Please try again later.');
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
          <p>Interested in joining us for a virtual bible study? Sign up and you will receive the joining links.</p>
        </section>
        <section className={styles.formSection}>
          <h2>Sign Up</h2>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
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
              <label htmlFor="phone">Whatsapp Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
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
