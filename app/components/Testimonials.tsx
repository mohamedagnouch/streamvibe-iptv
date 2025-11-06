'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: 'Amazing service! Crystal clear quality and tons of channels. Best IPTV provider I\'ve ever used.',
    verified: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    comment: 'The streaming quality is exceptional. No buffering, great customer support. Highly recommended!',
    verified: true,
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    comment: 'I love the variety of channels and the VOD library is massive. Worth every penny!',
    verified: true,
  },
  {
    id: 4,
    name: 'David Martinez',
    location: 'Madrid, Spain',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    comment: 'Perfect for watching sports! Never missed a game since I subscribed. 5 stars!',
    verified: true,
  },
  {
    id: 5,
    name: 'Sophie Dubois',
    location: 'Paris, France',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    comment: 'Excellent service with great French channels. Setup was super easy!',
    verified: true,
  },
  {
    id: 6,
    name: 'James Wilson',
    location: 'Sydney, Australia',
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    comment: 'Best investment for entertainment. Works flawlessly on all my devices!',
    verified: true,
  },
];

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
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
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            People Love <span className="text-red-500">❤️</span> Using SONITV
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join millions of satisfied customers across the globe who trust SONITV for their premium IPTV streaming needs.
          </p>
        </div>


        {/* Testimonials Carousel */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-3">
            They enjoyed watching -
          </h3>
          <p className="text-center text-gray-600 mb-10">now it's your turn</p>

          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .testimonials-slider .slick-slide {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
