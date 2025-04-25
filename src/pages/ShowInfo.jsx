import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../components/Common/ImdbTag';
import { useSelector } from 'react-redux';
import useTvShowInfo from '../hooks/useTvShowInfo';
import useMovieInfo from '../hooks/useMovieInfo';
import { useEffect } from 'react';
import { useState } from 'react';
import useCountries from '../utils/useCountries';
import getCredits from '../utils/getCredits';
import getReviews from '../utils/getReviews';
import PeopleProfileCard from '../components/Cards/PeopleProfileCard';
import getImages from '../utils/getImages';
import ImageCarousal from '../components/ImageCarousal';
import ReviewCarousal from '../components/ReviewCarousal';

const ShowInfo = () => {
  const show =
    useSelector((state) => state.show.showObject) ||
    JSON.parse(localStorage.getItem('show'));

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

  const directors = credits.crew
    ?.filter((item) => item.job === 'Director')
    .map((item) => item.name);

  // console.log('-------countryNames------', countryNames);
  // console.log('-------credits------', credits);

  // console.log('-------reviews------', reviews);
  console.log('-------images------', images);

  console.log('Current Show', currentShow);

  return (
    <div className="px-10 flex flex-col gap-10">
      <div className="flex gap-6">
        <img src="" alt="" className="h-[400px] w-[270px]" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-[25px]">ABCD</h2>
            <div className="flex gap-5 items-center">
              <p>2014</p>
              <div className="flex gap-2 items-center">
                <StarIcon sx={{ color: 'yellow' }} />
                <p>5.65</p>
                <ImdbTag />
              </div>
              <p>127 mins</p>
              <p>Drama</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolor minima vero fugit dolorum odio libero sint cum illum totam
              rem corporis maiores debitis dolorem cupiditate, consectetur,
              accusantium ipsa dolore nulla? Officiis maiores possimus iusto
              fuga illo, accusamus eaque quis quam consequatur. Beatae
              dignissimos obcaecati, similique eveniet sunt recusandae
              voluptates.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              Type: <span>MOVIE</span>
            </p>
            <p>
              Country: <span>India</span>
            </p>
            <p>
              Genre: <span>Action, Adventure, Thriller</span>
            </p>
            <p>
              Release: <span>Dec 11, 2024</span>
            </p>
            <p>
              Director: <span>J.C. Chandor</span>
            </p>
            <p>
              Production:
              <span>
                Columbia Pictures, Matt Tolmach Productions, Arad Productions
              </span>
            </p>
            <p>
              Cast:
              <span>
                Aaron Taylor-Johnson, Ariana DeBose, Fred Hechinger, Alessandro
                Nivola, Christopher Abbott
              </span>
            </p>
            <p>
              Tagline: <span>Villains aren't born. They're made.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl font-medium mb-10">Top Cast</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-screen gap-x-10 gap-y-5">
          {credits.cast?.slice(0, 10).map((cast) => (
            <PeopleProfileCard cast={cast} key={cast.cast_id} />
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl font-medium mb-10">Directors</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-screen gap-x-10 gap-y-5">
          {credits.crew?.map(
            (crew) =>
              crew.job === 'Director' && (
                <PeopleProfileCard cast={crew} key={crew.id} />
              )
          )}
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl font-medium mb-10">User Reviews</h2>
        {reviews.results && <ReviewCarousal reviews={reviews.results} />}
      </div>
      <div className="">
        <h2 className="text-4xl font-medium mb-10">Backdrop Images</h2>
        {images.backdrops && <ImageCarousal images={images.backdrops} />}
      </div>
    </div>
  );
};

export default ShowInfo;
