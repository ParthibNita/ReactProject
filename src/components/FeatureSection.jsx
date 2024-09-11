import React from 'react'
import { features } from '../constants'

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-[750px] border-b" id='features'>
        <div className="text-center">
            <span className='bg-neutral-900 text-orange-500 rounded-full h-6 
                    px-3 py-2 text-md font-medium uppercase'>
                features
            </span>
            <h2 className='text-3xl lg:text-5xl tracking-wide sm:text-6xl mt-10 lg:mt-20'> 
                Easily build
                <span className='bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent'>
                    {' '}your code
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-14 lg:mt-20">
            {features.map((e,idx)=>(
                <div className='flex sm:w-1/2 lg:w-1/3' key={idx}>
                    {/* <div className="flex"> */}
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                            {e.icon}
                        </div>
                        <div>
                            <h5 className='mt-1 mb-6 text-xl'>{e.text}</h5>
                            <p className='text-neutral-500 text-md p-2 mb-20'>
                                {e.description}
                            </p>
                        </div>
                    {/* </div> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureSection