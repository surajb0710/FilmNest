import { useEffect, useState } from 'react';

const useTvShowInfo = (showType, movieId) => {
  const [lastEpisodeToAir, setLastEpisodeToAir] = useState(null);
  const [loading, setLoading] = useState(showType === 'Shows');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showType !== 'Shows' || !movieId) return;

    const fetchShowInfo = async () => {
      const URL = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch TV show details');
        }

        const data = await response.json();

        const lastEpisode = data.last_episode_to_air || {
          episode_number: data.number_of_episodes,
          season_number: data.number_of_seasons,
        };

        setLastEpisodeToAir(lastEpisode);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShowInfo();
  }, [showType, movieId]);

  return { lastEpisodeToAir, loading, error };
};

export default useTvShowInfo;
