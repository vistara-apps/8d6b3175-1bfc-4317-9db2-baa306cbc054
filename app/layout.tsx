import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'EchoStream - Discover, Create, and Own Music Moments Together',
  description: 'A social music discovery and tipping platform for music fans and indie artists on Base',
  keywords: ['music', 'discovery', 'tipping', 'Base', 'Web3', 'social'],
  authors: [{ name: 'EchoStream Team' }],
  openGraph: {
    title: 'EchoStream',
    description: 'Discover, Create, and Own Music Moments Together',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EchoStream',
    description: 'Discover, Create, and Own Music Moments Together',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text-primary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
