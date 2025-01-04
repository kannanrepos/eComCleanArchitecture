import type { Metadata, Viewport } from 'next';
import HolyLoader from 'holy-loader';

import TopBanner from '@/components/layout/Banner/TopBanner';
import TopNavbar from '@/components/layout/Navbar/TopNavbar';
import Footer from '@/components/layout/Footer';

import { merriweather } from '@/styles/fonts';
import '@/styles/globals.css';
import Providers from './providers';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Microservice Ecommerce',
  description: 'Ecommerce application with .NET Microservice',
};
export const viewport: Viewport = {
  themeColor: '#000000',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn([merriweather.className, 'bg-background'])}>
        <HolyLoader
          color="linear-gradient(to right, #FA3200, #8FBD06)"
          speed={250}
          easing="linear"
          showSpinner
        />
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
