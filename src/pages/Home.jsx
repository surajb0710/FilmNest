import Hero from '../components/Home/Hero';
import TrendingShows from '../components/Home/TrendingShows';
import TrendingList from '../components/Home/TrendingList';
import { useState, useEffect } from 'react';

function Home() {
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

        setMovies(data.results);
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
    <div className="px-10 flex flex-col gap-16">
      <div className="flex h-[620px] gap-5">
        <Hero movies={movies} />
        <TrendingList
          movies={movies}
          setCurrentSelection={setCurrentSelection}
          currentSelection={currentSelection}
          setMovies={setMovies}
          loading={loading}
          error={error}
        />
      </div>
      <TrendingShows
        url="https://api.themoviedb.org/3"
        sectionName="Popular Shows"
      />
      <TrendingShows
        url="https://api.themoviedb.org/3/trending"
        sectionName="Trending Shows"
      />
      <TrendingShows
        url="https://api.themoviedb.org/3"
        sectionName="Top Rated"
      />
    </div>
  );
}

export default Home;
