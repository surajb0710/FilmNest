import { useState, useEffect } from 'react';
import Tag from '../Common/Tag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingListItem from '../Cards/TrendingListItem';

const TrendingList = ({
  movies,
  setCurrentSelection,
  currentSelection,
  setMovies,
  loading,
  error,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleCurrentSelection = (name) => {
    setCurrentSelection(name);
    setMovies([]);
  };

  return (
    <div className="w-[30%] h-full max-md:hidden">
      <div className="flex gap-4 items-center py-2">
        <TrendingUpIcon fontSize="large" />
        <h2 className="mr-auto text-[25px] font-bold">TRENDING</h2>
        <Tag
          name="Movies"
          setCurrentSelection={handleCurrentSelection}
          selected={currentSelection === 'Movies' && true}
        />
        <Tag
          name="Shows"
          setCurrentSelection={handleCurrentSelection}
          selected={currentSelection === 'Shows' && true}
        />
      </div>
      <div className="flex flex-col gap-4">
        {movies.length > 0 &&
          movies
            .slice(0, 6)
            .map((movie, index) => (
              <TrendingListItem
                key={movie.id}
                movie={movie}
                showType={currentSelection}
                index={index}
              />
            ))}
      </div>
    </div>
  );
};

export default TrendingList;
