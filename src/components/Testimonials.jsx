import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide border-b border-neutral-800 min-h-[800px]' id='testimonials'>
        <h5 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
            What People are Saying
        </h5>
        <div className='flex flex-wrap'>
            {testimonials.map((e,idx)=>(
                <div key={idx} className=' w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral-900 rounded-lg shadow-2xl p-6 font-thin'>
                        <p>
                            {e.text}
                        </p>
                        <div className='flex items-start mt-8 gap-5'>
                            <img
                                src={e.image}
                                alt=""
                                className='w-12 h-12 rounded-full border border-neutral-300'
                            />
                            <div>
                                <h6>{e.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-600'>
                                    {e.company}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials