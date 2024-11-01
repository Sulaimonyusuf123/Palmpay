import React from 'react'
// import YouTube from 'react-youtube'
// var getYouTubeID = reqire('get-youtube-id');
import { useRef } from 'react'
import ReactPlayer from 'react-player'
const VIDEO_PATH ='https://www.youtube.com/watch?v=PbF3rIAPnYk&pp=ygUHcGFsbXBheQ%3D%3D'




const Business = () => {
  const playerRef = useRef(null)
  return (
    <div>


      <div className='flex mt-32  '>
        <div className=' ml-36'>
        <div >
        <h1 className='text-4xl mt-16'><b>Make more money</b></h1>
        <h1 className='text-4xl'><b>with the palmpay</b></h1>
        <h1 className='text-4xl'><b>POS</b></h1>
        </div>
        <div className='mt-4'>
          <p>Earn high commissions and offer customers</p>
          <p>reliable payments as a Palmpay Mobile Money agents.</p>
          <p>Download and sign up to the Palmpay Business app</p>
          <p>to get started</p>
          <button className='bg-purple-900 p-2 mt-4 text-white border border-5 rounded w-40'> Get started now</button>
        </div>
        </div>
        <img src='./art7.png' className='w-2/6 h-96 ml-40 mb-12'></img>
      </div>



      <div className=' bg-[#F6F6FA]'>
      <div className='ml-36'>

      <div className='pt-8 mb-8'>
      <h1 className='text-3xl mb-2'><b>Become A palmpay Agent</b></h1>
      <p>we are currently onboarding agents in all states of Nigeria. You can self register on</p>
      <p>palmpay Business app or click on the apply now button to fill out a request form</p>
      <p>for a call back.</p>
      </div>

      <div className='flex'>
      <div>
        <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl h-64'>
          <img src='./number3.png'></img>
          <h1 className='mt-4 mb-6'><b>Earn More Money</b></h1>
          <p>We're here to help you grow your business through</p>
          <p>attractive commissions, low fees and performance </p>
          <p>incentives.</p>
        </div>

        <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl mt-20 h-64'>
          <img src='./number3.png'></img>
          <h1 className='mt-4 mb-6'><b>The right device for you</b></h1>
          <p>Whether you're just getting started or have complex</p>
          <p>business requirements, we have the solution for your</p>
          <p>Financing options available</p>
        </div>
        </div>

        <div className='ml-52 mb-24 '>
        <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl h-64'>
        <img src='./number3.png'></img>
          <h1 className='mt-4 mb-6'><b>24/7 Support</b></h1>
          <p>You'll have access to a dedicated sales manager and </p>
          <p>our 24/7 customer care line to support you.</p>
        </div>
        <div className='p-8 bg-white border border-1 rounded hover:bg-blue-500 hover:text-white hover:border border-none rounded-lg hover:shadow-3xl mt-20 h-64'>
          <img src='./number3.png'></img>
          <h1 className='mt-4 mb-6'><b>Value added services</b></h1>
          <p>We don't jsut stop at payments. Gets tools to help you</p>
          <p>manage your business and grow your customers base</p>
          <p className=''> and revenue </p>
        </div>

        </div>

      </div>

</div>
      </div>



      <div className='text-center text-6xl mt-8'>
      <div className=''>
        <h1 >Discover the Most Reliable and </h1>
        <h1>Hussle-free POS with palmpay</h1>
       <div className='flex justify-center mt-12'>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true}/>
       </div>
      </div>



      </div>

<div className='flex ml-40 mt-20 gap-6'>
<div>

  <div className=' bg-gray-100 broder border-1 rounded-xl p-8'>
    <h1 className='text-4xl mb-4'><b>Choose The Best POS For </b><br/><b>You</b></h1>
    <p className='text-xl'>We are happy to advise you to help you choose the best <br/>POS for your needs. Simply fill out our <br/>application form to get a call back from a sales<br/> representative. Financing options available.</p>
  <div className='ml-20'>

  <div className='flex mt-12 gap-4 '>
  <img src='./POS.png' className=''></img>
  <img src='./POS2.png'></img>
  </div>
  <img src='./POS3.png' className='w-[300px] ml-8 mt-4'></img>
  </div>
  </div>

  <div className=' bg-gray-100 broder border-1 rounded-xl mt-8 p-1'>
    <div className='p-6 mb-8'>
      <h1 className='text-4xl mt-4 ml-8'><b>Sharp-Sharp</b> <br/><b>Settlements</b></h1>
      <p className='mt-8 ml-8 text-xl'>With PalmPay, you have the freedom to access <br/>your money the moment you make it through <br/>instant settlement.</p>
      </div>
      <div className=''>
      <img src='./naira 1.png' className='w-[600px] mb-8'></img>
      </div>
    
  </div>
  </div>


  <div>
    <div className='bg-[#6306B2] broder border-1 rounded-xl w-[600px]'>
    <h1 className='text-4xl text-white p-6 ml-4 '><b>High Commissions,Low</b> <br/> <b>Pricing</b></h1>
    <p className=' ml-12 text-lg text-white text-xl'>Earn more with PalmPay! Enjoy low fees and earn <br/>extra incentives for hitting performance milestones.</p>
      <img src='./POS FLEX.png' className='w-[300px] ml-32 mt-40 '></img>
    </div>
<div className='bg-gray-100 broder border-1 rounded-xl mt-8 p-8'>
  <h1 className='text-4xl  ml-8'><b>Great Support To </b><br/><b>Help You</b></h1>
  <p className='mt-10 ml-8 text-xl'>Every agent is allocated a dedicated sales<br/> manager. We also have several support channels <br/>for you to reach us anytime you have a question or<br/> need assistance.</p>
  <p className='text-xl ml-8 mt-10'>Your customers don't need to worry about following <br/> up about issues with transactions as we will <br/>automatically work to resolve them on your behalf. <br/>And you'll also have access to an easy to use online portal<br/> to help you monitor your activities and <br/>manage your account.</p>
  <button className='mt-6 p-4 bg-[#6306B4] border border-none rounded-lg text-white w-36 ml-8'>Contact Us</button>
</div>
  </div>
</div>

    </div>
  )
}

export default Business
