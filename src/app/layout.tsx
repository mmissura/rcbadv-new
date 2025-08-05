import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { Navbar } from './(components)/Header/Navbar';
import './globals.css';
import { Footer } from './(components)/Footer';

const be_vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  applicationName: 'RCB Advocacia',
  title: 'RCB Advocacia',
  description: 'xxxxxxx',
  keywords: ['palavra-chave', '', '', ''],
  authors: [{ name: 'RCB advocacia', url: 'https://rcbadv.com.br' }],
  creator: 'RCB Advocacia',
  openGraph: {
    title: 'RCB advocacia',
    description: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${be_vietnam.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
