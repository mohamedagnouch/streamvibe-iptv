'use client';

import { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(47);
  const [seconds, setSeconds] = useState(36);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const handleCopy = () => {
    navigator.clipboard.writeText('EXTRA10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Get 10% OFF - StreamVibe',
        text: 'Get 10% OFF on premium IPTV service with code EXTRA10',
        url: window.location.href,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-scale-in">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 text-center">
            {/* Fire Icon */}
            <div className="mb-6 flex justify-center">
              <div className="text-6xl">🔥</div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Get 10% OFF
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Join us today and enjoy 10% off your first purchase today!
              <br />
              Enter welcome code for new customers only
            </p>

            {/* Coupon Code Section */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 text-left">
                  <div className="text-xs text-gray-500 mb-1">Coupon Code</div>
                  <div className="text-2xl font-bold text-black tracking-wider">
                    HTKI 29
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all whitespace-nowrap"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Info Text */}
            <p className="text-gray-500 text-xs mb-4">
              Click copy to use the code to your clipboard
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {String(hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-1">Hours</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 self-start">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {String(minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-1">Min</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 self-start">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {String(seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-1">Secs</div>
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mx-auto text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
