import { useState, useEffect } from 'react';

const getShowInfo = (showId, showType) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    if (showType !== 'Shows' || !showId) return;

    const fetchTVShowInfo = async () => {
      const URL = `https://api.themoviedb.org/3/${
        showType === 'Shows' ? 'tv' : 'movie'
      }/${showId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch credits');

        const data = await response.json();

        setMovieCredits(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchTVShowInfo();
  }, [showId, showType]);

  return movieCredits;
};

export default getShowInfo;
