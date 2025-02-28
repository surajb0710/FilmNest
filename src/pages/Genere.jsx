import RecommendedShows from '../components/Common/RecommendedShows';
import TrendingList from '../components/Home/TrendingList';

const Genere = () => {
  return (
    <div>
      <div>
        <h2>Filter</h2>
        <div></div>
      </div>
      <div className="flex gap-4">
        <RecommendedShows />
        <TrendingList />
      </div>
    </div>
  );
};

export default Genere;
