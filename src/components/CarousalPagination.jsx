import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './CardSimple';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '97fa55c8dd12d8b5fe0dd2e2bbdcc716';
const PAGE_NO = 1;

const carousalPagination = ({ genre, genre_id }) => {
  // State to store the movie data
  const [movies, setMovies] = useState([]);
  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  https: useEffect(() => {
    // Fetch movie data
    const fetchMovies = async () => {
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${PAGE_NO}`;

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
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: '#ddd',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '30px',
          color: 'blue',
          border: '1px blue solid',
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

carousalPagination.propTypes = {
  genre: PropTypes.string.isRequired,
  genre_id: PropTypes.number.isRequired,
};
export default carousalPagination;
