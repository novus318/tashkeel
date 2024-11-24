import React from 'react'
import Particles from '../ui/particles'
import BlurIn from '../ui/blur-in'

const PromiseUI = () => {
  return (
    <div className="relative  p-8 space-y-6 mx-auto max-w-xl"
    >
          <Particles
        className="absolute inset-0"
        quantity={100}
        ease={40}
        staticity={10}
        color='primary'
        refresh
      />
     <BlurIn
      word="Our "
      className="text-3xl font-sans font-medium text-black"
    />
     <BlurIn
      word="Promise"
      className="text-3xl font-sans font-bold text-primary"
    />
        <span className="block w-16 h-[6px] bg-primary rounded-full animate-pulse"></span>
      <p className="text-xs md:text-base font-medium font-sans">
        At Tash-keel Express, we understand that time is valuable and
        navigating the UAE’s systems can be complex. That’s why we are
        committed to making your experience as efficient and hassle-free as
        possible.
      </p>
      <p className="text-xs md:text-base font-medium font-sans">
        Our team will walk you through every step, ensuring transparency,
        accuracy, and compliance at all times. Whether you’re launching your
        dream business, applying for a visa, or managing government approvals,
        we’re here to support you every step of the way.
      </p>
    </div>
  )
}

export default PromiseUI