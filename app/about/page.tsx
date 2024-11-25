import AboutHead from '@/components/about/AboutHead'
import BusinessIntro from '@/components/about/BusinessIntro'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "About TASH-KEEL express business setup Service Dubai | TASH-KEEL express",
  description:
    "TASH-KEEL express Business Setup Service is a leading business consultant in UAE. Certified and Experienced business consultants will guide you to start your business in no time",
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
      "TASH-KEEL express Business Setup Service is a leading business consultant in UAE. Certified and Experienced business consultants will guide you to start your business in no time",
    url: "https://tashkeelexpress.com/about",
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
const Page = () => {
  return (
   <div>
     <Navbar/>
   <AboutHead/>
   <BusinessIntro/>
     <Footer/>
   </div>
  )
}

export default Page