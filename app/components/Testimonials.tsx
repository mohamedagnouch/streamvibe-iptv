import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from '../hooks/useTranslation';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: "Amazing service! Crystal clear quality and tons of channels. Best streaming service I've ever used.",
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
    comment: 'Excellent service with great French channels. Works flawlessly on all my devices 5 stars!',
    verified: true,
  },
  {
    id: 6,
    name: 'James Wilson',
    location: 'Sydney, Australia',
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    comment: 'Best investment for entertainment. Works flawlessly on all my devices 5 stars!',
    verified: true,
  },
];

export default function Testimonials() {
  const { t } = useTranslation();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    centerMode: true,
    centerPadding: '20px',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
            {t('testimonials.heading', { count: 3 })}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            {t('testimonials.subheading')}
          </p>
        </div>

        {/* Testimonials Carousel Section */}
        <div className="mb-0">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-5 py-2.5 mb-6 shadow-sm">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 text-sm font-bold tracking-wide uppercase">{t('testimonials.badge')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
              {t('testimonials.title')}
            </h3>
            <p className="text-gray-500 text-lg md:text-xl font-medium">{t('testimonials.cta')}</p>
          </div>

          <div className="testimonials-container">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-3 outline-none h-full py-4">
                  <div className="bg-white rounded-[32px] shadow-xl p-8 border border-gray-100 min-h-[260px] h-full hover:shadow-2xl hover:border-orange-200 transition-all duration-500 flex flex-col group">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 truncate text-base md:text-lg tracking-tight">{testimonial.name}</h4>
                        <p className="text-xs md:text-sm text-gray-400 font-medium truncate uppercase tracking-wider">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 drop-shadow-sm"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow font-light">
                      "{testimonial.comment}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-container :global(.slick-track) {
          display: flex !important;
          gap: 0;
        }
        .testimonials-container :global(.slick-slide) {
          height: inherit !important;
          display: flex !important;
          justify-content: center;
        }
        .testimonials-container :global(.slick-slide > div) {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .testimonials-container :global(.slick-list) {
          overflow: visible;
        }
      `}</style>
    </section>
  );
}
