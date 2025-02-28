import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../Common/ImdbTag';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-[70%] h-full">
      <Slider {...settings} className="slider">
        <div className="w-full h-[620px] !flex items-center relative">
          <div className="px-8 z-10">
            <div className="text-[50px] font-extrabold mb-4">Reacher</div>
            <div className="flex gap-5 items-center">
              <p>2022</p>
              <div className="flex gap-2 items-center">
                <StarIcon sx={{ color: 'yellow' }} />
                <p>7.6</p>
                <ImdbTag />
              </div>
              <p>Drama</p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1740600379671-46903506e162"
            alt=""
            className="w-full h-auto object-cover absolute"
          />
        </div>
        <div className="w-full h-[620px] bg-green-200">1</div>
        <div className="w-full h-[620px] bg-green-300">1</div>
        <div className="w-full h-[620px] bg-green-400">1</div>
        <div className="w-full h-[620px] bg-green-500">1</div>
      </Slider>
    </div>
  );
};

export default Hero;
