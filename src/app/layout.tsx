import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from "next/script";
import './globals.css';
import ThemeWrapper from '@/components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yuvrajsinh Borasiya - Expert Full Stack Developer | React & Node.js Specialist',
  description: 'Yuvrajsinh Borasiya - Expert Full Stack Developer specializing in React, Node.js, and modern web technologies. View portfolio, projects, and contact for web development services.',
  keywords: 'Yuvrajsinh Borasiya, Full Stack Developer, React Developer, Node.js Developer, Web Development, Portfolio, Software Engineer, Web Applications, Frontend Developer, Backend Developer, MERN Stack, JavaScript Expert, Web Solutions, Custom Web Development',
  authors: [{ name: 'Yuvrajsinh Borasiya' }],
  openGraph: {
    title: 'Yuvrajsinh Borasiya - Expert Full Stack Developer | React & Node.js Specialist',
    description: 'Yuvrajsinh Borasiya - Expert Full Stack Developer specializing in React, Node.js, and modern web technologies. View portfolio, projects, and contact for web development services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Yuvrajsinh Borasiya Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yuvrajsinh Borasiya - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvrajsinh Borasiya - Expert Full Stack Developer | React & Node.js Specialist',
    description: 'Yuvrajsinh Borasiya - Expert Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    creator: '@yuvrajsinh',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://yuvrajsinhborasiya.netlify.app',
  },
  verification: {
    google: 's1USayEIEzl0ihSNq9Z6Dsh8q9xQdXwl5QOYYWUG9c8',
  },
  metadataBase: new URL('https://yuvrajsinhborasiya.netlify.app'),
  category: 'technology',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  creator: 'Yuvrajsinh Borasiya',
  publisher: 'Yuvrajsinh Borasiya',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="s1USayEIEzl0ihSNq9Z6Dsh8q9xQdXwl5QOYYWUG9c8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-MXYVHDY38H`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MXYVHDY38H', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
