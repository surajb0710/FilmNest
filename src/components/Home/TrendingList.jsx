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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200); // example: mobile if width < 640px
    };

    // Set initially
    handleResize();

    // Listen for resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCurrentSelection = (name) => {
    setCurrentSelection(name);
    setMovies([]);
  };

  return (
    <div className="w-[30%] h-full max-lg:hidden">
      <div className="flex gap-2 xl:gap-4 items-center py-2">
        <TrendingUpIcon fontSize="large" />
        <h2 className="mr-auto text-[18px] xl:text-[20px] 2xl:text-[25px] font-bold">
          TRENDING
        </h2>
        <Tag
          name={isMobile ? '🎬' : 'Movies'}
          setCurrentSelection={handleCurrentSelection}
          selected={currentSelection === 'Movies' && true}
        />
        <Tag
          name={isMobile ? '📺' : 'Shows'}
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
