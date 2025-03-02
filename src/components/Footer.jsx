import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className={styles.footerNavbar}>
      <div className={styles.footerLogo}>FilmNest</div>
      <div>
        <Link to="/terms" className={styles.footerLink}>
          Terms of Service
        </Link>
        <Link to="/terms" className={styles.footerLink}>
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
