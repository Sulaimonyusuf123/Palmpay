import React from 'react';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='text-center mt-16 px-4 md:px-0'>
        <div>
          <h1 className='text-4xl md:text-8xl text-black mt-20 md:mt-32'><b>Press $ Media</b></h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4'>
          <button className='bg-black text-white p-3 md:p-4 w-full md:w-48 border border-5 rounded hover:bg-yellow-200 hover:text-blue-500 md:mr-12 mb-4 md:mb-0'>Contact PR</button>
          <div className='flex gap-6 md:mr-16'>
            <p>Media Kit </p>
            <a><img src='./right.svg' className='w-4 mt-1 cursor-pointer'></img></a>
          </div>
        </div>
      </div>

      {/* Press Release Section */}
      <div className='flex flex-col md:flex-row justify-between mt-16 md:mt-32 px-4 md:px-0'>
        <p className='text-3xl md:text-6xl text-center md:text-left md:ml-36 mb-4 md:mb-0'><b>Press Release</b></p>
        <div className='flex justify-center md:mr-60 gap-4 text-xl md:text-2xl'>
          <p><b>See all</b></p>
          <a><img src='./right.svg' className='w-4 mt-2 cursor-pointer'></img></a>
        </div>
      </div>

      {/* Press Release Cards */}
      <div className='flex flex-col md:flex-row mt-10 md:mt-20 mx-4 md:w-10/12 md:ml-32 p-4 bg-gray-100 rounded-xl gap-6 md:gap-2'>
        <div className='border border-none rounded-2xl bg-gray-100 w-full md:w-7/12 p-4 mb-6 md:mb-0 md:ml-4'>
          <img src='./art1.jpg' className='w-full rounded-2xl'></img>
          <p className='mt-4 md:mt-8'>Semtember 5,2022</p>
          <hr className='mt-4 bg-black'></hr>
          <p className='mt-4'> Palmpay celebrate anniversary with N 300 Million <br className='hidden md:block'></br>Giveaways </p>
          <div className='flex gap-4 mt-2'>
            <p className='text-blue-500'><a href='#'>Read More</a></p>
            <a><img src='./right.svg' className='w-4 mt-1 cursor-pointer'></img></a>
          </div>
        </div>
        <div className='border border-none rounded-2xl bg-gray-100 w-full md:w-7/12 p-4 md:ml-12'> 
          <img src='./art2.png' className='w-full rounded-2xl'></img>
          <p className='mt-4 md:mt-8'>August 30, 2022</p>
          <hr className='mt-4 bg-black'></hr>
          <p className='mt-4'>Palpay hits 10 million user milestone in Nigeria</p>
          <div className='flex mt-4 gap-2'>
            <p className='text-blue-500'><a href='#'>Read More</a></p>
            <a><img src='./right.svg' className='w-4 mt-1 cursor-pointer'></img></a>
          </div>
        </div>
      </div>

      {/* In the Media Section */}
      <div>
        <h1 className='text-3xl md:text-5xl text-center md:text-left mx-4 md:mx-0 md:ml-32 mt-12 md:mt-16'><b>In the Media</b></h1>
      </div>

      {/* Media Cards */}
      <div className='flex flex-col md:flex-row mt-6 md:mt-10 mx-4 md:w-10/12 md:ml-32 p-4 border-none rounded-xl gap-6'>
        <div className='border border-gray-200 rounded-2xl w-full md:w-7/12 p-4 md:ml-4'> 
          <img src='./art3.png' className='w-full rounded-2xl'></img>
          <div className='flex flex-col md:flex-row md:justify-between mt-4 md:mt-8'>
            <p>Vanguard</p>
            <p className='md:ml-36'>March, 25, 2023</p>
          </div>
          <hr className='mt-4 bg-black'></hr>
          <p className='mt-4'>Palpay hits 10 million user milestone in Nigeria</p>
          <div className='flex mt-4 gap-2'>
            <p className='text-blue-500'><a href='#'>Read More</a></p>
            <a><img src='./right.svg' className='w-4 mt-1 cursor-pointer'></img></a>
          </div>
        </div>

        <div className='border border-gray-200 rounded-2xl w-full md:w-7/12 p-4 md:ml-8'> 
          <img src='./art4.png' className='w-full rounded-2xl'></img>
          <div className='flex flex-col md:flex-row md:justify-between mt-4 md:mt-8'>
            <p>TechCrunch</p>
            <p className='md:ml-36'>Nov, 13, 2019</p>
          </div>
          <hr className='mt-4 bg-black'></hr>
          <p className='mt-4'>Palmpay hits 10 million user milestone in Nigeria</p>
          <div className='flex mt-4 gap-2'>
            <p className='text-blue-500'><a href='#'>Read More</a></p>
            <a><img src='./right.svg' className='w-4 mt-1 cursor-pointer'></img></a>
          </div>
        </div>

        <div className='border border-gray-200 rounded-2xl w-full md:w-7/12 p-4 md:ml-12 mb-6 md:mb-0'> 
          <img src='./art5.png' className='w-full rounded-2xl'></img>
          <div className='flex flex-col md:flex-row md:justify-between mt-4 md:mt-8'>
            <p>The guardian</p>
            <p className='md:ml-36'>May 14, 2019</p>
          </div>
          <hr className='mt-4 bg-black'></hr>
          <p className='mt-4'>Palpay hits 10 million user milestone in Nigeria</p>
          <div className='flex mt-4 gap-2 mb-6 md:mb-12'>
            <p className='text-blue-500'><a href='#'>Read More</a></p>
            <a><img src='./right.svg' className='w-4 mt-1 cursor-pointer'></img></a>
          </div>
        </div>
      </div>

      {/* Media Kit Section */}
      <div className='flex flex-col md:flex-row mt-12 md:mt-16 bg-[#F6EDFF] px-4 py-8 md:py-0'>
        <div className='md:ml-48 flex justify-center'>
          <img src='./art7.png' className='w-full md:w-10/12'></img>
        </div>
        <div className='mt-8 md:mt-16 md:ml-28 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl'><b>Media Kit</b></h1>
          <p className='mt-2 text-base md:text-lg'>Get PalmPay's images and logo resources for media. We'd <br className='hidden md:block'></br> love to help you create a meaningful story. For more <br className='hidden md:block'></br> information, please contact our PR team.</p>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-7 mt-6 md:mt-8'>
            <button className='bg-black text-white p-4 md:p-6 w-full md:w-auto border-none rounded-lg hover:bg-blue-500 hover:text-black text-xl md:text-2xl'><b>Download Now</b></button>
            <div className='flex gap-4 mt-4 md:mt-0 md:ml-8'>
              <a href="#" className='md:mt-7 text-lg md:text-xl'><b>Contact PR</b></a>
              <img src='./right.svg' className='w-4 self-center md:self-start md:mt-7'></img>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className='flex flex-col md:flex-row px-4 md:px-0'> 
        <div className='mt-12 md:mt-24 md:ml-32 text-center md:text-left'>
          <div>
            <h1 className='mb-4 md:mb-6 text-2xl md:text-3xl'><b>Download The Palmpay App</b></h1>
            <p className='mb-6 md:mb-8 text-base'>Register and start transacting in less than two minutes</p>
          </div>
          <div className='flex justify-center md:justify-start gap-4 md:gap-6 mb-8 md:mb-12'>
            <img src='./number1.png' className='w-32 md:w-48'></img>
            <img src='./number2.png' className='w-32 md:w-48'></img>
          </div>
          <div className='flex flex-col md:flex-row gap-4 md:gap-4 mb-8 md:mb-0'>
            <div className='flex gap-1 justify-center md:justify-start'>
              <p className='text-sm'>Licenced by CBN as a MMO</p> 
              <img src='./number3.png' className='w-4'></img>
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <p className='text-sm md:ml-6'>Deposits insured by</p>
              <img src='./number4.png' className='w-12'></img>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:block'>
          <img src='./number6.png' className='w-10/12 md:w-8/12 md:ml-80 md:-mt-14'></img>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Body;