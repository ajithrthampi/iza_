import React, { useState } from 'react'
import Links from '../../components/links/Links'
import ProgressBar from '../../components/progressbar/ProgressBar'
import secondpageimg from '../../assets/secondpageimg.png'
import secondpageimg2 from '../../assets/secondpageimg2.jpeg'
import secondpageimg3 from '../../assets/secondpageimg3.jpeg'
import secondpageimg4 from '../../assets/secondpageimg4.jpeg'
import secondpageimg5 from '../../assets/secondpageimg5.jpeg'

const SecondPage = () => {
  const [state, setState] = useState(secondpageimg5)

  const images = [
    {
      image: secondpageimg,
    },
    {
      image: secondpageimg2,
    },
    {
      image: secondpageimg3,
    },
    {
      image: secondpageimg4,
    },
  ]

  return (
    <div className='flex justify-center items-center bg-[#B0F2B4] h-screen w-[100%] lg:gap-[90px] md:gap-[60px] '>
      <Links />
      <div className=' flex flex-col  justify-center items-center  bg-red-10 md:w-[80%] md:h-[90%]   lg:gap-8 md:gap-5 sm:gap-5'>
        {/* Head part */}
        <div className='playfair  lg:text-[30px] md:text-[25px] sm:text-[18px]  '>
          Spring/Summer 2023 Collection: Bright and Bold
        </div>
        {/* carosel part */}

        <div className='flex justify-center items-center w-[95%] gap-10   '>
          {/* Image */}
          <div className='flex justify-center items-center gap-10'>
            <div className=' rounded  h-[500px]  w-[400px]'>
              <img className=' h-[500px]  w-[400px]  ' src={state} alt='' />
            </div>

            <div className=' flex flex-col  gap-8   '>
              {images.map((element) => (
                <img
                  className='bg-green-100  w-[100px] h-[100px] rounded   '
                  src={element.image}
                  alt=''
                  onClick={() => {
                    setState(element.image)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className=' flex flex-col  items-center md:items-start justify-center  '>
            <div className=' '>
              <h1 className='font- text-[20px] font-black  pt-2 '>
                Firdaus Spring Collection
              </h1>
              <p className='md:w-72 w-60 font-poppins xl:text-sm text-sm font-medium pt-5 tracking-wider  '>
                When it comes to finding a dress to wear on a party out, the
                options are endless. Certain outfits flatter certain body types,
                weather, and occasions, so it ca be overwhelming.{' '}
              </p>
            </div>
            <div className='mt-6 text-center lg:text-left flex justify-cente items-center gap-6 relative'>
              <button className=' px-10 py-2 text-sm rounded font-poppins border border-black  text-white '>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}
export default SecondPage
