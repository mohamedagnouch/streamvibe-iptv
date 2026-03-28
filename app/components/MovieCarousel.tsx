'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const movies = [
  {
    id: 1,
    title: 'Neon Nights',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=500&h=750', // abstract neon layout
  },
  {
    id: 2,
    title: 'Deep Space',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=500&h=750', // cosmos
  },
  {
    id: 3,
    title: 'The Journey',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=500&h=750', // cinematic landscape
  },
  {
    id: 4,
    title: 'Echoes',
    image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=500&h=750', // cinematic camera lens
  },
  {
    id: 5,
    title: 'Velocity',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=500&h=750', // glowing movie theater abstraction
  },
  {
    id: 7,
    title: 'Vortex',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500&h=750', // abstract swirl
  },
  {
    id: 8,
    title: 'Awakening',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500&h=750', // retro vaporwave elements
  },
  {
    id: 9,
    title: 'Silhouette',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=500&h=750', // abstract silhouette
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
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        },
      },
    ],
  };

  return (
    <section className="relative pt-4 pb-12 overflow-hidden hidden md:block">
      <div className="container mx-auto px-2 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">Content</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover thousands of movies, series, and live channels in stunning 4K quality
          </p>
        </div>

        <Slider {...settings} className="movie-slider mt-8 -mx-2 sm:mx-0">
          {movies.map((movie) => (
            <div key={movie.id} className="px-2 sm:px-3">
              <div className="relative group cursor-pointer h-full pb-6">
                <div className="relative overflow-hidden rounded-xl aspect-[2/3] shadow-lg hover:shadow-2xl transition-shadow bg-gray-900 border border-white/5">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 20vw"
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-2">{movie.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-white text-sm font-medium">9.8</span>
                        </div>
                        <span className="text-gray-300 text-sm">• 4K UHD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Center Mode Styles */}
        <style>{`
          @media (max-width: 768px) {
            .movie-slider .slick-center > div > div {
              transform: scale(1.08);
              z-index: 10;
              position: relative;
              transition: transform 0.3s ease;
            }
            .movie-slider .slick-slide:not(.slick-center) > div > div {
              opacity: 0.6;
              transform: scale(0.92);
              transition: transform 0.3s ease, opacity 0.3s ease;
            }
          }
        `}</style>
      </div>

      {/* Gradient Overlays — hidden on mobile */}
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-r from-[#0a0e1a] to-transparent pointer-events-none z-10" />
      <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-l from-[#0a0e1a] to-transparent pointer-events-none z-10" />
    </section>
  );
}
