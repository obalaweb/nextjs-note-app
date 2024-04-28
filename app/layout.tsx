import type { Metadata } from 'next';
import Nav from './components/Nav';
import Footer from './Footer';
import Note from './components/Note';
import './globals.css';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Next note taking app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />
        <Note />
        {children}
        <Footer />
      </body>
    </html>
  );
}
