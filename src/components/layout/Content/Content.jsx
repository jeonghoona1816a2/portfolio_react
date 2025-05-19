// components/layout/Sidebar/Sidebar.jsx
import React from 'react';
import styles from './Content.module.scss';
import { Routes, Route } from 'react-router-dom';

import Home from '../../../pages/Home/Home';
import About from '../../../pages/About';
import Projects from '../../../pages/Projects';
import Articles from '../../../pages/Articles';
import Contact  from '../../../pages/Contact';

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.content_inner}>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/projects"element={<Projects />} />
          <Route path="/articles"element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}



