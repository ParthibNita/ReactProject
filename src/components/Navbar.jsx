import React,{useState} from 'react'
import { Menu,X } from 'lucide-react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 backdrop-blur-lg z-50 py-3 border-b border-neutral-700/80 shadow-lg'>
        <div className='container mx-auto relative px-4 text-sm'>
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center flex-shrink-0 ml-2">
                    <img className='h-10 w-10' src={logo} alt="alt-logo" />
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul className='hidden lg:flex gap-12 ml-10 text-sm'>
                    {
                        navItems.map((e,idx)=>(
                            <li key={idx}>
                                <a href={e.href}>{e.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden lg:flex gap-8 justify-center items-center mr-3'>
                    <a href="#" className='border py-2 px-3 rounded-md'>Sign In</a>
                    <a href="#" 
                        className='bg-gradient-to-r from-orange-500 to-red-800 rounded-md py-2 px-3'
                    >
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={()=>setMobileMenuOpen((prev)=>!prev)}>
                        {mobileMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div 
                    className="fixed right-0 z-20 w-full flex flex-col items-center bg-neutral-900 lg:hidden"
                >
                    <ul className='w-full'>
                        {navItems.map((e,idx)=>(
                            <li key={idx} className='py-4 text-center border-b border-neutral-800'>
                                <a href={e.href}>{e.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-8 mt-5 mb-10">
                        <a href="#" className='border py-2 px-3 rounded-md text-center'>Sign In</a>
                        <a href="#"
                            className='bg-gradient-to-r from-orange-500 to-red-800 rounded-md py-2 px-3'
                        >
                            Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar