import LatestMovies from '../components/Home/LatestMovie';
import MovieCard from '../components/Cards/MovieCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionName = 'Popular Shows';

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      let moviesList = [];

      try {
        for (let i = 1; i <= 5; i++) {
          let allMovies = []; // Stores 40 movies for custom page `i`

          for (let j = i * 2 - 1; j <= i * 2; j++) {
            const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
              import.meta.env.VITE_TMDB_API_KEY
            }&page=${j}`;

            const response = await fetch(URL);

            if (!response.ok) {
              throw new Error('Failed to fetch movies');
            }
            const data = await response.json();

            allMovies = allMovies.concat(data.results); // Collecting 40 movies (20 per API call)
          }

          moviesList.push({ page: i, allMovies: allMovies }); // Save to custom page list
        }

        setMovieList(moviesList);
        setMovies(
          moviesList.find((m) => m.page === currentPage)?.allMovies || []
        );
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

  console.log('----movieList---', movieList);

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
        <Slider {...settings}>
          {movieList.map((movies) => (
            <div className="!grid grid-cols-8 gap-y-8" key={movies.page}>
              {movies.allMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} showType={'Movies'} />
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Movies;

// Every array in setMovieList should have 40 items only, So every time allMovies is being pushed to setMovieList, it needs to have 40 items

// Since, TMDB gives us only 20 items per page, we are pulling 40 items and creating our custom movie list array which will have page numbers and 40 movie items.
// i is the custom page number and j is the actual page number that is being passed 2 times into the url
// Now, the allMovies should have 40 movie items from actual pages 1 and 2 which will be passed to custom page number 1
// Similarly, the allMovies will always have 40 movie items from actual pages which will be passed to custom pages
// Can you modify the logic to accomodate the above changes
