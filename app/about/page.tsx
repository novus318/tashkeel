import AboutHead from '@/components/about/AboutHead'
import BusinessIntro from '@/components/about/BusinessIntro'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
   <div>
     <Navbar/>
   <AboutHead/>
   <BusinessIntro/>
     <Footer/>
   </div>
  )
}

export default Page