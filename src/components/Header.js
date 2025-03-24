import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='border border-b-4 bg-white fixed top-0 w-full z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            {/* Logo */}
            <div className='flex items-center'>
              <img src='./palm8.png' alt="Logo" className='h-12' />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <ul className='flex items-center space-x-8'>
                <div className='flex items-center'>
                  <li>
                    <Link to='/' className='hover:text-gray-500 transition duration-300'>Home</Link>
                  </li>
                  <img src='./drop.svg' alt="Dropdown" className='ml-1 h-4' />
                </div>
                <li>
                  <Link to='business' className='hover:text-gray-500 transition duration-300'>Business</Link>
                </li>
                <div className='flex items-center'>
                  <li>
                    <Link to='company' className='hover:text-gray-500 transition duration-300'>Company</Link>
                  </li>
                  <img src='./drop.svg' alt="Dropdown" className='ml-1 h-4' />
                </div>
                <li>
                  <Link to='press' className='hover:text-gray-500 transition duration-300'>Press</Link>
                </li>
              </ul>
              <div className='flex items-center ml-8'>
                <img src='./niger.png' alt="Flag" className='h-5' />
                <img src='./drop.svg' alt="Dropdown" className='ml-1 h-4' />
              </div>
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className='md:hidden flex items-center'>
              <button 
                onClick={toggleMenu}
                className='focus:outline-none'
                aria-label="Toggle menu"
              >
                {!isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-white border-t'>
            <div className='container mx-auto px-4 py-4'>
              <ul className='space-y-4'>
                <li className='py-2 border-b'>
                  <div className='flex justify-between items-center'>
                    <Link to='/' className='block hover:text-gray-500' onClick={toggleMenu}>Home</Link>
                    <img src='./drop.svg' alt="Dropdown" className='h-4' />
                  </div>
                </li>
                <li className='py-2 border-b'>
                  <Link to='business' className='block hover:text-gray-500' onClick={toggleMenu}>Business</Link>
                </li>
                <li className='py-2 border-b'>
                  <div className='flex justify-between items-center'>
                    <Link to='company' className='block hover:text-gray-500' onClick={toggleMenu}>Company</Link>
                    <img src='./drop.svg' alt="Dropdown" className='h-4' />
                  </div>
                </li>
                <li className='py-2 border-b'>
                  <Link to='press' className='block hover:text-gray-500' onClick={toggleMenu}>Press</Link>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <img src='./niger.png' alt="Flag" className='h-5' />
                    <img src='./drop.svg' alt="Dropdown" className='ml-1 h-4' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Spacer to prevent content from hiding under the fixed header */}
      <div className='h-20'></div>
    </div>
  )
}

export default Header;