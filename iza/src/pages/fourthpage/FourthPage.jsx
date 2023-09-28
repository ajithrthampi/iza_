import React from 'react'
import ProgressBar from '../../components/progressbar/ProgressBar'
import Links from '../../components/links/Links'
import Cashback from '../../assets/Cashback.svg'
import imagethree from '../../assets/imagethree.png'
import imagetwo from '../../assets/imagetwo.png'

const FourtPage = () => {
  return (
    <div className='flex justify-center items-center bg-[#B0F2B4] h-screen w-[100%] lg:gap-[90px] md:gap-[60px] '>
      <Links />
      <div className=' flex flex-col  justify-center items-center    md:w-[80%] md:h-[90%]   md:gap-5 sm:gap-4'>
        <div>
          <img src={Cashback} alt='' className='w-[1020px]' />
        </div>

        {/* secondpart */}
        <div className='playfair font-[serif] lg:text-[30px] md:text-[25px] sm:text-[18px] '>
          check out the latest wear collections
        </div>
        {/* thirdpart */}
        <div className='flex  gap-2'>
          <div>
            <img className='w-[700px] h-[400px]' src={imagethree} alt='' />
          </div>
          <div>
            <img className='w-[300px] h-[400px]' src={imagetwo} alt='' />
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}
export default FourtPage
