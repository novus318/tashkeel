import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PromiseUI from '@/components/services/Promise'
import ServiceIntro from '@/components/services/ServiceIntro'
import WhyChoose from '@/components/services/WhyChoose'
import UnderDevelopment from '@/components/UnderDevelopment'
import React from 'react'

const Page = () => {
  return (
   <div>
     <Navbar/>
     <ServiceIntro/>
    <div className='grid md:grid-cols-2 gap-5'>
    <WhyChoose/>
    <PromiseUI/>
    </div>
     <Footer/>
   </div>
  )
}

export default Page