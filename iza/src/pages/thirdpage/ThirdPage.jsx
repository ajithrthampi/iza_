import React from 'react'
import './thirdpage.css'
import Links from '../../components/links/Links'
import Button from "../../components/button/Button"
import ProgressBar from '../../components/progressbar/ProgressBar'
import thirdpageimg1 from '../../assets/thirdpageimg1.png'

const ThirdPage = () => {
  return (
    <div className='flex justify-center items-center bg-[#B0F2B4]   h-screen w-[100%] lg:gap-[90px] md:gap-[60px] '>
      <Links />
      <div className='flex flex-col justify-center items-center bg-red-10 md:w-[80%] md:h-[90%] lg:gap-8 md:gap-5 sm:gap-5'>
        {/* Head part */}
        <div className='playfair lg:text-[30px] md:text-[25px] sm:text-[18px]'>
          Spring/Summer 2023 Collection: Bright and Bold
        </div>
        <div className='flex gap-20'>
          {/* infinite slide */}
          <div className='w-[500px] h-[500px]  flex justify-around'>
            {/* first slide */}
            <div className='parent  h-[500px]'>
              <div className='child flex flex-col gap-6'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
              </div>
              <div className='child flex flex-col gap-6'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
              </div>
            </div>
            <div className='another  h-[500px]'>
              <div className='anotherchild flex flex-col gap-6'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
              </div>
              <div className='anotherchild flex flex-col gap-6'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
              </div>
            </div>
            <div className='parent  h-[500px]'>
              <div className='child flex flex-col gap-6'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
              </div>
              <div className='child flex flex-col gap-6'>
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
                <img
                  src={thirdpageimg1}
                  alt=''
                  className='h-[100px] w-[100px]'
                />
              </div>
            </div>
            {/* second slide */}
            <div></div>
            {/* third slide */}
            <div></div>
          </div>

          {/* Product Details */}
          <div className='flex flex-col items-center md:items-start justify-center'>
            <div>
              <h1 className='font- text-[20px] font-black pt-2'>
                Firdaus Spring Collection
              </h1>
              <p className='md:w-72 w-60 font-poppins xl:text-sm text-sm font-medium pt-5 tracking-wider'>
                When it comes to finding a dress to wear on a party out, the
                options are endless. Certain outfits flatter certain body types,
                weather, and occasions, so it can be overwhelming.{' '}
              </p>
            </div>
            <div className='mt-6 text-center lg:text-left flex justify-center items-center gap-6 relative'>
              <Button/>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}

export default ThirdPage
