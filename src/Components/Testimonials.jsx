import React from 'react'
import { testimonials } from '../Constants'

function Testimonials() {
  return (
    <div>
        <div className='md:conatiner container py-6 mx-auto'>
            <h2 className='main-title'> What People Are Saying</h2>
            <div className="flex flex-wrap p-2 justify-center">
               {testimonials.map((item, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                     <div className="w-full p-4 border-solid border border-slate-200 rounded-md">
                        <h4 className='text-2xl bold mb-3 text-gray-950'>{item.name}</h4>
                        <p className='mb-2 text-gray-600'>{item.description}</p>
                        <span className='mt-2 font-semibold'>
                            {item.location}
                        </span> <br></br>
                        <button class="text-green-600 py-2 mt-2 md:mt-2">Readmore </button>

                     </div>
                  </div>
               ))
               }
              
            </div>
        </div>
    </div>
  )
}

export default Testimonials