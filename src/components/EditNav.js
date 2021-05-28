import React from 'react';
import styles from '../styles/CommentNav.module.css';
import * as api from '../utilities/api';
import { useHistory } from 'react-router';

const EditNav = ({
  comment_id,
  isDisabled,
  setComments,
  article_id,
  setArticles
}) => {
  const history = useHistory();

  return (
    <>
      <label className={styles.comment__lable} htmlFor='action'>
        Would you like to...
      </label>
      <button
        disabled={isDisabled}
        className={styles.comment__option}
        value='DELETE'
        onClick={() => {
          api
            .deleteById({ comment_id, article_id })
            .then((articleOrComment) => {
              if (comment_id) {
                setComments((currComments) => {
                  return currComments.filter(
                    (comment) =>
                      comment.comment_id !== articleOrComment.comment_id
                  );
                });
              } else {
                setArticles((currArticles) => {
                  return currArticles.filter(
                    (article) =>
                      article.article_id !== articleOrComment.article_id
                  );
                });
              }
            });
        }}
      >
        Delete this
      </button>

      {/* if there is more time implement this
      <label>or</label>
      <button
        disabled={isDisabled}
        className={styles.comment__option}
        value='PATCH'
        onClick={(event) => {
          history.push(`/comments/${comment_id}`);
        }}
      >
        Edit
      </button> */}
    </>
  );
};

export default EditNav;
