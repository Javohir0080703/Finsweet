import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='py-8 bg-white'>
      <div className='containerb flex items-center justify-between '>
        <p className='text-#282938 text-base font-medium leading-7 hover:text-#BBBBCB transition'>Copyright 2022, Finsweet.com</p>
        <nav className=' '>
          <ul className=' flex space-x-7 items-center'>
            <li>
              <Link className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className='text-base whitespace-nowrap font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                About us
              </Link>
            </li>
            <li>
              <Link to="/features" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/Blog" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer