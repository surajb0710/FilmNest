import CarousalGenre from '../components/CarousalGenre';
import CarousalTrending from '../components/CarousalTrending';
import Hero from '../components/Home/Hero';
import TrendingList from '../components/Home/TrendingList';

function Home() {
  return (
    <div className="flex h-[620px]">
      <Hero />
      <TrendingList />
    </div>
  );
}

// function Homea() {
//   return (
//     <div>
//       <CarousalGenre genre="Drama" genre_id={18} />
//       <CarousalGenre genre="Adventure" genre_id={12} />
//       <CarousalGenre genre="Action" genre_id={28} />
//       <CarousalTrending genre="Action" genre_id={28} />
//     </div>
//   );
// }

export default Home;
