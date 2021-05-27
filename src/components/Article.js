import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Article.module.css';
import * as api from '../utilities/api';
import Errors from './Errors';

import Votes from './Votes';

const Article = () => {
  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  const params = useParams();

  useEffect(() => {
    api
      .getArticleById(params.article_id)
      .then((article) => {
        setArticle(article);
      })
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  }, [params]);

  if (err !== null) {
    return <Errors err={err} />;
  }

  return (
    <div className={styles.article}>
      <h3 className={styles.article__title}>{article.title}</h3>
      <p className={styles.article__author}>{article.author}</p>
      <p className={styles.article__body}>{article.body}</p>
      <Votes article_id={article.article_id} votes={article.votes} />
    </div>
  );
};

export default Article;
