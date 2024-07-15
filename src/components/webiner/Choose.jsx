import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { BsFillRssFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { IoCloudDone } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";

const Choose = () => {
  return (
    <section className='bg-black'>
        <div className="container m-auto py-12">
        <h1  className='text-white text-[60px]  font-[900] py-5 px-10 mb-4 text-center max-lg:px-1  max-lg:text-5xl max-lg:leading-relaxed	max-sm:text-3xl max-sm:px-3'>Why Choose V.connct Webinar?</h1>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 max-sm:mx-6 gap-7 mb-16'>
            <div className='p-5 border border-spacing-1 border-white rounded-xl'>
                <div className='  text-[#F8B517]  py-7 max-lg:py-5 max-sm:py-3'>
                    <FaMountainSun className=' h-12 w-12 max-lg:h-10 max-lg:w-10'/>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-3xl font-medium max-lg:text-2xl'>User-Friendly Interface</h1>
                    <p className='text-xl font-normal'>Navigate effortlessly through our user-friendly interface.</p>
                </div>
            </div>
            <div className='p-5 border border-spacing-1 border-white rounded-xl'>
                <div className='  text-[#F8B517]  py-7 max-lg:py-5 max-sm:py-3'>
                    <GrLike className=' h-12 w-12 max-lg:h-10 max-lg:w-10'/>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-3xl font-medium max-lg:text-2xl'>Comprehensive Features</h1>
                    <p className='text-xl font-normal'>Enjoy a wide array of features. Tailor each webinar to your unique needs.</p>
                </div>
            </div>
            <div className='p-5 border border-spacing-1 border-white rounded-xl'>
                <div className='  text-[#F8B517]  py-7 max-lg:py-5 max-sm:py-3'>
                    <FaUserGroup className=' h-12 w-12 max-lg:h-10 max-lg:w-10'/>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-3xl font-medium max-lg:text-2xl'>Up to 5000 Participants</h1>
                    <p className='text-xl font-normal'>Host anything from intimate seminars to grand conferences.</p>
                </div>
            </div>
            <div className='p-5 border border-spacing-1 border-white rounded-xl'>
                <div className='  text-[#F8B517]  py-7 max-lg:py-5 max-sm:py-3'>
                    <BsFillRssFill className=' h-12 w-12 max-lg:h-10 max-lg:w-10'/>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-3xl font-medium max-lg:text-2xl'>Live Stream Capabilities</h1>
                    <p className='text-xl font-normal'>Connect with participants globally in real-time with our live streaming option.</p>
                </div>
            </div>
            <div className='p-5 border border-spacing-1 border-white rounded-xl'>
                <div className='  text-[#F8B517]  py-7 max-lg:py-5 max-sm:py-3'>
                    <MdAccessTime className=' h-12 w-12 max-lg:h-10 max-lg:w-10'/>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-3xl font-medium max-lg:text-2xl'>30-Hour Webinar Duration</h1>
                    <p className='text-xl font-normal'>Enjoy webinar durations for those in-depth discussions and comprehensive sessions.</p>
                </div>
            </div>
            <div className='p-5 border border-spacing-1 border-white rounded-xl'>
                <div className='  text-[#F8B517]  py-7 max-lg:py-5 max-sm:py-3'>
                    <IoCloudDone className=' h-12 w-12 max-lg:h-10 max-lg:w-10'/>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-3xl font-medium max-lg:text-2xl'>Cloud Recording Storage</h1>
                    <p className='text-xl font-normal'>Benefit from our cloud recording to ensuring you never miss a crucial detail.</p>
                </div>
            </div>
        </div>
        <div className=' flex justify-center  '>
         <button class="bg-[#F8B517]  text-black text-2xl font-medium  py-5 px-9 rounded-lg  "> Price & Plans</button>
         </div>
        </div>
    </section>
  )
}

export default Choose