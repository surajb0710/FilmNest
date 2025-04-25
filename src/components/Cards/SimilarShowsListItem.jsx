import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../Common/ImdbTag';
import getShowInfo from '../../utils/getShowInfo';

const SimilarShowsListItem = ({ show, index, showType }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w500${show.backdrop_path}`;

  const currentShow = getShowInfo(show.id, showType);

  return (
    <div className="relative overflow-clip">
      <div
        className="bg-cover bg-center opacity-40 absolute w-full h-full"
        style={{
          backgroundImage: `url(${backdropUrl})`,
        }}
      ></div>
      <div className="z-50 absolute rounded-full bg-gray-800 w-[30px] h-[30px] flex justify-center items-center border border-orange-500 text-orange-500 top-1/2 translate-[-50%] left-[15px] font-bold">
        {index + 1}
      </div>
      {showType === 'Movies' ? (
        <div className="ml-[15px] pr-[15px] flex gap-4 items-center">
          <img src={posterUrl} alt="" className="h-[75px] w-[50px] z-10" />
          <div>
            <p className="text-base">{show.title}</p>
            <div className="flex gap-4">
              <p>Movie</p>
              <div className="flex gap-2 items-center">
                <StarIcon sx={{ color: 'yellow' }} />
                <p>{show.vote_average}</p>
                <ImdbTag />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 ml-auto">
            {show.release_date && show.release_date.slice(0, 4)}
          </p>
        </div>
      ) : (
        <div className="ml-[15px] pr-[15px] flex gap-4 bg-gray-800 items-center">
          <img src={posterUrl} alt="" className="h-[75px] w-[50px]" />
          <div>
            <p className="text-base">{show.original_name}</p>
            <div className="flex gap-4">
              <p>TV</p>
              <p>{`EP ${currentShow.last_episode_to_air?.episode_number}`}</p>
              <p>{`SS ${currentShow.last_episode_to_air?.season_number}`}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 ml-auto">
            {currentShow.last_episode_to_air?.air_date?.slice(0, 4)}
          </p>
        </div>
      )}
    </div>
  );
};

SimilarShowsListItem.propTypes = {
  showType: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SimilarShowsListItem;
