import { useEffect, useState } from 'react';

const useMovieInfo = (showType, movieId) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [loading, setLoading] = useState(showType === 'Movies');
  const [error, setError] = useState(null);

  console.log(
    '--------showType, movieId-  Custom Hook-----',
    showType,
    movieId
  );

  useEffect(() => {
    console.log('----Log 01----');
    if (showType !== 'Movies' || !movieId) return;
    console.log('----Log 02----');
    const fetchMovieInfo = async () => {
      console.log('----Log 03----');
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
  }, [showType, movieId]);

  console.log('--------Current MOvie Custom Hook-------', currentMovie);

  return { currentMovie, loading, error };
};

export default useMovieInfo;
