import LatestMovies from '../components/Home/LatestMovie';
import MovieCard from '../components/Cards/MovieCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionName = 'Popular Shows';

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      let allMovies = [];

      try {
        for (let i = 1; i <= currentPage * 2; i++) {
          const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${i}`;

          const response = await fetch(URL);

          if (!response.ok) {
            throw new Error('Failed to fetch movies');
          }
          const data = await response.json();

          const start = currentPage === 1 ? 0 : currentPage * 40 - 1;
          const end = start + 40;

          allMovies = allMovies.concat(data.results.slice(start, end));
        }

        setMovies(allMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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

  console.log('------Movies-----', movies);

  return (
    <div className="">
      <h1 className="text-[25px]">{sectionName}</h1>
      <div className="slider-container px-10">
        <h2>Test</h2>
        <Slider {...settings}>
          <div className="!grid grid-cols-8 gap-y-8">
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} showType={'Movies'} />
              ))}
          </div>
          <div className="!grid grid-cols-8 gap-y-8">
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} showType={'Movies'} />
              ))}
          </div>
          <div className="!grid grid-cols-8 gap-y-8">
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} showType={'Movies'} />
              ))}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Movies;
