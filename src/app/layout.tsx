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
    'Advogado em Pirassununga',
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2VPDDSK');
          `}
        </Script>

        {/* Google Analytics + Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G9EP990P94"
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
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

        {/* Conversão de clique no WhatsApp */}
        <Script id="gtag-whatsapp-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) !== 'undefined') {
                  window.open(url, '_blank'); // abre em nova aba
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17439504834/D2edCJOYy6wbEMLz5vtA',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>

      <body className={`${be_vietnam.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2VPDDSK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
