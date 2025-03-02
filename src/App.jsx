import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import ShowInfo from './pages/ShowInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<TVShows />} />
        <Route path="/showInfo" element={<ShowInfo />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
