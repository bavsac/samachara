import React, { useEffect, useState } from 'react';
import * as api from '../utilities/api';
import styles from '../styles/Articles.module.css';
import { Link, useParams } from 'react-router-dom';
import Errors from './Errors';
import SortingAndOrdering from './SortingAndOrdering';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [orderIn, setOrderIn] = useState('desc');
  const params = useParams();

  useEffect(() => {
    api
      .getArticles(params.topic, { sortBy, orderIn })
      .then((articles) => setArticles(articles))
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  }, [params, sortBy, orderIn]);

  if (err !== null) {
    return <Errors err={err} />;
  }

  return (
    <ul className={styles.articles__list}>
      <SortingAndOrdering
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderIn={orderIn}
        setOrderIn={setOrderIn}
      />
      {articles.map((article) => {
        return (
          <li className={styles.article} key={article.article_id}>
            <Link
              to={`/articles/${article.article_id}`}
              className={styles.article__title}
            >
              {article.title}
            </Link>
            <p className={styles.article__author}>by {article.author}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
