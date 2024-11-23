'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
      id: '01',
      title: 'BUSINESS SETUP IN DUBAI',
      subtitle: 'Your partner in establishing your business in the UAE.',
      description: 'Whether you are starting a new business or expanding an existing one, we offer expert consultancy to ensure your success.',
      image: '/b3.jpg',
    },
    {
      id: '02',
      title: 'EXPERT CONSULTATION',
      subtitle: 'Expert guidance on licensing, visas, and more.',
      description: 'Get in-depth consultations on everything from business licenses to visa requirements, ensuring a smooth entry into the UAE market.',
      image: '/b3.jpg',
    },
    {
      id: '03',
      title: 'CUSTOMIZED SOLUTIONS',
      subtitle: 'Tailored solutions for your business success.',
      description: 'We provide personalized strategies to meet the unique challenges of your business, helping you grow in the competitive market.',
      image: '/b3.jpg',
    }
  ]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden mt-14 md:mt-24">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
               <div className="absolute inset-0 h-full w-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={`${slide.title} background`}
                  className="object-cover w-full h-full opacity-40"
                />
              </div>
            </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/50" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:px-16">
          <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left space-y-6">
                {/* Title */}
                <h1 className="text-5xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="text-lg text-secondary-foreground sm:text-xl">{slide.subtitle}</p>
                <p className="text-md text-secondary-foreground sm:text-lg">{slide.description}</p>
                
                {/* CTA Button */}
                <Button
                  className="font-bold px-8 py-4 bg-secondary text-white rounded-lg shadow-md hover:bg-primary/80"
                >
                  Get Started
                </Button>
              </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-3/4 transform -translate-y-1/2 text-white/70 hover:text-white lg:left-6"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        className="absolute right-4 top-3/4 transform -translate-y-1/2 text-white/70 hover:text-white lg:right-6"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={48} />
      </button>

      {/* Custom number box */}
      <div className="absolute left-6 top-1/5 transform -translate-y-1/2 flex flex-col items-center text-primary">
        <hr className="border-none w-px h-48 bg-primary" />
        <span className="text-4xl font-bold">{currentSlide + 1}</span>
      </div>
    </div>
  )
}

export default HeroSection
