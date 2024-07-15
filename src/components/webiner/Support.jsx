import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const Support = () => {
  return (
    <section className='bg-[#FFF4E5] py-20 '>
        <div className="container m-auto  ">
          <div className='mx-10'>
          <div className='bg-white p-6 border border-spacing-1 border-black rounded-2xl '>
                <h1 className='text-black text-[50px]  font-[700] max-sm:text-lg' >Need Help? Webinar Documentation</h1>
                <p className='text-[26px] py-6 max-sm:text-base '> Need production help? Webinar Documentation has you covered. We can help ensure you next webinar goes off without a hitch.</p>
                <div className='border-b-2 border-b-black w-44 max-sm:w-24 pb-1'>
                <button className='bg-transparent  w-44 font-normal text-2xl max-sm:text-sm flex flex-row text-center '>Help Center<IoMdArrowForward className='text-center mt-2 ml-1 text-2xl max-sm:text-lg max-sm:mt-[3px]' /></button>
                </div>
            </div> 
          </div>
        </div>
    </section>
  )
}

export default Support