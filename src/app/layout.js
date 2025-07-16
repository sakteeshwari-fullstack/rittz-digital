import { Geist, Geist_Mono } from "next/font/google";
import { Poppins,Rock_Salt } from "next/font/google";
import Script from "next/script";


import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rock-salt',
  display: 'swap',
});


export const metadata = {
  title: "Top Website Development Company in Chennai – Rittz Digital",
  description: "Rittz Digital is a trusted website development company in Chennai, offering custom web design, eCommerce, and SEO-friendly solutions for growing businesses.",
  icons: {
    icon: "/assets/favicon.ico", // Make sure favicon.ico exists in /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Script id="gtm-init" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WMK2Z276');
        `}
      </Script>
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${rockSalt.variable} antialiased`}
      >
        <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WMK2Z276"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
