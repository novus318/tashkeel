import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Business setup consultants in UAE | TASH-KEEL express",
  description:
    "Looking to start a company with business setup consultants in UAE? Our expert team assists you with all kinds of business setups in Dubai.",
  keywords: [
    "Business setup Dubai",
    "company formation",
    "Dubai free zone",
    "company registration",
    "start a business",
    "business license",
    "offshore company setup",
    "mainland company formation",
    "business setup services",
    "Dubai economic department",
  ],
  icons: {
    icon: "/fav.png",
  },
  openGraph: {
    title: "Business setup consultants in UAE | TASH-KEEL express",
    description:
      "Looking to start a company with business setup consultants in UAE? Our expert team assists you with all kinds of business setups in Dubai.",
    url: "https://tashkeelexpress.com",
    type: "website",
    images: [
      {
        url: "https://tashkeelexpress.com/og.png",
        width: 1200,
        height: 630,
        alt: "Business setup consultants in UAE | TASH-KEEL express",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:title" content="Business setup consultants in UAE | TASH-KEEL express" />
  <meta property="og:description" content="Looking to start a company with business setup consultants in UAE? Our expert team assists you with all kinds of business setups in Dubai." />
  <meta property="og:image" content="https://tashkeelexpress.com/og.png" />
  <meta property="og:url" content="https://tashkeelexpress.com" />
  <meta property="og:type" content="website" />
  <link rel="icon" href="/fav.png" sizes="any" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Suspense fallback={<Spinner />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
