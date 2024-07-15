import React from 'react'

const Get = () => {
  return (
    <section >
        <div className=' container m-auto flex flex-col text-center justify-center my-10'>
        <h1  className='text-[#181613] text-[60px]  font-[900] px-10 mb-4 max-lg:px-1  max-lg:text-5xl max-lg:leading-relaxed	max-sm:text-3xl max-sm:px-3'>Get to Know V.Connct Webinar</h1>
        <p className='text-2xl px-40  mb-9 max-lg:px-5 max-sm:text-base'>Explore the seamless flow of V.connct webinars, ensuring a smooth experience for both hosts and participants.</p>
         <div className='grid grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1 gap-5 max-sm:mx-10  max-sm:mb-6 '>
                  <div className='flex gap-4 flex-col '>
                      <div className=' rounded-lg flex flex-col gap-5 text-center row-span-3  border border-spacing-1 px-6 py-[38px] border-[#181613] '>
                          <h1 className='text-3xl text-[#181613] max-lg:text-xl'>Webinar Schedule</h1>
                          <p className='text-2xl max-lg:text-sm '>Plan your events with precision, ensuring that your audience knows when to tune in.</p>
                          <img src="./card1.png" alt="Webinar Schedule" />
                      </div>
                      <div className=' rounded-lg row-span-1  border border-spacing-1 px-6 py-10 border-slate-500'>
                          <h1 className='text-3xl text-[#181613] max-lg:text-xl max-sm:mb-3'>Brand Identity</h1>
                          <img src="./card2.png" alt="Brand Identity" />
                      </div>
                  </div>
                  <div className='row-span-4'>
                      <div className='rounded-lg  border border-spacing-1 px-11 py-10 border-slate-500'>
                          <img className='row-span-2 bg-emerald-500' src="./card3-1.png" alt="" />
                          <div className='row-span-1  flex flex-col gap-4 px-2 py-[60px]'>
                              <h1 className='text-3xl text-[#181613] max-lg:text-xl'>Register form</h1>
                              <p className='text-2xl mb-[9px] max-lg:text-sm '>Easily collect participant information with our user-friendly registration forms.</p>
                          </div>
                          <img className='row-span-2 bg-slate-600' src="./card3-2.png" alt="" />
                      </div>
                  </div>
                  <div className=' flex flex-col gap-8 '>
                      <div className=' rounded-lg row-span-2  border border-spacing-1 px-6 py-8 border-slate-500'>
                          <h1 className='text-3xl pb-4 text-[#181613] max-lg:text-xl'>Shareable Card</h1>
                          <img src="./card4.png" alt="" />
                      </div>
                      <div className=' rounded-lg row-span-2  border border-spacing-1 px-6 py-10 border-slate-500'>
                          <h1 className='text-3xl text-[#181613] mb-5 max-lg:text-xl'>Email Notifications</h1>
                          <p className='text-2xl max-lg:text-sm  max-sm:mb-3'>Keep participants informed with emails for registration confirmation, webinar start & end.
                          </p>
                          <img src="./card5.png" alt="Email Notifications" />
                      </div>
                  </div>
         </div>
         <div className='w-full'>
         <button class="bg-black text-white text-2xl font-normal  py-5 px-9 rounded-lg  "> Price & Plans</button>
         </div>
        </div>
    </section>
  )
}

export default Get