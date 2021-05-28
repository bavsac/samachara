import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/CommentAdder.module.css';
import * as api from '../utilities/api';
import { useContext } from 'react';
import { UserContext } from './contexts/User';
import { TextField } from '@material-ui/core';

const CommentAdder = ({ setComments }) => {
  const [comment, setComment] = useState('');
  const { user } = useContext(UserContext);
  const params = useParams();
  const postData = {
    username: user.username,
    body: comment
  };

  return (
    <form
      className={styles.commentAdder}
      onSubmit={(event) => {
        event.preventDefault();
        api
          .postComment(params.article_id, postData)
          .then((postedComment) =>
            setComments((currComments) => [postedComment, ...currComments])
          );
        setComment('');
      }}
    >
      <TextField
        className={styles.commentAdder__input}
        id='outlined-basic'
        label='Add your comment here'
        variant='outlined'
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        required
      />{' '}
      <button className={styles.commentAdder__button}>Add Comment</button>
    </form>
  );
};

export default CommentAdder;
