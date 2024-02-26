import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';
import { Menu } from '@/src/layouts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kolibry store',
  description: 'Kolibry store description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Menu>{children}</Menu>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
