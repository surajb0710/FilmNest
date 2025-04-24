import { useState, useEffect } from 'react';

const getReviews = (showId, showType) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    if (showType !== 'Movies' || !showId) return;

    const fetchMovieReviews = async () => {
      const URL = `https://api.themoviedb.org/3/movie/${showId}/reviews?api_key=${
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

    fetchMovieReviews();
  }, [showId, showType]);

  useEffect(() => {
    if (showType !== 'Shows' || !showId) return;

    const fetchTVShowReviews = async () => {
      const URL = `https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${
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

    fetchTVShowReviews();
  }, [showId, showType]);

  return movieCredits;
};

export default getReviews;
