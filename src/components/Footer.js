import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#E6E6E6]'>
        {/* Desktop Footer */}
        <div className='hidden md:flex'>
          <div className='ml-32 pt-12'>
            <p className='text-2xl'><a href="#"><b>Contact us</b></a></p>
            <div className='flex gap-3 mt-8 text-2xl'>
              <p>Email: </p>
              <a>Support@palmpay.com</a>
            </div>
            <div className='flex gap-3 mt-8 text-2xl'>
              <p>Phone: </p>
              <a>018886888</a>
            </div>
            <div className='flex gap-4 mt-8'>
              <img src='facebook.png' className=''></img>
              <img src='telegram.png'></img>
              <img src='twitter.png'></img>
              <img src='instagram.png'></img>
            </div>
          </div>
          <div className='ml-28 mt-14'>
            <p className='text-2xl'><b>Personal</b></p>
            <p className='mt-8'>Palmpay App</p>
          </div>
          <div className='ml-28 mt-14'>
            <p className='text-2xl'><b>Agents</b></p>
            <p className='mt-8'>POS</p>
            <p className='mt-8'>Apply Now</p>
          </div>
          <div className='ml-28 mt-14'>
            <p className='text-2xl'><b>Company</b></p>
            <p className='mt-8'>About Us</p>
            <p className='mt-8'>career</p>
            <p className='mt-8'>Blog</p>
            <p className='mt-8'>Press</p>
          </div>
          <div className='ml-28 mt-14'>
            <p className='text-2xl'><b>Legal</b></p>
            <p className='mt-8'>Privacy $ cookie Policy</p>
            <p className='mt-8'>Terms $ Conditions</p>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className='md:hidden px-6 py-8'>
          {/* Contact Section */}
          <div className='mb-8'>
            <p className='text-xl font-bold mb-4'><a href="#">Contact us</a></p>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 text-base'>
                <p>Email: </p>
                <a>Support@palmpay.com</a>
              </div>
              <div className='flex gap-2 text-base mt-2'>
                <p>Phone: </p>
                <a>018886888</a>
              </div>
            </div>
            <div className='flex gap-4 mt-6'>
              <img src='facebook.png' className='h-6'></img>
              <img src='telegram.png' className='h-6'></img>
              <img src='twitter.png' className='h-6'></img>
              <img src='instagram.png' className='h-6'></img>
            </div>
          </div>

          {/* Footer Links - Two Column Grid */}
          <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
            {/* Column 1 */}
            <div>
              <p className='text-lg font-bold mb-3'>Personal</p>
              <p className='mb-2'>Palmpay App</p>
            </div>
            
            {/* Column 2 */}
            <div>
              <p className='text-lg font-bold mb-3'>Agents</p>
              <p className='mb-2'>POS</p>
              <p className='mb-2'>Apply Now</p>
            </div>
            
            {/* Column 3 */}
            <div>
              <p className='text-lg font-bold mb-3'>Company</p>
              <p className='mb-2'>About Us</p>
              <p className='mb-2'>career</p>
              <p className='mb-2'>Blog</p>
              <p className='mb-2'>Press</p>
            </div>
            
            {/* Column 4 */}
            <div>
              <p className='text-lg font-bold mb-3'>Legal</p>
              <p className='mb-2'>Privacy $ cookie Policy</p>
              <p className='mb-2'>Terms $ Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer