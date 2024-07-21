import React, { useState } from 'react';
import axios from 'axios';
import styles from './Contact.module.css';

const BASE_URL = 'http://127.0.0.1:8000'; // Base URL for Django server

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    subject: '',
    message: ''
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
    const dataToSend = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      location: formData.location,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    axios.post(`${BASE_URL}/api/api/submit-contact-form/`, dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Form Data Submitted:', response.data);
        setFeedback('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          location: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error.response.data);
        setFeedback('Failed to send message. Please try again.');
      });
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.contactInfo}>
          <div>
          <p>Be at liberty to reach out to us! Be it a prayer request, a question, or a comment, we are excited to hear from you</p>
          </div>
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <p>40, Gatehills Estate</p>
            <p>Kigali, Rwanda</p>
          </div>
          <div>
            <i className="fas fa-phone"></i>
            <p>+250 780 5241 570</p>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <p>hello@jacksonandalice.com</p>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
        {feedback && <p className={styles.feedback}>{feedback}</p>}
      </main>
    </div>
  );
};

export default ContactPage;
