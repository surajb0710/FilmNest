import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './TopDramaCarousal.module.css';
import Card from './Card';
import { useState, useEffect } from 'react';

function TopDramaCarousal() {
  // State to store the movie data
  const [movies, setMovies] = useState([]);
  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TMDB API key
  const API_KEY = '97fa55c8dd12d8b5fe0dd2e2bbdcc716'; // Replace with your actual API key

  useEffect(() => {
    // Fetch movie data
    const fetchMovies = async () => {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18&sort_by=popularity.desc&page=1`;

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
  }, []);

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
      <h2>Top Drama Shows</h2>
      <Slider {...settings} className="slider">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopDramaCarousal;
