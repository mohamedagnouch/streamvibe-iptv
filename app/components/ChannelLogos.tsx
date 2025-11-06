'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const channelLogos = [
  { name: 'ESPN', logo: 'https://logo.clearbit.com/espn.com', bg: '#FFFFFF' },
  { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com', bg: '#FFFFFF' },
  { name: 'HBO', logo: 'https://logo.clearbit.com/hbo.com', bg: '#FFFFFF' },
  { name: 'Disney+', logo: 'https://logo.clearbit.com/disneyplus.com', bg: '#FFFFFF' },
  { name: 'Hulu', logo: 'https://logo.clearbit.com/hulu.com', bg: '#FFFFFF' },
  { name: 'CNN', logo: 'https://logo.clearbit.com/cnn.com', bg: '#FFFFFF' },
  { name: 'Fox', logo: 'https://logo.clearbit.com/fox.com', bg: '#FFFFFF' },
  { name: 'NBC', logo: 'https://logo.clearbit.com/nbc.com', bg: '#FFFFFF' },
  { name: 'MLB', logo: 'https://logo.clearbit.com/mlb.com', bg: '#FFFFFF' },
];

export default function ChannelLogos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="py-8 mb-8">
      <Slider {...settings} className="channel-logos-slider">
        {channelLogos.map((channel, index) => (
          <div key={index} className="px-4">
            <img
              src={channel.logo}
              alt={channel.name}
              className="w-20 h-20 object-contain hover:scale-110 transition-transform mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
