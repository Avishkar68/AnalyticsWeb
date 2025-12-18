import React from 'react'
import Hero from '../sections/Hero'
import OurServices from '../sections/OurServices'
import Testimonials from '../sections/Testimonials'
import Blogs from '../sections/Blogs'

const LandingPage = () => {
  return (
    <div className='font-inter '>
      <Hero/>
      <OurServices/>
      <Testimonials/>
      <Blogs/>
    </div>
  )
}

export default LandingPage
