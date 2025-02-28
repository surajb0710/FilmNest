import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './CarousalGenre.module.css';
import Card from './CardSimple';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '97fa55c8dd12d8b5fe0dd2e2bbdcc716';

const CarousalGenre = ({ genre, genre_id }) => {
  // State to store the movie data
  const [movies, setMovies] = useState([]);
  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movie data
    const fetchMovies = async () => {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genre_id}&sort_by=popularity.desc&page=1`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();

        // Update state with fetched movie data
        setMovies(data.results);
        // console.log('movies data', data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genre_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.sliderContainer}>
      <h2>Top {genre} Shows</h2>
      <Slider {...settings} className="slider">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

CarousalGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  genre_id: PropTypes.number.isRequired,
};

export default CarousalGenre;
