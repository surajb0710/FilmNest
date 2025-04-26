import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../components/Common/ImdbTag';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import useCountries from '../utils/useCountries';
import getCredits from '../utils/getCredits';
import getReviews from '../utils/getReviews';
import PeopleProfileCard from '../components/Cards/PeopleProfileCard';
import getImages from '../utils/getImages';
import ImageCarousal from '../components/ImageCarousal';
import ReviewCarousal from '../components/ReviewCarousal';
import { addCommas } from '../utils/utils';
import getSimilarShows from '../utils/getSimilarShows';
import SimilarShowsListItem from '../components/Cards/SimilarShowsListItem';
import CircularProgress from '@mui/material/CircularProgress';

const ShowInfo = () => {
  const showObj = useSelector((state) => state.show.showObject);

  const show = showObj.showId
    ? showObj
    : JSON.parse(localStorage.getItem('show'));

  const [currentShow, setCurrentShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (show.showType !== 'Shows' || !show.showId) return;
    const fetchShowInfo = async () => {
      const URL = `https://api.themoviedb.org/3/tv/${show.showId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch TV show details');
        }

        const data = await response.json();

        setCurrentShow(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShowInfo();
  }, [show.showType, show.showId]);

  useEffect(() => {
    if (show.showType !== 'Movies' || !show.showId) return;

    const fetchMovieInfo = async () => {
      const URL = `https://api.themoviedb.org/3/movie/${show.showId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch movie details');
        const data = await response.json();
        setCurrentShow(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieInfo();
  }, [show.showType, show.showId]);

  const countryNames = useCountries(currentShow.origin_country);
  const credits = getCredits(show.showId, show.showType);
  const reviews = getReviews(show.showId, show.showType);
  const images = getImages(show.showId, show.showType);
  const similarShows = getSimilarShows(show.showId, show.showType);

  const directors = credits.crew
    ?.filter((item) => item.job === 'Director')
    .map((item) => item.name);

  const genres = currentShow.genres?.map((genre) => genre.name);
  const productionCompanies = currentShow.production_companies?.map(
    (production_company) => production_company.name
  );

  // console.log('currentShow', currentShow);
  // console.log('credits.cast', credits.cast);
  // console.log('directors', directors);
  // console.log('reviews', reviews);

  return !currentShow.id ? (
    <div className="min-h-screen w-full flex items-center justify-center">
      <CircularProgress />
    </div>
  ) : (
    <div className="px-5 lg:px-10 flex flex-col gap-10">
      <div className="flex gap-10">
        <div className="flex-2/3">
          {currentShow && show.showType === 'Movies' ? (
            <div className="flex max-lg:flex-col max-lg:items-center gap-6">
              <img
                src={`https://image.tmdb.org/t/p/original${currentShow.poster_path}`}
                alt=""
                className="h-[400px] w-[270px]"
              />
              <div className="flex flex-col gap-2 lg:gap-5">
                <div className="flex flex-col gap-2 ">
                  <h2 className="text-[25px]">{currentShow.title}</h2>
                  <div className="flex flex-wrap max-lg:flex-col gap-1 lg:gap-5 lg:items-center">
                    <p>{currentShow.release_date}</p>
                    <div className="flex gap-2 items-center">
                      <StarIcon sx={{ color: 'yellow' }} />
                      <p>{currentShow.vote_average}</p>
                      <ImdbTag />
                    </div>
                    <p>{currentShow.runtime} mins</p>
                    <ul className="flex gap-2">
                      {genres &&
                        genres.map((genre) => (
                          <li
                            className="px-2 py-1 border-2 border-white rounded-md w-max"
                            key={genre}
                          >
                            {genre}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <p>{currentShow.overview}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p>
                    Type: <span>Movie</span>
                  </p>
                  <p>
                    Countries:{' '}
                    <span>{countryNames && addCommas(countryNames)}</span>
                  </p>
                  <p>
                    Production:{' '}
                    <span>
                      {productionCompanies && addCommas(productionCompanies)}
                    </span>
                  </p>
                  <p>
                    Tagline: <span>{currentShow.tagline}</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-6">
              <img
                src={`https://image.tmdb.org/t/p/original${currentShow.poster_path}`}
                alt=""
                className="h-[400px] w-[270px]"
              />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[25px]">{currentShow.name}</h2>
                  <div className="flex gap-5 items-center">
                    <p>{currentShow.last_air_date}</p>
                    <div className="flex gap-2 items-center">
                      <StarIcon sx={{ color: 'yellow' }} />
                      <p>{currentShow.vote_average}</p>
                      <ImdbTag />
                    </div>
                    <ul className="flex gap-2">
                      {genres &&
                        genres.map((genre) => (
                          <li
                            className="px-2 py-1 border-2 border-white rounded-md w-max"
                            key={genre}
                          >
                            {genre}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <p>{currentShow.overview}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p>
                    Type: <span>TV Show</span>
                  </p>
                  <p>
                    Country:{' '}
                    <span>{countryNames && addCommas(countryNames)}</span>
                  </p>
                  <p>
                    Production:
                    <span>
                      {productionCompanies && addCommas(productionCompanies)}
                    </span>
                  </p>
                  <p>
                    Tagline:{' '}
                    <span>
                      {currentShow.tagline ? currentShow.tagline : 'NA'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1/3 space-y-5 max-lg:hidden">
          <h2 className="text-lg">Similar {show.showType}</h2>
          {similarShows.results &&
            similarShows.results
              .slice(0, 1)
              .map((showObject, index) => (
                <SimilarShowsListItem
                  show={showObject}
                  index={index}
                  showType={show.showType}
                  key={index}
                />
              ))}
        </div>
      </div>
      {credits.cast?.length > 0 && (
        <div className="">
          <h2 className="text-4xl font-medium mb-5 lg:mb-10">Top Cast</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-screen gap-x-10 gap-y-2 lg:gap-y-5">
            {credits.cast?.slice(0, 10).map((cast) => (
              <PeopleProfileCard cast={cast} key={cast.id} />
            ))}
          </div>
        </div>
      )}
      {directors?.length > 0 && (
        <div className="">
          <h2 className="text-4xl font-medium mb-5 lg:mb-10">Directors</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-screen gap-x-10 gap-y-2 lg:gap-y-5">
            {credits.crew?.map(
              (crew) =>
                crew.job === 'Director' && (
                  <PeopleProfileCard cast={crew} key={crew.id} />
                )
            )}
          </div>
        </div>
      )}
      {reviews.results?.length > 0 && (
        <div className="">
          <h2 className="text-4xl font-medium mb-5 lg:mb-10">User Reviews</h2>
          <ReviewCarousal reviews={reviews.results} />
        </div>
      )}
      <div className="">
        <h2 className="text-4xl font-medium mb-5 lg:mb-10">Backdrop Images</h2>
        {images.backdrops && <ImageCarousal images={images.backdrops} />}
      </div>
    </div>
  );
};

export default ShowInfo;
