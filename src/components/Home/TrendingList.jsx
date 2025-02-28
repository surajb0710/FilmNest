import { useState } from 'react';
import Tag from '../Common/Tag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingListItem from '../Cards/TrendingListItem';

const TrendingList = () => {
  const [currentSelection, setCurrentSelection] = useState('Movies');

  return (
    <div className="grow h-full">
      <div className="flex gap-4 items-center py-2">
        <TrendingUpIcon fontSize="large" />
        <h2 className="mr-auto text-[25px] font-bold">TRENDING</h2>
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
      <div className="flex flex-col gap-4">
        <TrendingListItem />
        <TrendingListItem />
        <TrendingListItem />
        <TrendingListItem />
        <TrendingListItem />
      </div>
    </div>
  );
};

export default TrendingList;
