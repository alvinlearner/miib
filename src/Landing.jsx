import React from 'react'
import MainHeroSection from './components/hero/MainHeroSection'
import AboutUsSection from './components/about/About'
import PricingSection from './components/pricing/Pricing'
import Footer from './components/footer/Footer'


function Landing() {

  return (
    <div >
        <MainHeroSection/>
        <PricingSection/>
       {/* <AboutUsSection/> */}
        <Footer/> 
    </div>
  )
}

export default Landing
