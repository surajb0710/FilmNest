import React from 'react';
import Slider from 'react-slick';
import { formatDate } from '../utils/utils';

const ReviewCarousal = ({ reviews }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <div className="slider-container h-max">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="px-5">
            <div className="space-y-2 border border-white p-10 rounded-xl h-full max-h-[210px]">
              <p>
                <span className="font-bold">Author Name :</span> {review.author}
              </p>
              <p className="text-sm">
                <span className="font-bold">Rating : </span>
                {review.author_details.rating}
              </p>
              <p className="text-sm h-full">
                <span className="font-bold">Review : </span>
                {review.content.slice(0, 100)}
              </p>
              <p className="text-sm">
                <span className="font-bold">Updated on : </span>
                {formatDate(review.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousal;
