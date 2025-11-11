import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IPTVIBE - Premium IPTV Service',
    short_name: 'IPTVIBE',
    description: 'Experience premium IPTV streaming with 37,591+ live channels and 96,000+ VOD titles from 115+ countries.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e1a',
    theme_color: '#ff6b35',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
