import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './font.css';
import { SessionProvider } from 'next-auth/react';
import TanStackProvider from '@/providers/tan-stack-provider';
import { Toaster } from 'sonner';
import { auth } from '@/auth';
import type { CustomUser } from '@/types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Captain Side Gaming',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log('session in layout', session);

  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <SessionProvider session={session}>
          <TanStackProvider>{children}</TanStackProvider>
          <Toaster position="top-right" richColors />
        </SessionProvider>
      </body>
    </html>
  );
}
