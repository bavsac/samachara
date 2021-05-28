//import { useContext } from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
//import { UserContext } from './contexts/User';

const Header = () => {
  //const { user } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.brand}>
        Samachara
      </Link>
    </header>
  );
};

export default Header;
