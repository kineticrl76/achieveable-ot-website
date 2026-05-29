import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AchieveAble OT — Where Kids Become Achievers!',
  description:
    'Pediatric occupational therapy in Queens and Western Nassau serving children with developmental, genetic, behavioral, and neurological conditions.',
  keywords: ['pediatric OT', 'occupational therapy', 'Queens NY', 'sensory integration', 'AchieveAble OT'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
