import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousal from '../components/Carousal';
import TopDramaCarousal from '../components/TopDramaCarousal';

function Home() {
  const genre = 'Action';
  const genre_id = 28;

  return (
    <div>
      <Navbar />
      <TopDramaCarousal />
      <Carousal genre={genre} genre_id={genre_id} />
      <Footer />
    </div>
  );
}

export default Home;
