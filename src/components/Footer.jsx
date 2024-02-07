import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer className='py-8 bg-white z-0'>
      <div className='containerb www:flex block items-center justify-between '>
        <p className='text-#282938 text-center www:text-left mb-5 www:mb-0 text-base font-medium www:leading-7'>Copyright 2022, Finsweet.com</p>
        <nav className=' navactive w-full hidden eee:block max-w-[50px] mx-auto www:mx-0 eee:max-w-[461px] '>
          <ul className=' block eee:flex space-x-0 space-y-3 eee:space-y-0 eee:space-x-7 items-center '>
            <li>
              <NavLink to="/" onClick={handleButtonClick} className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleButtonClick} className='text-base whitespace-nowrap font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleButtonClick} to="/features" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleButtonClick} to="/pricing" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleButtonClick} to="/portfolio" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleButtonClick} to="/Blog" className='text-base font-medium leading-7 text-#282938 hover:text-#BBBBCB transition-all '>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer