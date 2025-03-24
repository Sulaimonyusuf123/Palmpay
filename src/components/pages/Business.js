import React from 'react'
import { useRef } from 'react'
import ReactPlayer from 'react-player'
import Footer from '../Footer'
const VIDEO_PATH ='https://www.youtube.com/watch?v=PbF3rIAPnYk&pp=ygUHcGFsbXBheQ%3D%3D'

const Business = () => {
  const playerRef = useRef(null)
  return (
    <div>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row mt-16 md:mt-32 px-4 md:px-0'>
        <div className='md:ml-36 text-center md:text-left'>
          <div>
            <h1 className='text-3xl md:text-4xl'><b>Make more money</b></h1>
            <h1 className='text-3xl md:text-4xl'><b>with the palmpay</b></h1>
            <h1 className='text-3xl md:text-4xl'><b>POS</b></h1>
          </div>
          <div className='mt-4'>
            <p>Earn high commissions and offer customers</p>
            <p>reliable payments as a Palmpay Mobile Money agents.</p>
            <p>Download and sign up to the Palmpay Business app</p>
            <p>to get started</p>
            <button className='bg-purple-900 p-2 mt-4 text-white border border-5 rounded w-40'> Get started now</button>
          </div>
        </div>
        <img src='./art7.png' className='w-full md:w-2/6 h-auto md:h-96 mt-8 md:mt-0 md:ml-40 mb-12 mx-auto'></img>
      </div>

      {/* Become An Agent Section */}
      <div className='bg-[#F6F6FA] px-4 md:px-0'>
        <div className='md:ml-36'>
          <div className='pt-8 mb-8 text-center md:text-left'>
            <h1 className='text-2xl md:text-3xl mb-2'><b>Become A palmpay Agent</b></h1>
            <p>we are currently onboarding agents in all states of Nigeria. You can self register on</p>
            <p>palmpay Business app or click on the apply now button to fill out a request form</p>
            <p>for a call back.</p>
          </div>

          <div className='flex flex-col md:flex-row pb-8'>
            <div className='w-full md:w-auto'>
              <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl h-auto md:h-64 mb-6 md:mb-0'>
                <img src='./number3.png' className='mx-auto md:mx-0'></img>
                <h1 className='mt-4 mb-6 text-center md:text-left'><b>Earn More Money</b></h1>
                <p className='text-center md:text-left'>We're here to help you grow your business through</p>
                <p className='text-center md:text-left'>attractive commissions, low fees and performance </p>
                <p className='text-center md:text-left'>incentives.</p>
              </div>

              <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl mt-6 md:mt-20 h-auto md:h-64'>
                <img src='./number3.png' className='mx-auto md:mx-0'></img>
                <h1 className='mt-4 mb-6 text-center md:text-left'><b>The right device for you</b></h1>
                <p className='text-center md:text-left'>Whether you're just getting started or have complex</p>
                <p className='text-center md:text-left'>business requirements, we have the solution for your</p>
                <p className='text-center md:text-left'>Financing options available</p>
              </div>
            </div>

            <div className='mt-6 md:mt-0 md:ml-8 lg:ml-52'>
              <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl h-auto md:h-64'>
                <img src='./number3.png' className='mx-auto md:mx-0'></img>
                <h1 className='mt-4 mb-6 text-center md:text-left'><b>24/7 Support</b></h1>
                <p className='text-center md:text-left'>You'll have access to a dedicated sales manager and </p>
                <p className='text-center md:text-left'>our 24/7 customer care line to support you.</p>
              </div>
              <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl mt-6 md:mt-20 h-auto md:h-64'>
                <img src='./number3.png' className='mx-auto md:mx-0'></img>
                <h1 className='mt-4 mb-6 text-center md:text-left'><b>Value added services</b></h1>
                <p className='text-center md:text-left'>We don't jsut stop at payments. Gets tools to help you</p>
                <p className='text-center md:text-left'>manage your business and grow your customers base</p>
                <p className='text-center md:text-left'> and revenue </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className='text-center px-4 md:px-0 mt-8'>
        <div>
          <h1 className='text-3xl md:text-5xl lg:text-6xl'>Discover the Most Reliable and </h1>
          <h1 className='text-3xl md:text-5xl lg:text-6xl'>Hussle-free POS with palmpay</h1>
          <div className='flex justify-center mt-12'>
            <div className='w-full md:w-auto'>
              <ReactPlayer 
                ref={playerRef} 
                url={VIDEO_PATH} 
                controls={true} 
                width="100%" 
                height="100%"
                style={{ maxWidth: '640px' }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='flex flex-col md:flex-row px-4 md:px-0 md:ml-40 mt-16 md:mt-20 gap-6'>
        <div className='w-full md:w-1/2'>
          <div className='bg-gray-100 border border-1 rounded-xl p-4 md:p-8'>
            <h1 className='text-3xl md:text-4xl mb-4 text-center md:text-left'><b>Choose The Best POS For </b><br/><b>You</b></h1>
            <p className='text-lg md:text-xl text-center md:text-left'>We are happy to advise you to help you choose the best <br className='hidden md:block'/>POS for your needs. Simply fill out our <br className='hidden md:block'/>application form to get a call back from a sales<br className='hidden md:block'/> representative. Financing options available.</p>
            <div className='md:ml-20 mt-8 md:mt-12'>
              <div className='flex flex-col md:flex-row gap-4 items-center'>
                <img src='./POS.png' className='w-full md:w-auto'></img>
                <img src='./POS2.png' className='w-full md:w-auto mt-4 md:mt-0'></img>
              </div>
              <img src='./POS3.png' className='w-[300px] max-w-full mx-auto md:ml-8 mt-4'></img>
            </div>
          </div>

          <div className='bg-gray-100 border border-1 rounded-xl mt-8 p-1'>
            <div className='p-6 mb-4 md:mb-8'>
              <h1 className='text-3xl md:text-4xl mt-4 ml-0 md:ml-8 text-center md:text-left'><b>Sharp-Sharp</b> <br/><b>Settlements</b></h1>
              <p className='mt-6 md:mt-8 ml-0 md:ml-8 text-lg md:text-xl text-center md:text-left'>With PalmPay, you have the freedom to access <br className='hidden md:block'/>your money the moment you make it through <br className='hidden md:block'/>instant settlement.</p>
            </div>
            <div className='flex justify-center'>
              <img src='./naira 1.png' className='w-full max-w-[600px] mb-8'></img>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 mt-8 md:mt-0'>
          <div className='bg-[#6306B2] border border-1 rounded-xl w-full md:w-[600px]'>
            <h1 className='text-3xl md:text-4xl text-white p-6 ml-0 md:ml-4 text-center md:text-left'><b>High Commissions,Low</b> <br/> <b>Pricing</b></h1>
            <p className='px-4 md:px-0 md:ml-12 text-lg md:text-xl text-white text-center md:text-left'>Earn more with PalmPay! Enjoy low fees and earn <br className='hidden md:block'/>extra incentives for hitting performance milestones.</p>
            <div className='flex justify-center md:justify-start'>
              <img src='./POS FLEX.png' className='w-[250px] md:w-[300px] md:ml-32 mt-8 md:mt-40 mb-8 md:mb-0'></img>
            </div>
          </div>
          
          <div className='bg-gray-100 border border-1 rounded-xl mt-8 p-4 md:p-8'>
            <h1 className='text-3xl md:text-4xl ml-0 md:ml-8 text-center md:text-left'><b>Great Support To </b><br/><b>Help You</b></h1>
            <p className='mt-6 md:mt-10 ml-0 md:ml-8 text-lg md:text-xl text-center md:text-left'>Every agent is allocated a dedicated sales<br className='hidden md:block'/> manager. We also have several support channels <br className='hidden md:block'/>for you to reach us anytime you have a question or<br className='hidden md:block'/> need assistance.</p>
            <p className='text-lg md:text-xl ml-0 md:ml-8 mt-6 md:mt-10 text-center md:text-left'>Your customers don't need to worry about following <br className='hidden md:block'/> up about issues with transactions as we will <br className='hidden md:block'/>automatically work to resolve them on your behalf. <br className='hidden md:block'/>And you'll also have access to an easy to use online portal<br className='hidden md:block'/> to help you monitor your activities and <br className='hidden md:block'/>manage your account.</p>
            <div className='flex justify-center md:justify-start'>
              <button className='mt-6 p-4 bg-[#6306B4] border border-none rounded-lg text-white w-36 md:ml-8'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Business