import React, { useState } from 'react'
import logo from "../assets/vcare_logo.webp";
import { NavItems } from '../Constants';
import { Menu, X } from "lucide-react";

function Navbar() {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div>
        <nav className='sticky top-0 z-50 py-3'>
           <div className="container px-4 mx-auto relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                   {/* <img className='h-20' src={logo} alt="" /> */}
                   <h2 className='lg:text-3xl md:2xl sm:text-xl'>Logo</h2>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {NavItems.map((item, index) => (
                        <li key={index}> <a href={item.href}>{item.label}</a></li>
                    ))
                    }
                </ul>

                <div className="hidden lg:flex justify-center space-x-6 items-center">
                   <a href="" className='book-btn'> Book Now</a>
                   <a href="" className='book-btn'> Sign Up</a>
                </div>

                <div className="lg:hidden md:flex fex-col justify-end">
                  <button onClick={toggleNavbar}> 
                    {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                </div>
                { mobileDrawerOpen && (

                  <div className="fixed right-0 top-20 px-3 py-3 z-10 w-full bg-neutral-900 justify-center items-center lg:hidden">
                     <ul>
                       {NavItems.map((item, index) => (
                        <li key={index} className='py-2'> <a href={item.href}>{item.label}</a></li>
                       ))

                       }
                     </ul>
                     <div className="flex mt-4 space-x-6">
                        <a href="" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800'>Sign in</a>
                        <a href="" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800'>Book Now</a>
                     </div>
                  </div>

                )}

              </div>
           </div>
        </nav>
    </div>
  )
}

export default Navbar