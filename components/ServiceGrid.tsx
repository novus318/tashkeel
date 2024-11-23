'use client'  
import { BuildingIcon, BriefcaseIcon, GlobeIcon, PenToolIcon, IdCardIcon } from 'lucide-react';
import React from 'react';
import { BentoCard, BentoGrid } from './ui/bento-grid';
import Globe from './ui/globe';

const features = [
  {
    Icon: BuildingIcon,
    name: "Company Registration",
    description: "We help you establish your company in the UAE with fast and seamless registration processes.",
    href: "/company-registration",
    cta: "Learn more",
    background: <img className="absolute -right-0 -top-28 md:-top-0 p-32 md:p-20  opacity-80" src="/images/setup-logo.png" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: BriefcaseIcon,
    name: "Business Licensing",
    description: "Get the necessary business licenses to operate legally in the UAE's free zones or mainland.",
    href: "/business-licensing",
    cta: "Learn more",
    background: <img className="absolute -right-32 md:-right-1 -top-24 md:-top-20 p-20 opacity-60" src="/images/business.png" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: PenToolIcon,
    name: "Legal Compliance",
    description: "Ensure your business adheres to all UAE laws and regulations with our legal consulting services.",
    href: "/legal-compliance",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-10" src="/images/legal.png" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: IdCardIcon,
    name: "Visa & Immigration",
    description: "We assist with UAE visa applications, employee visas, and residency permits for your business.",
    href: "/visa-immigration",
    cta: "Learn more",
    background: <img className="absolute -right-32 -top-20 opacity-10" src="/images/visa.png" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "International Expansion",
    description: "Expand your business globally with a UAE-based presence and leverage regional trade agreements.",
    href: "/international-expansion",
    cta: "Learn more",
    background:  <Globe className="-top-20" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const ServiceGrid = () => {
  return (
    <div className='max-w-7xl m-auto py-10 px-4'>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature,i) => (
          <BentoCard key={feature.name} index={i} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ServiceGrid;
