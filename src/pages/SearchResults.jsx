import MovieCard from '../components/Cards/MovieCard';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import PersonCard from '../components/Cards/PersonCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParameter = queryParams.get('query') || 'popular';
  const searchParameter = queryParams.get('search');
  const [sectionName, setSectionName] = useState('');

  useEffect(() => {
    const searchMovies = async (pageNumber = 0, searchParameter) => {
      if (!searchParameter) {
        return;
      }
      const URL = `https://api.themoviedb.org/3/search/multi?query=${searchParameter}&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&page=${pageNumber}`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch TV show details');
        }
        const data = await response.json();
        console.log('-------Search Results-------', data);
        setSearchResults(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies(currentPage, searchParameter);
  }, [currentPage, searchParameter]);

  // useEffect(() => {
  //   const loadInitialMovies = async () => {
  //     setLoading(true);
  //     let initialMoviesList = [];
  //     for (let i = firstPage; i <= lastPage; i++) {
  //       const newPageData = await fetchMovies(i);
  //       if (newPageData) initialMoviesList.push(newPageData);
  //     }
  //     setMovieList(initialMoviesList);
  //     setMovies(initialMoviesList[0]?.allMovies || []);
  //     setLoading(false);
  //   };

  //   loadInitialMovies();
  // }, []);

  // const handleNext = async () => {
  //   const nextPage = lastPage + 1;
  //   const newPageData = await fetchMovies(nextPage);
  //   if (!newPageData) return;

  //   const updatedMovieList = [...movieList.slice(1), newPageData];
  //   setMovieList(updatedMovieList);
  //   setMovies(newPageData.allMovies);
  //   setFirstPage((prev) => prev + 1);
  //   setLastPage(nextPage);
  //   setCurrentPage(currentPage + 1);
  // };

  // const handlePrev = async () => {
  //   if (firstPage === 1) return;

  //   const prevPage = firstPage - 1;
  //   const newPageData = await fetchMovies(prevPage);
  //   if (!newPageData) return;

  //   const updatedMovieList = [newPageData, ...movieList.slice(0, -1)];
  //   setMovieList(updatedMovieList);
  //   setMovies(newPageData.allMovies);
  //   setFirstPage(prevPage);
  //   setLastPage((prev) => prev - 1);
  //   setCurrentPage(currentPage - 1);
  // };

  // const handlePageClick = (pageNumber) => {
  //   const pageData = movieList.find((movie) => movie.page === pageNumber);
  //   if (pageData) {
  //     setMovies(pageData.allMovies);
  //     setCurrentPage(pageNumber);
  //   }
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  searchResults.results.map((result) => {
    console.log('------Media Type------', result.media_type);
  });

  return (
    <div className="">
      {/* <h1 className="text-4xl font-extrabold text-center my-10">
        {sectionName}
      </h1> */}
      <div className="px-10">
        <div className="!grid grid-cols-8 gap-y-8" key={currentPage}>
          {searchResults.results?.map((result) => {
            if (result.media_type === 'tv' || result.media_type === 'movie') {
              return (
                <MovieCard
                  key={result.id}
                  movie={result}
                  showType={result.media_type === 'tv' ? 'Shows' : 'Movies'}
                />
              );
            } else {
              return <PersonCard key={result.id} person={result} />;
            }
          })}
        </div>
      </div>
      {/* <div className="flex gap-1 justify-center items-center mt-10">
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
      </div> */}
    </div>
  );
};

export default Movies;
