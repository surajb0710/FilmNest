import React from 'react';
import Slider from 'react-slick';

const ImageCarousal = ({ images }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div className="px-2" key={image.file_path}>
            <img
              src={`https://image.tmdb.org/t/p/original${image.file_path}`}
              alt=""
              className="h-80 w-full object-cover rounded-2xl border border-white"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousal;
