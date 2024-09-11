import React from 'react'
import {pricingOptions} from '../constants'
import { CheckCircle2 } from 'lucide-react'

const PricingSection = () => {
  return (
    <div className='mt-20 min-h-[750px] border-b border-neutral-800' id='pricing'>
        <h2 className='text-center tracking-wide text-3xl sm:text-5xl lg:text-6xl my-8'>
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((e,idx)=>(
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2' key={idx}>
                    <div className='border border-neutral-700 p-10 rounded-xl shadow-xl'>
                        <p className='text-4xl mb-8'>
                            {e.title}
                            {e.title === 'Pro' && (
                                <span className='text-xl bg-gradient-to-r from-orange-500 to-red-400
                                                 bg-clip-text text-transparent ml-2 mb-4'>
                                    (Most Popular)
                                </span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className='text-5xl mt-6 mr-2'>{e.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>
                        <ul>
                            {e.features.map((feature, index)=>(
                                <li key={index} className='flex items-center mt-8'>
                                    <div 
                                        className={`${e.title === 'Pro' ? 'text-orange-600'
                                                    :''}`
                                                }>
                                        <CheckCircle2/>
                                    </div>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#"
                            className={`inline-flex text-center justify-center items-center border rounded-lg
                                        border-orange-900 w-full p-5 mt-20 h-12 tracking-tight
                                        ${e.title === 'Pro'? 
                                            'bg-gradient-to-r from-orange-500 to-red-800 hover:bg-orange-700' :
                                            'hover:bg-orange-600'
                                        }
                                        transition duration-300`
                                    }
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PricingSection