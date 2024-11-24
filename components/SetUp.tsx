"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const SetUp = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
  return (
    <div className="w-full h-full py-20">
   <div className="max-w-7xl mx-auto">
   <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-neutral-800 dark:text-neutral-200 font-sans mb-2">
    Complete <span className="font-bold text-primary"> Government</span> & <span className="font-bold text-primary"> Business</span> <br/>setup service in UAE
    </h2>
    <p className="max-w-xl pl-5 me-auto text-xs font-bold text-neutral-800 dark:text-neutral-200 font-sans">
    We specialized licensing services to understand legal procedures, prepare essential documents, and obtain permissions for establishing businesses in the UAE. Our skilled team simplifies processes and stays in compliance with local laws. 
    </p>
   </div>
<div className="py-6">
<Carousel items={cards} />
</div>
  </div>
  )
}

export default SetUp


const data = [
  {
    category: "Business Setup",
    title: "Set up your business in UAE effortlessly.",
    hoverContent: "Expert guidance for business setup in the UAE.",
    src: "/images/s1.jpg",
  },
  {
    category: "Local Sponsors",
    title: "Find trusted local sponsors.",
    hoverContent: "Reliable local sponsorship services for your business.",
    src: "/images/s2.jpg",
  },
  {
    category: "PRO Services",
    title: "PRO & Document Clearing Services.",
    hoverContent: "Hassle-free PRO and document clearance services.",
    src: "/images/s3.jpg"
  },
  {
    category: "Typing Services",
    title: "Typing & Attestation Services.",
    hoverContent: "Quick and accurate typing and attestation services.",
    src: "/images/s4.jpg"
  },
  {
    category: "Legal Translation",
    title: "Certified Legal Translation Services.",
    hoverContent: "Accurate legal translation services by certified professionals.",
    src: "/images/s5.jpg",
  },
  {
    category: "Visa Services",
    title: "Visa Services in Dubai.",
    hoverContent: "Comprehensive visa services for individuals and businesses.",
    src: "/images/s6.jpg",
  },
  {
    category: "Visit Visa",
    title: "UAE Visit Visa Services.",
    hoverContent: "Affordable and quick visit visa services in the UAE.",
    src: "/images/s7.jpg",
  },
];

