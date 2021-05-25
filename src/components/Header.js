import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Samachara</h1>
    </header>
  );
};

export default Header;
