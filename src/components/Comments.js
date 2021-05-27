import React, { useEffect, useState } from 'react';
import * as api from '../utilities/api';
import styles from '../styles/Comments.module.css';
import { Link, useParams } from 'react-router-dom';
import Errors from './Errors';
import Votes from './Votes';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const params = useParams();

  useEffect(() => {
    api
      .getCommentsByArticleId(params.article_id)
      .then((comments) => setComments(comments))
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  }, [params]);

  if (err !== null) {
    return <Errors err={err} />;
  }

  return (
    <ul className={styles.comments__list}>
      {comments.map((comment) => {
        return (
          <li className={styles.comment} key={comment.comment_id}>
            <h4 className={styles.comment__body}>{comment.body}</h4>
            <p className={styles.comment__author}>by {comment.author}</p>
            <Votes comment_id={comment.comment_id} votes={comment.votes} />
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
