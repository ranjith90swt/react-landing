import React from 'react'
import videoBg from "../assets/video-bg.webp";
import { Sliders } from 'lucide-react';
function HeroSection() {
  return (
    <div>
    
        <div className="lg:container justify-center mt-4 py-6 px-4 mx-auto relative">
            
            <div className="columns-1 justify-center">
                <div className="max-w-3xl mx-auto text-center pt-10 lg:pt-20">
                    <h2 className='text-4xl mb-5'>
                    Goat Milk Shampoo For Dry And <span className='bg-gradient-to-r from-orange-700 to-blue-700 bg-clip-text text-transparent'>Damaged</span> 
                    </h2>
                    <p className='text-base'>
                    Tailwind lets you conditionally apply utility classes in different states using variant modifiers.
                    </p>
                </div>
               
            </div>

            <div className="mx-auto columns-1 md:columns-2 lg:columns-2 mt-5 lg:mt-10">
                <div className="video mb-5 lg:mb-5">
                  <img src={videoBg} className='w-full' alt="" />
                </div>
                <div className="video mb-5 lg:mb-5">
                  <img src={videoBg} className='w-full' alt="" />
                </div>
               
            </div>
           
        </div>
    </div>
  )
}

export default HeroSection