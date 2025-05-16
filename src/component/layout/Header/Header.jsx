// src/component/layout/Header/Header.jsx
import React from 'react';
import styles from './Header.module.scss';

// title을 props로 받아서 유연하게 사용하도록 했습니다.
const Header = ({ title }) => (
<div className={styles.header}>
  <h1 className={styles.title}>{title}title</h1>
</div>

);

export default Header;