import LatestMovies from '../components/Home/LatestMovie';

import React from 'react';
import Slider from 'react-slick';

function TVShows() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: '#ddd',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '30px',
          color: 'blue',
          border: '1px blue solid',
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="slider-container px-10">
      <Slider {...settings}>
        <div>
          <LatestMovies />
          <LatestMovies />
        </div>
        <div>
          <LatestMovies />
          <LatestMovies />
        </div>
        <div>
          <LatestMovies />
          <LatestMovies />
        </div>
        <div>
          <LatestMovies />
          <LatestMovies />
        </div>
        <div>
          <LatestMovies />
          <LatestMovies />
        </div>
      </Slider>
    </div>
  );
}
export default TVShows;
