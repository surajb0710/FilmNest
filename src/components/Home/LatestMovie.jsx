import MovieCard from '../Cards/MovieCard';
import Tag from '../Common/Tag';

const LatestMovie = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[25px]">Latest Movies</h2>
        <Tag name="View More" />
      </div>
      <div className="flex justify-between">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default LatestMovie;
