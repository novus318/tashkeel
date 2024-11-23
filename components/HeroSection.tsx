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
  },
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)

  return (
    <div className="relative w-full h-[78vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-foreground/80 via-secondary-foreground/50 md:from-secondary/50 md:via-secondary-foreground/80 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-transform duration-1000 ease-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-24 absolute'
              }`}
            >
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground font-semibold">
                  {slide.subtitle}
                </p>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl">
                  {slide.description}
                </p>
                <div className="pt-4 flex gap-4">
                  <Button
                    className="text-white px-8 py-6 text-lg rounded-none
                    transition-all duration-300 hover:translate-x-1"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-8 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 cursor-pointer transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-[#30D5C8]' : 'w-6 bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-4 z-20">
          <button
            onClick={goToPrevSlide}
            className="text-white/70 hover:text-[#30D5C8] transition-colors duration-300 p-1 bg-black/30 rounded-full backdrop-blur-md cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={goToNextSlide}
            className="text-white/70 hover:text-[#30D5C8] transition-colors duration-300 p-1 bg-black/30 rounded-full backdrop-blur-md cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
