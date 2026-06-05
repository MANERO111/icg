import type { Metadata } from "next";
import { Geist, Geist_Mono ,Bebas_Neue ,Poppins , Caveat , Allura } from "next/font/google";
import "./globals.css";
import ICGHeader from "@/components/navbar";
import ICGFooter from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const bebas_Neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "icg",
  description: "icg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${bebas_Neue.variable} ${geistMono.variable} ${poppins.variable} ${caveat.variable} ${allura.variable} h-full w-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col">
        <ICGHeader />
        {children}
        <ICGFooter />
      </body>
    </html>
  );
}
