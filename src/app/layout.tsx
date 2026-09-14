import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Metalcosart S.R.L. | Structuri Metalice și Sudură (CAEN 2511)',
  description:
    'Metalcosart S.R.L. - Proiectare, execuție și montaj structuri metalice, hale industriale și confecții metalice de înaltă precizie în Botoșani și în toată România.',
  keywords: [
    'structuri metalice Botoșani',
    'structuri metalice România',
    'hale industriale',
    'sudură industrială',
    'CAEN 2511',
    'Metalcosart',
    'confecții metalice',
  ],
  authors: [{ name: 'Metalcosart S.R.L.' }],
  openGraph: {
    title: 'Metalcosart S.R.L. | Structuri Metalice și Sudură',
    description:
      'Soluții tehnice robuste pentru hale industriale și structuri metalice de rezistență în România.',
    url: 'https://metalcosart.ro',
    siteName: 'Metalcosart S.R.L.',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metalcosart S.R.L. | Structuri Metalice și Sudură în Botoșani',
    description:
      'Soluții tehnice robuste pentru hale industriale și structuri metalice de rezistență în Botoșani și România.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Metalcosart S.R.L.',
  description:
    'Fabricarea de construcții metalice și a părților componente ale structurilor metalice (CAEN 2511).',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Comuna Stroești',
    addressLocality: 'Stroești',
    addressRegion: 'Botoșani',
    addressCountry: 'RO',
  },
  telephone: '+40711942020',
  email: 'contact@metalcosart.ro',
  url: 'https://metalcosart.ro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
