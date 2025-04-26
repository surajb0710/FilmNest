import { IoSearchSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [inputString, setInputString] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    inputString !== '' && navigate(`/search?search=${inputString}`);
  }, [inputString]);

  return (
    <nav
      className="py-1 px-5 md:px-15 bg-black border border-white h-[60px] flex items-center justify-between gap-[25px] flex-wrap"
      id="top-anchor"
    >
      <div className="text-[30px] font-medium">
        <Link to="/" className="text-white no-underline">
          FilmNest
        </Link>
      </div>
      <ul className="flex items-center list-none">
        <li className="relative">
          <Link to="/movies" className="text-white no-underline px-2 py-1">
            Movies
          </Link>
        </li>
        <li className="relative">
          <Link to="/shows" className="text-white no-underline px-2 py-1">
            TV Shows
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-1 flex-grow bg-black">
        <IoSearchSharp className="text-white" />
        <input
          type="text"
          className="flex-grow border-none outline-none bg-black text-white"
          placeholder="Search for movies or TV shows"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
