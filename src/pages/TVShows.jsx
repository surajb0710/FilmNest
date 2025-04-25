import MovieCard from '../components/Cards/MovieCard';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { uniqueArrayItems } from '../utils/utils';

const TVShows = () => {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParameter = queryParams.get('query') || 'popular';
  const [sectionName, setSectionName] = useState('');

  const fetchMovies = async (pageNumber) => {
    try {
      let URL1 = '';
      let URL2 = '';

      switch (queryParameter) {
        case 'popular':
          URL1 = `https://api.themoviedb.org/3/tv/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${pageNumber}`;

          URL2 = `https://api.themoviedb.org/3/tv/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${pageNumber + 1}`;

          setSectionName('Popular Shows');
          break;

        case 'trending':
          URL1 = `https://api.themoviedb.org/3/trending/tv/week?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${pageNumber}`;

          URL2 = `https://api.themoviedb.org/3/trending/tv/week?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${pageNumber + 1}`;

          setSectionName('Trending Shows');
          break;

        default:
          URL1 = `https://api.themoviedb.org/3/tv/top_rated?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${pageNumber}`;

          URL2 = `https://api.themoviedb.org/3/tv/top_rated?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=${pageNumber + 1}`;

          setSectionName('Top Rated');
          break;
      }

      const [res1, res2] = await Promise.all([fetch(URL1), fetch(URL2)]);

      if (!res1.ok || !res2.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data1 = await res1.json();
      const data2 = await res2.json();

      return {
        page: pageNumber,
        allMovies: [...data1.results, ...data2.results],
      };
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  useEffect(() => {
    const loadInitialMovies = async () => {
      setLoading(true);
      let initialMoviesList = [];
      for (let i = firstPage; i <= lastPage; i++) {
        const newPageData = await fetchMovies(i);
        if (newPageData) initialMoviesList.push(newPageData);
      }
      setMovieList(initialMoviesList);
      setMovies(initialMoviesList[0]?.allMovies || []);
      setLoading(false);
    };

    loadInitialMovies();
  }, []);

  const handleNext = async () => {
    const nextPage = lastPage + 1;
    const newPageData = await fetchMovies(nextPage);
    if (!newPageData) return;

    const updatedMovieList = [...movieList.slice(1), newPageData];
    setMovieList(updatedMovieList);
    setMovies(newPageData.allMovies);
    setFirstPage((prev) => prev + 1);
    setLastPage(nextPage);
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = async () => {
    if (firstPage === 1) return;

    const prevPage = firstPage - 1;
    const newPageData = await fetchMovies(prevPage);
    if (!newPageData) return;

    const updatedMovieList = [newPageData, ...movieList.slice(0, -1)];
    setMovieList(updatedMovieList);
    setMovies(newPageData.allMovies);
    setFirstPage(prevPage);
    setLastPage((prev) => prev - 1);
    setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    const pageData = movieList.find((movie) => movie.page === pageNumber);
    if (pageData) {
      setMovies(pageData.allMovies);
      setCurrentPage(pageNumber);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold text-center my-10">
        {sectionName}
      </h1>
      <div className="px-10">
        <div className="!grid grid-cols-8 gap-y-8" key={currentPage}>
          {uniqueArrayItems(movies).map((movie) => (
            <MovieCard key={movie.id} movie={movie} showType={'Shows'} />
          ))}
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center mt-10">
        <HashLink smooth to="/movies#top-anchor">
          <button
            onClick={handlePrev}
            className={`cursor-pointer bg-green-500 px-2 ${
              firstPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={firstPage === 1}
          >
            Prev
          </button>
        </HashLink>
        {movieList.map((page, index) => (
          <HashLink smooth to="/movies#top-anchor" key={index}>
            <button
              key={page.page}
              onClick={() => handlePageClick(page.page)}
              className={`h-6 w-6 flex items-center justify-center text-base ${
                currentPage === page.page ? 'bg-blue-500' : 'bg-green-500'
              } text-white cursor-pointer`}
            >
              {page.page}
            </button>
          </HashLink>
        ))}
        <HashLink smooth to="/movies#top-anchor">
          <button
            onClick={handleNext}
            className="cursor-pointer bg-green-500 px-2"
          >
            Next
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default TVShows;
