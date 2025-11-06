'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const movies = [
  {
    id: 1,
    title: 'Action Movie',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Drama Series',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Thriller',
    image: 'https://images.unsplash.com/photo-1574267432644-f610a4ab46b3?w=400&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Documentary',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Comedy',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Horror',
    image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Sci-Fi',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Romance',
    image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop',
  },
];

export default function MovieCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <Slider {...settings} className="movie-slider">
          {movies.map((movie) => (
            <div key={movie.id} className="px-2">
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[2/3] bg-gray-800">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1929] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1929] to-transparent pointer-events-none z-10" />
    </section>
  );
}
