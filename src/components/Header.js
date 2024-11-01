import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
    <div className='flex gap-96 border border-b-4  bg-white fixed top-0 w-full z-50'>
      <div className='mt-10 ml-32'>
<img src='./palm8.png'></img>
      </div>
      <div className='flex gap-16 mt-12'>
      <div className=''>
        <ul className='flex gap-16'>
            <div className='flex'>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <img src='./drop.svg'></img>
            </div>
            <Link to='business'>Business</Link>
            <div className='flex'>
            <li>
            <Link to='company'>Company</Link>
            </li>
            <img src='./drop.svg'></img>
            </div>
            <Link to='press'>Press</Link>
        </ul>
      </div>
      <div className='flex'>
      <img src='./niger.png' className='h-5'></img>
      <img src='./drop.svg' className='-mt-2'></img>
      </div>
      </div>
    </div>




    
    </div>
  )
}

export default Header;
