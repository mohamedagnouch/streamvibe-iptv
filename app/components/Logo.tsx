interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ variant = 'light', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <div className="flex items-center gap-3">
      {/* Modern Logo Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl blur-sm opacity-75"></div>
        <div className={`relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 ${sizeClasses[size]} rounded-2xl flex items-center justify-center shadow-lg`}>
          <svg 
            className="w-[60%] h-[60%] text-white" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            {/* Play button with streaming waves */}
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" 
            />
          </svg>
        </div>
      </div>
      
      {/* Brand Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold ${textColor} tracking-tight leading-none`}>
            StreamVibe
          </span>
          <span className="text-[10px] text-orange-500 font-semibold tracking-wider uppercase">
            Premium IPTV
          </span>
        </div>
      )}
    </div>
  );
}
