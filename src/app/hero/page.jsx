import React from 'react'

const Hero = () => {
  return (
    <section className='hero pt-40 pb-10 max-sm:pt-14 mt-32'>
    <div className='container m-auto  text-center '>
      <h1  className='text-[#181613] text-[76px]  font-[900] px-10 mb-9 max-lg:px-1  max-lg:text-5xl max-lg:leading-relaxed	max-sm:text-3xl max-sm:px-3'>All-in-One Solution for Effortless Webinar Hosting</h1>
      <p className='text-2xl px-40 mb-9 max-lg:px-5 max-sm:text-base'>Create immersive live Webinar experiences with everything you need. Join industry experts for a transformative learning experience and gain the audience you need.</p>
      <div className='flex gap-5 justify-center'> 
        <button class="bg-[#F8B517] py-5 px-9 rounded-lg  font-[600]">Plans & Pricing</button>
        <button class="bg-transparent text-[#785a28] py-5 px-9 rounded-lg  font-[600]   border  border-[#785a28] hover:bg-[#F8B517] hover:border-white hover:text-black">Contact Us</button>
      </div>
      <img  src='./hero-img.png' />
    </div>
  </section>
  )
}

export default Hero