import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Body = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-16">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center font-[600]'>
            VirtualR build tools
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                {' '}for developers
            </span>
        </h1>
        <p className='mt-10 text-lg text-neutral-500 text-center max-w-4xl'>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" 
                className='bg-gradient-to-r from-orange-500 to-red-800 rounded-md py-3 px-4 mx-3'
            >
                Start for free
            </a>
            <a href="" className='rounded-md py-3 px-4 mx-3 border'>
                Documentation
            </a>
        </div>
        <div className='flex justify-center mt-10 gap-5'>
            <video 
                src={video1}
                autoPlay
                loop
                type='video/mp4'
                className='rounded-lg w-1/2 shadow-lg border border-neutral-600  my-4'
            >
                {/* <source src={video1}/> */}
                Your browser doesnt support the video
            </video>
            <video 
                src={video2}
                autoPlay
                loop
                type='video/mp4'
                className='rounded-lg w-1/2 shadow-lg border border-neutral-600  my-4'
            >
                Your browser doesnt support the video
            </video>
        </div>
    </div>
  )
}

export default Body