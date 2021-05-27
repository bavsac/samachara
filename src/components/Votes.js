import { useState } from 'react';
import useCounter from './hooks/useCounter';
import styles from '../styles/Votes.module.css';
import * as api from '../utilities/api';
import Errors from './Errors';

const Votes = ({ article_id, comment_id, votes }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [err, setErr] = useState(null);

  const changeVotes = (NumberOfVotes) => {
    api
      .patchVotesById({ article_id, comment_id }, NumberOfVotes)
      .then((article) => {
        console.log(article.votes);
        setVotesChange((currVotes) => {
          return currVotes + NumberOfVotes;
        });
        console.log(article);
      })
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  };

  const isDisabled = votesChange !== 0;

  if (err !== null) {
    return <Errors err={err} />;
  }

  return (
    <div className={styles.votes}>
      <h4>Votes: {votesChange + votes}</h4>
      <button
        disabled={isDisabled}
        className={styles.votes__button}
        onClick={() => changeVotes(1)}
      >
        👍
      </button>
      <button
        disabled={isDisabled}
        className={styles.votes__button}
        onClick={() => changeVotes(-1)}
      >
        👎
      </button>
    </div>
  );
};

export default Votes;
