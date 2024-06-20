import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ContactMessages.module.css';

const BASE_URL = 'http://127.0.0.1:8000'; // Base URL for Django server

const ContactMessagesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/api/contactmessages/`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  return (
    <div className={styles.contactMessagesPage}>
      <header className={styles.header}>
        <h1>Contact Messages</h1>
      </header>
      <main className={styles.mainContent}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} className={styles.message}>
              <h2>{message.subject}</h2>
              <p><strong>From:</strong> {message.first_name} {message.last_name} ({message.email})</p>
              <p><strong>Location:</strong> {message.location}</p>
              <p>{message.message}</p>
              <p><em>Received on {new Date(message.created_at).toLocaleString()}</em></p>
            </div>
          ))
        ) : (
          <p>No messages found.</p>
        )}
      </main>
    </div>
  );
};

export default ContactMessagesPage;
