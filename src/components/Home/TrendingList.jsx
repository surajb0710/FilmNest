import { useState, useEffect } from 'react';
import Tag from '../Common/Tag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingListItem from '../Cards/TrendingListItem';

const TrendingList = () => {
  const [currentSelection, setCurrentSelection] = useState('Movies');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const baseURL = `https://api.themoviedb.org/3/trending/${
        currentSelection === 'Movies' ? 'movie' : 'tv'
      }/week`;

      const URL = `${baseURL}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();

        setMovies(data.results.slice(0, 6));
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
  };

  return (
    <div className="w-[30%] h-full">
      <div className="flex gap-4 items-center py-2">
        <TrendingUpIcon fontSize="large" />
        <h2 className="mr-auto text-[25px] font-bold">TRENDING</h2>
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
      <div className="flex flex-col gap-4">
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <TrendingListItem
              key={movie.id}
              movie={movie}
              showType={currentSelection}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default TrendingList;
