import React from 'react'
import Accordion from '../../components/webiner/Accordion'

const Faqs = () => {
  return (
    <>
  <section className='mt-32'>
        <div className="container m-auto p-32 max-lg:p-5 max-sm:p-1">
            <h1 className='flex justify-center text-3xl font-normal py-14'>FAQS</h1>
            <Accordion      
              title="How many participants can I host in a webinar?"
              answer="V.connct supports up to 1000 participants, offering scalability for events of any size." 
            />
            <Accordion      
              title="Can I live stream my webinars?"
              answer="Absolutely! Enjoy the benefits of reaching a wider audience in real-time." 
            />
            <Accordion      
              title="How long can a webinar last?"
              answer="Webinars can extend up to 30 hours, providing flexibility for various event durations." 
            />
            <Accordion      
              title="Are email notifications automated?"
              answer="Yes, V.connct sends automated emails for registration, start, and end times." 
            />
        </div>
    </section>
    <section className='bg-black'>
        <div className="container m-auto flex flex-col justify-center py-10">
            <h1 className='text-white text-[60px]  font-[900] py-5 px-10 mb-4 text-center max-lg:px-1  max-lg:text-5xl max-lg:leading-relaxed	max-sm:text-3xl max-sm:px-3'>Ready to Elevate Your Webinars?</h1>
            <div className=' flex justify-center  '>
            <button class="bg-[#F8B517]  text-black text-2xl font-medium  py-5 px-9 rounded-lg  "> Buy Now</button>
            </div>
        </div>
    </section>
    
    
    </>

  )
}

export default Faqs