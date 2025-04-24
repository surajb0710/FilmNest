import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../components/Common/ImdbTag';
import { useSelector } from 'react-redux';
import useTvShowInfo from '../hooks/useTvShowInfo';
import useMovieInfo from '../hooks/useMovieInfo';
import { useEffect } from 'react';
import { useState } from 'react';
import useCountries from '../utils/useCountries';

const ShowInfo = () => {
  const show = useSelector((state) => state.show.showObject);

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

  console.log('-------countryNames------', countryNames);
  console.log('-------currentShow------', currentShow);

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
      <div className="flex gap-4"></div>
    </div>
  );
};

export default ShowInfo;
