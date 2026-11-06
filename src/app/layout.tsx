import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Packwise | Travel Packing Assistant',
  description: 'A calmer way to get ready for your next trip.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
