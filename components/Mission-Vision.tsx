'use client'
import React, { useEffect } from "react";
import { Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  useEffect(() => {
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      duration: 1.5, 
      ease: "power3.out", 
      stagger: 0.2, 
      scrollTrigger: {
        trigger: ".mission-vision-section",
        start: "top 80%", 
        end: "bottom 10%",
        scrub: 0.5,
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-primary/5 to-transparent py-16 mission-vision-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-5xl text-center mb-12 font-sans">
          Our Mission & <span className="text-primary font-bold">Vision</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card">
            <div className="relative -top-8 -right-10">
              <div className="bg-white rounded-full w-fit">
                <div className="bg-primary/20 p-4 rounded-full w-fit">
                  <Target className="text-primary h-8 w-8" />
                </div>
              </div>
            </div>
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To be the leader in the industry in assisting businesses with
                business setup and company formation in UAE, along with other
                value-added services to help them achieve their business goals.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <div className="relative -top-8 -right-10">
              <div className="bg-white rounded-full w-fit">
                <div className="bg-secondary/20 p-4 rounded-full">
                  <Lightbulb className="text-secondary h-8 w-8" />
                </div>
              </div>
            </div>
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the preferred business consultant in UAE, helping
                entrepreneurs and business professionals in setting up business in
                Dubai, UAE, and assisting them in company formation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
