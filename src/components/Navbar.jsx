import styles from './Navbar.module.css';
import { IoSearchSharp } from 'react-icons/io5';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>FilmNest</div>
      <div>
        <a href="/" className={styles.navbarLink}>
          New
        </a>
        <a href="/" className={styles.navbarLink}>
          Popular
        </a>
        <a href="/" className={styles.navbarLink}>
          Movies
        </a>
        <a href="/" className={styles.navbarLink}>
          TV Shows
        </a>
        <a href="/" className={styles.navbarLink}>
          Top Rated
        </a>
        <a href="/" className={styles.navbarLink}>
          Upcoming
        </a>
      </div>
      <div className={styles.navbarSearchContainer}>
        <IoSearchSharp className={styles.searchIcon} />
        <input
          type="text"
          className={styles.navbarSearch}
          placeholder="Search for movies or TV shows"
        />
      </div>
      <button className={styles.navbarSigninBtn}>Sign In</button>
    </nav>
  );
}

export default Navbar;
