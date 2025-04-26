import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="py-1 px-5 md:px-15 bg-black h-[60px] flex items-center lg:gap-[100px] max-lg:mt-5 max-lg:justify-between">
      <div className="text-[30px] font-medium text-white">FilmNest</div>
      <div className="flex max-lg:flex-col gap-0.5 lg:gap-4">
        <Link to="/terms" className="text-white no-underline lg:px-2 lg:py-1">
          Terms of Service
        </Link>
        <Link to="/privacy" className="text-white no-underline lg:px-2 lg:py-1">
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
