import { useState, useEffect } from 'react';

const getMovieCredits = (showId, showType) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    if (showType !== 'Movies' || !showId) return;

    const fetchMovieCredits = async () => {
      const URL = `https://api.themoviedb.org/3/movie/${showId}/credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch credits');

        const data = await response.json();

        setMovieCredits(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchMovieCredits();
  }, [showId, showType]);

  useEffect(() => {
    if (showType !== 'Shows' || !showId) return;

    const fetchMovieCredits = async () => {
      const URL = `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch credits');

        const data = await response.json();

        setMovieCredits(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchMovieCredits();
  }, [showId, showType]);

  return movieCredits;
};

export default getMovieCredits;
