import React from 'react'
import { resourceLinks, quickLinks, contactLinks } from '../Constants'

function Footer() {
  return (
    <footer className='footer'>
        <div className='md:conatiner container mt-10 py-4 mb-10 mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-4">
                <div className='mb-3 p-2'>
                    <h3 className='text-2xl mb-4 '>Resources</h3>
                    <ul className=''>
                        {resourceLinks.map((resource, index) =>(
                            <li className='py-1'> <a href="" className='text-sm'>{resource.text}</a></li>
                        ))
                        }
                    </ul>
                </div>

                <div className='mb-3 p-2'>
                    <h3 className='text-2xl mb-4 '>Quick Links </h3>
                    <ul>
                        {quickLinks.map((quick, index) => (
                           <li  className='py-1' key={index}> <a >{quick.text}</a></li>
                        ))
                        }
                     
                    </ul>
                </div>

                <div className='mb-3 p-2'>
                    <h3 className='text-2xl mb-4 '>Quick Links </h3>
                    <ul>
                        {quickLinks.map((quick, index) => (
                           <li  className='py-1' key={index}> <a >{quick.text}</a></li>
                        ))
                        }
                     
                    </ul>
                </div>

                <div className='mb-3 p-2'>
                    <h3 className='text-2xl mb-4 '>Contact Info</h3>
                    <ul className=''>
                        {contactLinks.map((contact, index) =>(
                            <li className='py-1'> <a href="" className='text'>{contact.text} : {contact.value}</a></li>
                        ))
                        }
                    </ul>
                </div>
            </div>
       </div>
    </footer>
  )
}

export default Footer