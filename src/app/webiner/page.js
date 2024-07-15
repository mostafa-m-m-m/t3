import Choose from '@/components/webiner/Choose'
import Faqs from '@/components/webiner/Faqs'
import Get from '@/components/webiner/Get'
import Hero from '@/components/webiner/Hero'
import Organizations from '@/components/webiner/Organizations'
import Ready from '@/components/webiner/Ready'
import Support from '@/components/webiner/Support'
import React from 'react'

const Webiner = () => {
  return (
    <>
    <Hero />
    <Organizations />
    <Get />
    <Choose/>
    <Support/>
    <Faqs />
    <Ready />
    </>
  

  )
}

export default Webiner