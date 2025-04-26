import data from '../../data.json';

const genres = data.genres;

const NavDropdownItem = () => {
  return (
    <li className="relative transition-colors duration-500 px-[15px] group">
      <a
        href="/"
        className="no-underline flex items-center justify-start text-white"
      >
        Genre
      </a>
      <ul className="absolute left-0 mt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-500 bg-black p-[15px] shadow-md grid grid-cols-3 gap-2 w-[400px] z-10 list-none">
        {genres.map((genre) => (
          <li className="w-full m-0 py-1 border-b border-black" key={genre.id}>
            <a
              href="/"
              className="flex justify-between gap-10 no-underline text-white"
            >
              {genre.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavDropdownItem;
