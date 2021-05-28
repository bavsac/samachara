import React, { useContext, useEffect, useState } from 'react';
import * as api from '../utilities/api';
import styles from '../styles/Comments.module.css';
import { useParams } from 'react-router-dom';
import Errors from './Errors';
import Votes from './Votes';
import CommentAdder from './CommentAdder';
import useLoading from './hooks/useLoading';
import Loading from './Loading';
import EditNav from './EditNav';
import { UserContext } from './contexts/User';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const { isLoading, setIsLoading } = useLoading();
  const { user } = useContext(UserContext);
  const params = useParams();

  useEffect(() => {
    api
      .getCommentsByArticleId(params.article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  }, [params.article_id]);

  if (err !== null) {
    return <Errors err={err} />;
  }
  if (isLoading) return <Loading />;
  return (
    <>
      <CommentAdder setComments={setComments} />
      <ul className={styles.comments__list}>
        {comments.map((comment) => {
          const isDisabled = user.username !== comment.author;
          return (
            <li className={styles.comment} key={comment.comment_id}>
              <h4 className={styles.comment__body}>{comment.body}</h4>
              <p className={styles.comment__author}>by {comment.author}</p>
              <EditNav
                comment_id={comment.comment_id}
                isDisabled={isDisabled}
                setComments={setComments}
              />
              <Votes
                comment_id={comment.comment_id}
                author={comment.author}
                votes={comment.votes}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
