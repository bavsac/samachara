import React, { useEffect, useState, useContext } from 'react';
import * as api from '../utilities/api';
import styles from '../styles/Articles.module.css';
import { Link, useParams } from 'react-router-dom';
import Errors from './Errors';
import SortingAndOrdering from './SortingAndOrdering';
import useLoading from './hooks/useLoading';
import Loading from './Loading';
import { UserContext } from './contexts/User';
import EditNav from './EditNav';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  const [sortBy, setSortBy] = useState('created_at');
  const [orderIn, setOrderIn] = useState('desc');
  const { isLoading, setIsLoading } = useLoading();
  const { user } = useContext(UserContext);
  const params = useParams();

  useEffect(() => {
    api
      .getArticles(params.topic, { sortBy, orderIn })
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  }, [params.topic, sortBy, orderIn]);

  if (err !== null) {
    return <Errors err={err} />;
  }
  if (isLoading) return <Loading />;
  return (
    <ul className={styles.articles__list}>
      <SortingAndOrdering
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderIn={orderIn}
        setOrderIn={setOrderIn}
      />
      {articles.map((article) => {
        const isDisabled = user.username !== article.author;
        return (
          <li className={styles.article} key={article.article_id}>
            <Link
              to={`/articles/${article.article_id}`}
              className={styles.article__title}
            >
              {article.title}
            </Link>
            <p className={styles.article__author}>by {article.author}</p>
            <EditNav
              article_id={article.article_id}
              isDisabled={isDisabled}
              setArticles={setArticles}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
