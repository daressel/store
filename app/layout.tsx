import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kirillov store',
  description: 'Kirillov store description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
