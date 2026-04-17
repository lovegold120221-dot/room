import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eburon Local API v3',
  description: 'Eburon Local API v3 - Serverless API with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
