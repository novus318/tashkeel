'use client'
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.animate-fade-up',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // animation starts when 80% of the container is visible
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative  p-8 space-y-6 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-title text-primary-50 animate-fade-up">
        Why Choose Us?
      </h2>
      <ul className="space-y-2 text-xs md:text-base">
        {[
          {
            text: `Expert Guidance: Our team stays updated on the latest
            regulations and requirements, providing you with accurate and
            timely advice.`,
          },
          {
            text: `One-Stop Destination: From business setup to visa services, we
            offer a wide range of solutions under one roof.`,
          },
          {
            text: `Commitment to Excellence: We prioritize customer satisfaction
            and deliver high-quality, reliable services.`,
          },
          {
            text: `Trusted Experience: With a proven track record, we’ve helped
            countless clients achieve their goals in the UAE.`,
          },
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 animate-fade-up"
          >
            <CheckCircle className="text-primary-500 text-3xl" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChoose;
