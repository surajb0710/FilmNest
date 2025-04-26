import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../Common/ImdbTag';
import useGenres from '../../utils/useGenres';
import { useEffect, useState } from 'react';

const Hero = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full lg:w-[70%] lg:h-full">
      <Slider {...settings} className="slider">
        {movies.length > 0 &&
          movies
            .slice(0, 10)
            .map((movie, index) => <HeroComponent key={index} movie={movie} />)}
      </Slider>
    </div>
  );
};

const HeroComponent = ({ movie }) => {
  const [genreList, setGenreList] = useState([]);

  const fullPosterUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  const allGenreList = useGenres('Movies');

  useEffect(() => {
    if (
      !movie.genre_ids ||
      movie.genre_ids.length === 0 ||
      allGenreList.length === 0
    )
      return;

    const getGenres = async (genre_ids) => {
      try {
        const genres = await Promise.all(
          genre_ids.map(async (id) => {
            const genre = allGenreList.find((g) => g.id === id);
            return genre && genre.name;
          })
        );
        setGenreList(genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    getGenres(movie.genre_ids);
  }, [movie.genre_ids, allGenreList]);

  return (
    <div className="w-full h-[400px] lg:h-[620px] !flex items-center relative">
      <div className="px-4 lg:px-8 z-10 text-bg pt-3">
        <div className="text-[20px] lg:text-[50px] font-extrabold mb-4">
          {movie.title || movie.name}
        </div>
        <div className="flex gap-5 items-center max-lg:flex-col">
          <div className="flex gap-5">
            <p>{movie.release_date}</p>
            <div className="flex gap-2 items-center">
              <StarIcon sx={{ color: 'yellow' }} />
              <p>{movie.vote_average}</p>
              <ImdbTag />
            </div>
          </div>
          <div className="flex gap-2 max-lg:self-start flex-wrap">
            {genreList.map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>
        </div>
      </div>
      <img
        src={fullPosterUrl}
        alt=""
        className="w-full h-full object-cover absolute"
      />
    </div>
  );
};

export default Hero;
