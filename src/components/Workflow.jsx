import React from 'react'
import code from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <div className="mt-15 lg:mt-20 min-h-[800px] border-neutral-800 border-b" id='workflow'>
        <h2 className='text-3xl text-center mt-6 sm:text-5xl lg:text-6xl tracking-wide'>
            Accelerate Your
            <span className='bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent'>
                {' '}Coding Workflow
            </span>
        </h2>
        <div className="flex flex-wrap justify-center p-10">
            <div className='p-2 lg:w-1/2 w-full'>
                <img src={code} alt="code.jpg" />
            </div>
            <div className='pt-12 lg:w-1/2'>
                {checklistItems.map((e,idx)=>(
                    <div key={idx} className='flex mb-12'>
                        <div className='mx-6 h-10 w-10 p-2 justify-center items-center 
                                        rounded-full text-green-600 bg-neutral-800'>
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className='text-xl mb-2'>{e.title}</h5>
                            <p className='text-neutral-500 text-md'>
                                {e.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow