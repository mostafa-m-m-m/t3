import React from 'react'
import Accordion from './Accordion'

const Faqs = () => {
  return (
    <section className='pt-40'>
        <div className="container  m-auto p-32 max-lg:p-5 max-sm:p-1">
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
  )
}

export default Faqs