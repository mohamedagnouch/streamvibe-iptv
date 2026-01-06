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
    <div className="flex items-center gap-2 md:gap-3">
      {/* Professional TV Logo Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl blur-sm opacity-75"></div>
        <div className={`relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 ${sizeClasses[size]} rounded-2xl flex items-center justify-center shadow-lg`}>
          <svg
            className="w-[65%] h-[65%] text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Modern TV with signal waves */}
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
            <circle cx="8" cy="10" r="1.5" opacity="0.9" />
            <circle cx="12" cy="10" r="1.5" opacity="0.9" />
            <circle cx="16" cy="10" r="1.5" opacity="0.9" />
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold ${textColor} tracking-tight leading-none`}>
            IPTVIBE
          </span>
          <span className="text-[7px] md:text-[9px] text-orange-500 font-bold tracking-[0.15em] uppercase mt-0.5">
            Premium IPTV Service
          </span>
        </div>
      )}
    </div>
  );
}
