import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeWrapper from '@/components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yuvraj - Full Stack Developer',
  description: 'Portfolio website of Yuvraj, a Full Stack Developer specializing in modern web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
