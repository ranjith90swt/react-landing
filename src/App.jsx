import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import Slider from './Components/Slider'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import FormSection from './Components/FormSection'

function App() {
  return (
   <div>
   
    <Navbar />
    <Slider />
    <HeroSection />
    <FeatureSection />
    <Testimonials />
    <FormSection />
    <Footer />
   </div>

  )
}

export default App