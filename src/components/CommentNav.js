import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Comment.module.css';
import * as api from '../utilities/api';

import Votes from './Votes';

const Comment = () => {
  const [comment, setComment] = useState({});

  const params = useParams();

  useEffect(() => {
    api.getCommentById(params.comment_id).then((comment) => {
      setComment(comment);
    });
  }, [params]);
  return (
    <div className={styles.comment}>
      <h3 className={styles.comment__title}>{comment.title}</h3>
      <p className={styles.comment__author}>{comment.author}</p>
      <p className={styles.comment__body}>{comment.body}</p>
      <Votes votes={comment.votes} />
    </div>
  );
};

export default Comment;
