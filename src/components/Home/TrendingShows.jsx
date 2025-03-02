import MovieCard from '../Cards/MovieCard';
import Tag from '../Common/Tag';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TrendingShows = ({ url, sectionName }) => {
  const [currentSelection, setCurrentSelection] = useState('Movies');
  const [navigationUrl, setNavigationUrl] = useState('/movies');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [queryParameter, setQueryParameter] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    switch (sectionName) {
      case 'Trending Shows':
        setQueryParameter('trending');
        break;

      case 'Popular Shows':
        setQueryParameter('popular');
        break;

      default:
        setQueryParameter('toprated');
        break;
    }
  }, [sectionName]);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      let baseURL = '';

      if (sectionName === 'Trending Shows') {
        baseURL = `${url}/${
          currentSelection === 'Movies' ? 'movie' : 'tv'
        }/week`;
      }

      if (sectionName === 'Popular Shows') {
        baseURL = `${url}/${
          currentSelection === 'Movies' ? 'movie' : 'tv'
        }/popular`;
      }

      if (sectionName === 'Top Rated') {
        baseURL = `${url}/${
          currentSelection === 'Movies' ? 'movie' : 'tv'
        }/top_rated`;
      }

      const URL = `${baseURL}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();

        setMovies(data.results.slice(0, 16));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentSelection]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleCurrentSelection = (name) => {
    setCurrentSelection(name);
    setMovies([]);
    setNavigationUrl(`/${name.toLowerCase()}`);
  };

  const handleClick = () => {
    navigate(navigationUrl);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[25px]">{sectionName}</h2>
        <Link
          to={`${
            currentSelection === 'Movies'
              ? `/movies?query=${queryParameter}`
              : `/shows?query=${queryParameter}`
          }`}
        >
          <Tag
            name="View More"
            handleClick={handleClick}
            navigationUrl={navigationUrl}
          />
        </Link>
      </div>
      <div className="flex gap-4 mb-4">
        <Tag
          name="Movies"
          setCurrentSelection={handleCurrentSelection}
          selected={currentSelection === 'Movies' && true}
        />
        <Tag
          name="Shows"
          setCurrentSelection={handleCurrentSelection}
          selected={currentSelection === 'Shows' && true}
        />
      </div>
      <div className="grid grid-cols-8 grid-rows-2 gap-y-8">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              showType={currentSelection}
            />
          ))}
      </div>
    </div>
  );
};

TrendingShows.propTypes = {
  url: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
};

export default TrendingShows;
