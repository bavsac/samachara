import React, { useContext, useEffect, useState } from 'react';
import * as api from '../utilities/api';
import Errors from './Errors';
import styles from '../styles/Users.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from './contexts/User';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    api
      .getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error.message);
        setErr(error);
      });
  }, []);

  if (err !== null) {
    return <Errors err={err} />;
  }

  return (
    <ul className={styles.users__list}>
      {users.map((user) => {
        return (
          <li className={styles.user} key={user.username}>
            <Link
              to={`/users/${user.username}/articles`}
              className={styles.user__details}
            >
              <img
                className={styles.user__image}
                src={user.avatar_url}
                alt={user.username}
              />
              <p className={styles.user__username}>{user.username}</p>
              <Link to={`/users/articles/${user.username}`}>
                Articles by {user.username}
              </Link>
              <button onClick={() => setUser(user)}>
                Select {user.username}
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
