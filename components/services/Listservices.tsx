"use client";
import React from 'react'
import { BlurImage, Carousel } from '../ui/apple-cards-carousel';
import { motion } from "framer-motion";
import GradualSpacing from '../ui/gradual-spacing';

const Listservices = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
  return (
    <div className="w-full h-full py-20">
   <div className="max-w-7xl mx-auto">
   <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-neutral-800 dark:text-neutral-200 font-sans mb-2">
   Our <span className="font-bold text-primary">Services.</span>
    </h2>
    <p className="max-w-xl pl-5 me-auto text-xs font-bold text-neutral-800 dark:text-neutral-200 font-sans">
    Let us help you turn challenges into opportunities. Contact Tash-keel Express today and discover how we can simplify your personal and business processes, giving you the freedom to focus on what truly matters – your success. </p>
   </div>
<div className="py-6">
<Carousel items={cards} />
</div>
  </div>
  )
}

export default Listservices


const Card = ({
  card,
  index,
  layout = false,
}: {
  card: any;
  index: number;
  layout?: boolean;
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[30rem] w-[20rem] md:w-[30rem] overflow-hidden shadow-lg z-10"
    >
      {/* Card Header - Image */}
      <div className="relative w-full h-2/3">
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-6">
        <div>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-xl md:text-2xl font-bold font-sans"
          >
               <GradualSpacing
      text={card.category}
    />
          </motion.p>
        </div>
        <div className="mt-2">
        <motion.p
            layoutId={layout ? `hoverContent-${card.hoverContent}` : undefined}
            className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-sans"
          >
            {card.title}{card.hoverContent}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};



  const data = [
    {
      category: "Bank Account Opening",
      title: "Effortlessly open personal or corporate bank accounts.",
      hoverContent: "Expert assistance for a smooth and hassle-free process.",
      src: "/images/sp/1.png",
    },
    {
      category: "Business Consulting Services",
      title: "Unlock your business’s potential.",
      hoverContent: "Expert consulting from strategy to execution.",
      src: "/images/sp/2.png",
    },
    {
      category: "Business License Services & Amendments",
      title: "Get your business license effortlessly.",
      hoverContent: "Compliance-focused license issuance and amendments.",
      src: "/images/sp/3.png",
    },
    {
      category: "Certificate Attestation Services",
      title: "Simplify document legalization in the UAE.",
      hoverContent: "Recognized certificate attestation services.",
      src: "/images/sp/4.png",
    },
    {
      category: "Civil Defence Approvals",
      title: "Secure Civil Defence approvals easily.",
      hoverContent: "Ensuring safety and compliance for your business.",
      src: "/images/sp/5.png",
    },
    {
      category: "Driving License Services",
      title: "Obtain or renew your driving license effortlessly.",
      hoverContent: "Hassle-free assistance for all driving license needs.",
      src: "/images/sp/6.png",
    },
    {
      category: "Dubai Chamber & Dubai Customs Services",
      title: "Streamline your Dubai Chamber and Customs dealings.",
      hoverContent: "Efficient and expert guidance for approvals.",
      src: "/images/sp/7.png",
    },
    {
      category: "Offshore Company & Free Zone Company Set-up",
      title: "Set up your offshore or free zone company.",
      hoverContent: "Tailored solutions for your business goals.",
      src: "/images/sp/8.png",
    },
    {
      category: "Dubai Economic Department (DED) Services",
      title: "Handle all your DED-related business needs.",
      hoverContent: "From registrations to renewals, we’ve got you covered.",
      src: "/images/sp/9.png",
    },
    {
      category: "Ejari Service",
      title: "Streamline your tenancy contract registration.",
      hoverContent: "Efficient Ejari services to meet regulations.",
      src: "/images/sp/10.png",
    },
    {
      category: "Golden Visa",
      title: "Secure your long-term residency in the UAE.",
      hoverContent: "Expert assistance for obtaining a Golden Visa.",
      src: "/images/sp/11.png",
    },
    {
      category: "Immigration & Labour Services",
      title: "Simplify visa and labour processes.",
      hoverContent: "Comprehensive support for applications and renewals.",
      src: "/images/sp/12.png",
    },
    {
      category: "Insurance Services",
      title: "Protect your personal and business interests.",
      hoverContent: "Tailored insurance solutions to suit your needs.",
      src: "/images/sp/13.png",
    },
    {
      category: "Trade License Services",
      title: "Manage trade license issuance and renewal.",
      hoverContent: "Dedicated support for smooth processing.",
      src: "/images/sp/14.png",
    },
    {
      category: "Trusted Sponsorship Service",
      title: "Partner with reliable local sponsors.",
      hoverContent: "Ensuring compliance with UAE regulations.",
      src: "/images/sp/15.png",
    },
    {
      category: "VAT Registration Service",
      title: "Ensure VAT compliance with ease.",
      hoverContent: "Expert support for VAT registration in the UAE.",
      src: "/images/sp/16.png",
    },
  ];
  