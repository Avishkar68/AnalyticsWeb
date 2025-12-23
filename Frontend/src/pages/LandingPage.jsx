import React from 'react'
import Hero from '../sections/Hero'
import OurServices from '../sections/OurServices'
import Testimonials from '../sections/Testimonials'
import Blogs from '../sections/Blogs'
import OurClients from '../sections/OurClients'
import OurTeam from '../sections/OurTeam'
import Careers from '../sections/Careers'
import CTA from '../sections/CTA'

const LandingPage = () => {
  
  return (
    <div className='font-inter'>
      <Hero/>
      <OurClients/>
      <OurServices/>
      {/* <div>
      <div className="py-20 bg-black/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">5+</h3>
            <p className="text-sm text-gray-600">Industries Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">50+</h3>
            <p className="text-sm text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-sm text-gray-600">Client Commitment</p>
          </div>
        </div>
      </div> */}
      <OurTeam/>
      <Testimonials/>
      <Blogs/>
      <Careers/>
      <CTA/>
    </div>
  )
}

export default LandingPage