import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/signup" element={<TVShows />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
