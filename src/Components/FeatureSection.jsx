import React from 'react'

function FeatureSection() {
  return (
    <div>
        <div className="bg-white text-black py-10 lg:py-16">
            <div className="lg:conatiner">
                <div className="columns-1 mx-auto text-center justify-center mb-10">
                    <h2 className='lg:text-4xl text-3xl mb-4 lg:mb-4'>Feature Section</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="lg:columns-3 columns-1 p-2 gap-6">

                        <div className="w-full relative p-5 mb-5 border">
                            <h4 className='text-xl lg:text-2xl mb-3'>Feature </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                        <div className="w-full relative  p-5 mb-5 border">
                            <h4 className='text-xl lg:text-2xl mb-3'>Feature </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

                        <div className="w-full relative  p-5 mb-5 border">
                            <h4 className='text-xl lg:text-2xl mb-3'>Feature </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default FeatureSection