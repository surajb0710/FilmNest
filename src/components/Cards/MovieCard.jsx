import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const MovieCard = ({ movie, showType }) => {
  const fullPosterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [numberOfSeasons, setNumberOfSeasons] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showType !== 'Shows' || !movie?.id) return;

    const fetchMovies = async () => {
      const URL = `https://api.themoviedb.org/3/tv/${movie.id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch TV show details');
        }

        const data = await response.json();

        setNumberOfSeasons(data.number_of_seasons);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [showType, movie?.id]);

  return (
    <div className="max-w-[170px]">
      <img
        src={fullPosterUrl}
        alt=""
        className="h-[260px] w-[170px] rounded-lg mb-4"
      />
      <h3 className="text-base font-semibold mb-2 text-wrap">{movie.title}</h3>
      <div className="flex gap-4">
        <p className="text-sm">{showType === 'Movies' ? 'Movie' : 'TV'}</p>
        {showType === 'Movies' ? (
          <p className="text-sm">{movie.release_date}</p>
        ) : (
          <p className="text-sm">SS{numberOfSeasons}</p>
        )}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showType: PropTypes.string.isRequired,
};

export default MovieCard;
