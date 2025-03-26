import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from "next/script";
import './globals.css';
import ThemeWrapper from '@/components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yuvrajsinh Borasiya | Full Stack Developer',
  description: 'Portfolio website of Yuvrajsinh Borasiya, a Full Stack Developer specializing in modern web applications, React, Node.js, and cloud technologies.',
  keywords: 'Full Stack Developer, React Developer, Node.js Developer, Web Development, Portfolio',
  authors: [{ name: 'Yuvrajsinh Borasiya' }],
  openGraph: {
    title: 'Yuvrajsinh Borasiya | Full Stack Developer',
    description: 'Portfolio website of Yuvrajsinh Borasiya, a Full Stack Developer specializing in modern web applications.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Yuvrajsinh Borasiya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvrajsinh Borasiya | Full Stack Developer',
    description: 'Portfolio website of Yuvrajsinh Borasiya, a Full Stack Developer specializing in modern web applications.',
    creator: '@yuvrajsinh',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://yuvrajsinhborasiya.com',
  },
  verification: {
    google: 'your-google-site-verification',
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
