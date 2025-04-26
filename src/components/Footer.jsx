import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="p-[5px_60px] bg-black h-[60px] flex items-center gap-[100px]">
      <div className="text-[30px] font-medium text-white">FilmNest</div>
      <div className="flex gap-4">
        <Link to="/terms" className="text-white no-underline px-2 py-1">
          Terms of Service
        </Link>
        <Link to="/terms" className="text-white no-underline px-2 py-1">
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
