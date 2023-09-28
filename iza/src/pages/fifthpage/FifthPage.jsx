import React from 'react'
import ProgressBar from '../../components/progressbar/ProgressBar'
import Links from '../../components/links/Links'
import './fifthpage.css'
import imagetwo from  "../../assets/imagetwo.png"

const FifthPage = () => {
  return (
    <div className='flex justify-center items-center bg-[#B0F2B4] h-screen w-[100%] lg:gap-[90px] md:gap-[60px] '>
      <Links />
      <div className=' flex flex-col bg-red-100 justify-center items-center    md:w-[80%] md:h-[90%]   md:gap-5 sm:gap-4'>
        {/* secondpart */}
        <div className='playfair font-[serif] lg:text-[30px] md:text-[25px] sm:text-[18px] '>
          check out the latest wear collections
        </div>
        {/* carosel part */}

          
      </div>
      <ProgressBar />
    </div>
  )
}
export default FifthPage
