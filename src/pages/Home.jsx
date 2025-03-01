import Hero from '../components/Home/Hero';
import LatestMovie from '../components/Home/LatestMovie';
import TrendingShows from '../components/Home/TrendingShows';
import TrendingList from '../components/Home/TrendingList';
import PopularShows from '../components/Home/PopularShows';

function Home() {
  return (
    <div className="px-10 flex flex-col gap-16">
      <div className="flex h-[620px] gap-5">
        <Hero />
        <TrendingList />
      </div>
      <LatestMovie />
      <TrendingShows />
      {/* <PopularShows /> */}
    </div>
  );
}

export default Home;
