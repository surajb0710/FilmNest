import { useState, useEffect } from 'react';

const useGenres = (showType) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenres = async (showType) => {
      const baseURL = `https://api.themoviedb.org/3/genre/${
        showType === 'Movies' ? 'movie' : 'tv'
      }/list`;

      const URL = `${baseURL}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch genres');

        const data = await response.json();

        setGenreList(data.genres || []);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres(showType);
  }, [showType]);

  return genreList;
};

export default useGenres;
