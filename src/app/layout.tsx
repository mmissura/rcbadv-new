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
    'Advogado direito civil em Pirassununga ',
    'Advogado direito do consumidor em Pirassununga',
    'Advogado direito do imobiliário em Pirassununga',
    'Advogado direito empresarial em Pirassununga',
    'Advogado para contratos em Pirassununga',
    'Advogado extrajudicial em Pirassununga',
    'Advogado direito do agronegócio em Pirassununga',
    'Advogado direito ambiental em Pirassununga',
    'Advogado direito minerário em Pirassununga',
    'Escritório de advocacia em Pirassununga',
    'Melhor advogado em Pirassununga',
    'Escritório de direito em Pirassununga',
    'Jurídico em Pirassununga',
    'Inventário',
    'Divórcio',
    'Separação',
    'Usucapião',
    'Contratos',
    'Regularização de imóveis',
    'Cobrança',
    'Alteração de nome',
    'Alteração de gênero',
    'Ações contra planos de saúde',
    'Execuções',
    'Interdição',

    'Advogado em Leme',
    'Advogado direito civil em Leme',
    'Advogado direito do consumidor em Leme',
    'Advogado direito do imobiliário em Leme',
    'Advogado direito empresarial em Leme',
    'Advogado para contratos em Leme',
    'Advogado extrajudicial em Leme',
    'Advogado direito do agronegócio em Leme',
    'Advogado direito ambiental em Leme',
    'Advogado direito minerário em Leme',
    'Escritório de advocacia em Leme',
    'Melhor advogado em Leme',
    'Escritório de direito em Leme',
    'Jurídico em Leme',

    'Advogado em Descalvado',
    'Advogado direito civil em Descalvado',
    'Advogado direito do consumidor em Descalvado',
    'Advogado direito do imobiliário em Descalvado',
    'Advogado direito empresarial em Descalvado',
    'Advogado para contratos em Descalvado',
    'Advogado extrajudicial em Descalvado',
    'Advogado direito do agronegócio em Descalvado',
    'Advogado direito ambiental em Descalvado',
    'Advogado direito minerário em Descalvado',
    'Escritório de advocacia em Descalvado',
    'Melhor advogado em Descalvado',
    'Escritório de direito em Descalvado',
    'Jurídico em Descalvado',

    'Advogado em Araras',
    'Advogado direito civil em Araras',
    'Advogado direito do consumidor em Araras',
    'Advogado direito do imobiliário em Araras',
    'Advogado direito empresarial em Araras',
    'Advogado para contratos em Araras',
    'Advogado extrajudicial em Araras',
    'Advogado direito do agronegócio em Araras',
    'Advogado direito ambiental em Araras',
    'Advogado direito minerário em Araras',
    'Escritório de advocacia em Araras',
    'Melhor advogado em Araras',
    'Escritório de direito em Araras',
    'Jurídico em Araras',

    'Advogado em Porto Ferreira',
    'Advogado direito civil em Porto Ferreira',
    'Advogado direito do consumidor em Porto Ferreira',
    'Advogado direito do imobiliário em Porto Ferreira',
    'Advogado direito empresarial em Porto Ferreira',
    'Advogado para contratos em Porto Ferreira',
    'Advogado extrajudicial em Porto Ferreira',
    'Advogado direito do agronegócio em Porto Ferreira',
    'Advogado direito ambiental em Porto Ferreira',
    'Advogado direito minerário em Porto Ferreira',
    'Escritório de advocacia em Porto Ferreira',
    'Melhor advogado em Porto Ferreira',
    'Escritório de direito em Porto Ferreira',
    'Jurídico em Porto Ferreira',

    'Advogado em Santa Cruz das Palmeiras',
    'Advogado direito civil em Santa Cruz das Palmeiras',
    'Advogado direito do consumidor em Santa Cruz das Palmeiras',
    'Advogado direito do imobiliário em Santa Cruz das Palmeiras',
    'Advogado direito empresarial em Santa Cruz das Palmeiras',
    'Advogado para contratos em Santa Cruz das Palmeiras',
    'Advogado extrajudicial em Santa Cruz das Palmeiras',
    'Advogado direito do agronegócio em Santa Cruz das Palmeiras',
    'Advogado direito ambiental em Santa Cruz das Palmeiras',
    'Advogado direito minerário em Santa Cruz das Palmeiras',
    'Escritório de advocacia em Santa Cruz das Palmeiras',
    'Melhor advogado em Santa Cruz das Palmeiras',
    'Escritório de direito em Santa Cruz das Palmeiras',
    'Jurídico em Santa Cruz das Palmeiras',
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
