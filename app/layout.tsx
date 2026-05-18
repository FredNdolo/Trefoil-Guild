import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Grannies Project | Trefoil Guild Kenya',
    template: '%s | Grannies Project · Trefoil Guild Kenya',
  },
  description:
    "Empowering vulnerable grandmothers in Nairobi's Kibra through craft skills, economic independence, and community. A project of Trefoil Guild Kenya.",
  keywords: [
    'Trefoil Guild Kenya',
    'Grannies Project',
    'Kenya Girl Guides Association',
    'community empowerment',
    'Kibra Nairobi',
    'craft skills',
    'WAGGGS',
    'skipped generation caregiving',
  ],
  authors: [{ name: 'Trefoil Guild Kenya' }],
  openGraph: {
    title: 'Grannies Project | Trefoil Guild Kenya',
    description: 'Inspiring Generations, Building Communities.',
    locale: 'en_KE',
    type: 'website',
    siteName: 'Grannies Project',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grannies Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grannies Project | Trefoil Guild Kenya',
    description: 'Inspiring Generations, Building Communities.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-white text-text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}