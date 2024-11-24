'use client'
import React from 'react'
import { motion } from 'framer-motion'
import BlurIn from '../ui/blur-in'
import DotPattern from '../ui/dot-pattern'
import { cn } from '@/lib/utils'

const AboutHead = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-24 text-center mt-16">
      <div className="mb-2">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <BlurIn
      word=" Join our network"
       className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
          />
        </motion.h2>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
         <BlurIn
         word="and grow with us."
         className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text pb-1"/>
        </motion.h2>
      </div>

      <motion.p
        className="text-xs sm:text-lg md:text-xl max-w-4xl mx-auto text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        Explore a streamlined path to business success in the UAE, supported by expert guidance and resources that make a difference in your entrepreneurial journey.
      </motion.p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </section>
  )
}

export default AboutHead
