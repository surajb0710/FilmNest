import Hero from '../components/Home/Hero';
import TrendingShows from '../components/Home/TrendingShows';
import TrendingList from '../components/Home/TrendingList';

function Home() {
  return (
    <div className="px-10 flex flex-col gap-16">
      <div className="flex h-[620px] gap-5">
        <Hero />
        <TrendingList />
      </div>
      <TrendingShows
        url="https://api.themoviedb.org/3"
        sectionName="Popular Shows"
      />
      <TrendingShows
        url="https://api.themoviedb.org/3/trending"
        sectionName="Trending Shows"
      />
      <TrendingShows
        url="https://api.themoviedb.org/3"
        sectionName="Top Rated"
      />
    </div>
  );
}

export default Home;
