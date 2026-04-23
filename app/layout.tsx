import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VisaPath — Expert Visa Consultancy',
  description: 'Navigate your visa journey with confidence. Expert guidance for study, work, and travel visas worldwide.',
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
