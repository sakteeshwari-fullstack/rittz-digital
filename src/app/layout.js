import { Geist, Geist_Mono } from "next/font/google";
import { Poppins,Rock_Salt } from "next/font/google";

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
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${rockSalt.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
