import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'Metalcosart S.R.L. - Structuri Metalice și Sudură';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const imagePath = join(process.cwd(), 'public', 'gallery-12.jpg');
  const imageBuffer = await readFile(imagePath);
  const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#09090b',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
      }}
    >
      <img
        src={base64Image}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(9, 9, 11, 0.95) 45%, rgba(9, 9, 11, 0.65) 100%)',
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          padding: '60px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fbbf24',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Din Botoșani în toată România • CAEN 2511
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 10,
            maxWidth: '850px',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              display: 'flex',
            }}
          >
            METAL<span style={{ color: '#f59e0b' }}>COS</span>ART S.R.L.
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#e4e4e7',
              lineHeight: 1.25,
            }}
          >
            Structuri Metalice, Hale Industriale & Sudură Grea
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#a1a1aa',
              lineHeight: 1.5,
            }}
          >
            Proiectare, execuție și montaj de precizie pentru parteneri
            industriali.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '24px',
            zIndex: 10,
            fontSize: '18px',
            color: '#d4d4d8',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>📍 Com. Stroești, Jud. Botoșani</span>
            <span>📞 +40 (711) 942 020</span>
          </div>
          <div style={{ color: '#f59e0b', fontWeight: 600 }}>
            metalcosart.ro
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
