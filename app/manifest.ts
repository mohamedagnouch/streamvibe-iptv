import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'StreamVibe - Streaming Platform',
    short_name: 'StreamVibe',
    description: 'High-quality streaming of your favorite movies and shows.',
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
