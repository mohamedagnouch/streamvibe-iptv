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
    comment: 'Amazing service! Crystal clear quality and tons of channels. Best streaming service I\'ve ever used.',
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    shadow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
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
    ],
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">Millions</span> Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied customers across the globe who trust StreamVibe for their premium streaming needs.
          </p>
        </div>


        {/* Testimonials Carousel */}
        <div className="mb-0">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 text-sm font-medium">Real Customer Reviews</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              They're Already Streaming
            </h3>
            <p className="text-gray-600 text-lg">Now it's your turn to join them</p>
          </div>

          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200 h-full hover:shadow-2xl hover:border-orange-300 transition-all">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-gray-900 truncate text-sm md:text-base">{testimonial.name}</h4>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{testimonial.location}</p>
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
