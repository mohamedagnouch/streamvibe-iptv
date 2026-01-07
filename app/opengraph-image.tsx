import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'StreamVibe - Premium Streaming Hub';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #ff6b35, #e63946, #f72585)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
          }}
        >
          STREAMVIBE
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#f5f5f7',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Premium Streaming Hub - Official Content Worldwide
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
