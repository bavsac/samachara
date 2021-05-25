import React, { useEffect, useState } from 'react';
import styles from '../styles/HeaderNav.module.css';
import * as api from '../utilities/api';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  const [topics, setTopics] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    api
      .getTopics()
      .then((topicsFromApi) => setTopics(topicsFromApi))
      .catch((error) => {
        setErr(error);
      });
  }, []);

  return (
    <nav className={styles.headerNav}>
      {topics.map((topic) => {
        return <Link>{topic.slug}</Link>;
      })}
    </nav>
  );
};

export default HeaderNav;
