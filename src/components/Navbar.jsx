import styles from './Navbar.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import NavDropdownItem from './NavDropdownItem';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar} id="top-anchor">
      <div className={styles.navbarLogo}>
        <Link to="/" className={styles.navbarLink}>
          FilmNest
        </Link>
      </div>
      <ul className={styles.linksNavbar}>
        {/* <NavDropdownItem className={styles.dropdownItem} /> */}
        {/* <li className="nav-item">
          <a href="/" className={styles.navbarLink}>
            Popular
          </a>
        </li> */}
        <li className="nav-item">
          <Link to="/movies" className={styles.navbarLink}>
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tvshows" className={styles.navbarLink}>
            TV Shows
          </Link>
        </li>
        {/* <li className="nav-item">
          <a href="/" className={styles.navbarLink}>
            Top Rated
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className={styles.navbarLink}>
            Upcoming
          </a>
        </li> */}
      </ul>
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
