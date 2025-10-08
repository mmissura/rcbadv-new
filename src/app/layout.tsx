import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { Navbar } from './(components)/Header/Navbar';
import './globals.css';
import { Footer } from './(components)/Footer';
import Script from 'next/script';

const be_vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  applicationName: 'RCB Advocacia',
  title: 'RCB Advocacia',
  description: 'RCB Advocacia',
  keywords: [
    'Advogado em Pirassununga ',
    'Escritório Advocacia Pirassununga',
    'Advogados em Pirassununga',
    'Preciso de um advogado Pirassununga',
    'Consulta Jurídica Pirassununga',
    'Melhor Advogado Pirassununga',
    'advogado divórcio pirassununga',
    'divórcio rápido advogado',
    'pensão alimentícia advogado',
    'advogado de família pirassununga',
    'valor advogado divórcio',
    'advogado separação de bens',
    'pensão alimentícia advogado',
    'advogado empresarial pirassununga',
    'advogado contratos',
    'advogado cobranca',
    'advogado patrimonial',
    'advogado empresa',
    'advocacia empresarial',
    'consultoria juridica empresa',
    'assessoria juridica empresa',
  ],
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
        {/* Google Ads - Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G9EP990P94"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Google Analytics 4
            gtag('config', 'G-G9EP990P94');

            // Google Ads
            gtag('config', 'AW-17439504834');
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
