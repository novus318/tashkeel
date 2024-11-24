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
    "Looking to start a company with business setup consultants in Dubai and the UAE? Our expert team assists you with all kinds of business setups in Dubai.",
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
    icon: "/fav.png", // Path to your favicon file
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
        <link rel="icon" href="/fav.png" sizes="any" type="image/png" />
        {/* Any additional metadata tags can go here */}
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
