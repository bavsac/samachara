import React from 'react';
import styles from '../styles/Errors.module.css';

const Errors = ({ err }) => {
  console.log(err.message);
  return (
    <div className={styles.errorMessage}>
      Something Went Wrong. Please try again.
    </div>
  );
};

export default Errors;
