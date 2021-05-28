import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './contexts/User';
import styles from '../styles/LoggedInHeader.module.css';

const LoggedInHeader = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Link to={`/users/${user.username}`} className={styles.loggedInUser}>
        <span className={styles.loggedInUser__name}>{user.username}</span>
        <img
          className={styles.loggedInUser__url}
          src={user.avatar_url}
          alt={user.username}
        />
      </Link>
    </div>
  );
};

export default LoggedInHeader;
