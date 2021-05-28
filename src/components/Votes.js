import { useState } from 'react';
import { UserContext } from './contexts/User';
import styles from '../styles/Votes.module.css';
import * as api from '../utilities/api';
import Errors from './Errors';
import { useContext } from 'react';

const Votes = ({ article_id, comment_id, votes }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [err, setErr] = useState(null);
  const { user } = useContext(UserContext);
  const [author, setAuthor] = useState('');

  const changeVotes = (NumberOfVotes) => {
    api
      .patchVotesById({ article_id, comment_id }, NumberOfVotes)
      .then((articleOrComment) => {
        setAuthor(articleOrComment.author);
        setVotesChange((currVotes) => {
          return currVotes + NumberOfVotes;
        });
      })
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  };
  console.log(user.username, author);
  const isDisabled = votesChange !== 0 || user.username === author;

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
