import React, { useEffect, useState } from 'react';
import styles from '../styles/HeaderNav.module.css';
import * as api from '../utilities/api';
import { Link } from 'react-router-dom';
import Errors from './Errors';

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

  if (err !== null) {
    return <Errors err={err} />;
  }

  return (
    <nav className={styles.headerNav}>
      {topics.map((topic) => {
        return (
          <Link
            key={topic.slug}
            to={`/topics/${topic.slug}/articles`}
            className={styles.headerNav__links}
          >
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
