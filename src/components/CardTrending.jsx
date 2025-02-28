import styles from './CardTrending.module.css';
import PropTypes from 'prop-types';

const CardTrending = ({ movie }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Include the full image URL
          alt={`${movie.original_title} poster`}
          className={styles.cardImage}
        />
        <p className={styles.trendingTag}>Trending Today</p>
      </div>
      <h5 className={styles.cardTitle}>{movie.original_title}</h5>
      <div className={styles.cardDetails}>
        <div className={styles.cardInfo}>
          <p className={styles.cardYear}>{movie.release_date}</p>
        </div>
        <p className={styles.cardTag}>Movie</p>
      </div>
    </div>
  );
};

CardTrending.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string, // Poster path might be nullable, so not required
  }).isRequired,
};

export default CardTrending;
