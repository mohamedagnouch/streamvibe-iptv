'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        // Countdown timer
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent leading-none">
                            404
                        </h1>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto">
                            Oops! The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
                                <div className="relative w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">{countdown}</span>
                                </div>
                            </div>
                            <span className="text-gray-300 text-sm">
                                Redirecting to homepage in {countdown} second{countdown !== 1 ? 's' : ''}...
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <svg
                                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Go to Homepage
                        </Link>

                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                                />
                            </svg>
                            Go Back
                        </button>
                    </div>

                    {/* Help Text */}
                    <div className="mt-12">
                        <p className="text-gray-500 text-sm">
                            Need help?{' '}
                            <Link
                                href="/#pricing"
                                className="text-orange-500 hover:text-orange-400 underline transition-colors"
                            >
                                Contact Support
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
