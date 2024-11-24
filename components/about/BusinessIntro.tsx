'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function BusinessIntro() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.headline', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'easeOut', stagger: 0.3 }
      );
      gsap.fromTo(
        '.subheading', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'easeOut', stagger: 0.3, delay: 0.5 }
      );
      gsap.fromTo(
        '.image-container', 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, ease: 'easeOut', delay: 1 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <h1 className="text-4xl tracking-tight headline">
            <span className="text-primary font-bold">Business Setup</span> Company in Dubai
          </h1>

          <div className="space-y-6 text-muted-foreground subheading">
            <p className="text-lg">
              Tash-Keel Express is a business consultant in Dubai, helping entrepreneurs establish their businesses. We offer comprehensive solutions, from company formation to legal and regulatory services, making us one of the most preferred providers in the UAE.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Supporting Business Growth in Dubai, UAE
              </h2>
              <p>
                Our team assists businesses across Mainland, Freezone, and Offshore sectors with all necessary legalities, licenses, and approvals, ensuring a strong market presence in the UAE.
              </p>
            </div>

            <p>
              Tash-Keel Express also provides services like Instant Trade Licenses, PRO services, Tax & Legal Advisory, ISO Registration, Visa Renewals, and more.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Trusted for Seamless Company Formation in Dubai
              </h2>
              <p>
                We take pride in offering tailored corporate solutions, simplifying the process of business setup in Dubai for numerous clients.
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden image-container">
          <div className="absolute inset-0 grid grid-rows-2 gap-2">
            <div className="relative w-full h-full">
              <Image
                src="/images/ab1.jpg"
                alt="Dubai cityscape with modern architecture"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/ab2.jpg"
                alt="Business professionals in a meeting"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
