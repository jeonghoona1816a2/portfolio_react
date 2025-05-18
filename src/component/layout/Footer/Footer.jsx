// src/components/layout/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© {new Date().getFullYear()} JEON JEONGHOON. All rights reserved.</span>
        <div className={styles.links}>
          <a href="mailto:your.email@example.com">Email</a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
