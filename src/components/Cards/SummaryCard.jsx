import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../Common/ImdbTag';

const SummaryCard = ({ movie, showType, numberOfSeasons }) => {
  return (
    <div className="absolute p-5 z-10 bg-black rounded-2xl border border-white top-1/2">
      <div className="text-xl font-extrabold mb-4">
        {movie?.title || movie?.name}
      </div>
      <div className="flex gap-2 items-center mb-4">
        {showType === 'movie' ? (
          <p>{movie?.release_date.slice(0, 4)}</p>
        ) : (
          <p className="text-sm">SS{numberOfSeasons}</p>
        )}
        <div className="flex gap-2 items-center">
          <StarIcon sx={{ color: 'yellow' }} />
          <p>{movie?.vote_average}</p>
        </div>
        <ImdbTag />
      </div>

      <div className="text-md">{movie.overview.slice(0, 150)}...</div>
    </div>
  );
};

export default SummaryCard;
