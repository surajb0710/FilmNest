import MovieCard from '../Cards/MovieCard';
import Tag from '../Common/Tag';
import { useState } from 'react';

const PopularShows = () => {
  const [currentSelection, setCurrentSelection] = useState('Movies');

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[25px]">Popular Shows</h2>
        <Tag name="View More" />
      </div>
      <div className="flex gap-4 mb-4">
        <Tag
          name="Movies"
          setCurrentSelection={setCurrentSelection}
          selected={currentSelection === 'Movies' && 'true'}
        />
        <Tag
          name="Shows"
          setCurrentSelection={setCurrentSelection}
          selected={currentSelection === 'Shows' && 'true'}
        />
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

export default PopularShows;
