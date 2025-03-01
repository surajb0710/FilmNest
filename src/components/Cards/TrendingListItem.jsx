import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const TrendingListItem = ({ movie, showType, index }) => {
  const fullPosterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [lastEpisodeToAir, setLastEpisodeToAir] = useState({});
  const [currentMovie, setCurrentMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showType !== 'Shows' || !movie?.id) return;

    const fetchShowInfo = async () => {
      const URL = `https://api.themoviedb.org/3/tv/${movie.id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch TV show details');
        }

        const data = await response.json();

        const lastEpisode = data.last_episode_to_air
          ? data.last_episode_to_air
          : {
              episode_number: data.number_of_episodes,
              season_number: data.number_of_seasons,
            };

        setLastEpisodeToAir(lastEpisode);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShowInfo();
  }, [showType, movie?.id]);

  useEffect(() => {
    if (showType !== 'Movies' || !movie?.id) return;

    const fetchMovieInfo = async () => {
      const URL = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch TV show details');
        }

        const data = await response.json();

        setCurrentMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieInfo();
  }, [showType, movie?.id]);

  return (
    <div className="relative">
      <div className="absolute rounded-full bg-gray-800 w-[30px] h-[30px] flex justify-center items-center border border-orange-500 text-orange-500 top-1/2 translate-[-50%] left-[15px] font-bold">
        {index + 1}
      </div>
      {showType === 'Movies' ? (
        <div className="ml-[15px] pr-[15px] flex gap-4 bg-gray-800 items-center">
          <img src={fullPosterUrl} alt="" className="h-[75px] w-[50px]" />
          <div>
            <p className="text-base">{currentMovie.title}</p>
            <div className="flex gap-4">
              <p>Movie</p>
              <p>{currentMovie.runtime}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 ml-auto">
            {currentMovie.release_date && currentMovie.release_date.slice(0, 4)}
          </p>
        </div>
      ) : (
        <div className="ml-[15px] pr-[15px] flex gap-4 bg-gray-800 items-center">
          <img src={fullPosterUrl} alt="" className="h-[75px] w-[50px]" />
          <div>
            <p className="text-base">{movie.name}</p>
            <div className="flex gap-4">
              <p>TV</p>
              <p>{`EP ${lastEpisodeToAir.episode_number}`}</p>
              <p>{`SS ${lastEpisodeToAir.season_number}`}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 ml-auto">
            {movie.first_air_date.slice(0, 4)}
          </p>
        </div>
      )}
    </div>
  );
};

TrendingListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  showType: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TrendingListItem;
