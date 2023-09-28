import React from 'react'
import Star from '../../assets/Star.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import ProgressBar from '../../components/progressbar/ProgressBar'
import Links from '../../components/links/Links'

const FirstPage = () => {
  let images = [
    {
      img: img3,
    },
    {
      img: img3,
    },
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ]

  const [activeItem, setActiveItem] = useState(1)
  const wrapperRef = useRef()
  const timeoutRef = useRef()

  useEffect(() => {
    if (!wrapperRef.current) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    wrapperRef.current.style.setProperty(
      '--transition',
      '600ms cubic-bezier(0.22, 0.61, 0.36, 1)'
    )

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty('--transition')
    }, 900)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [activeItem])

  return (
    <div className='flex justify-center items-center bg-[#B0F2B4] h-screen w-[100%] lg:gap-[90px] md:gap-[60px] '>
     <Links/>
      <div className=' flex flex-col  justify-center items-center  bg-red-10 md:w-[80%] md:h-[90%]   lg:gap-8 md:gap-5 sm:gap-4'>
        <div className='w-[90%] flex justify-between items-center'>
          {/* first section */}
          <div className='josefinSans lg:text-[17px] md:text-[14px] sm:text-[12px] text-[#000000] '>
            FREE DELEVERY
          </div>
          <img
            src={Star}
            alt=''
            className='lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px]'
          />
          <div className='josefinSans lg:text-[17px] md:text-[14px] sm:text-[12px] text-[#000000] '>
            CASHBACK POINTS
          </div>
          <img
            src={Star}
            alt=''
            className='lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px]'
          />
          <div className='josefinSans lg:text-[17px] md:text-[14px] sm:text-[12px] text-[#000000] '>
            FREE CANCELLATION
          </div>
          <img
            src={Star}
            alt=''
            className='lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px]'
          />
          <div className='josefinSans lg:text-[17px] md:text-[14px] sm:text-[12px] text-[#000000] '>
            24/7 SUPPORT
          </div>
          <img
            src={Star}
            alt=''
            className='lg:w-[20px] lg:h-[20px] sm:h-[15px] sm:w-[15px]'
          />
        </div>

        {/* secondpart */}
        <div className='playfair font-[serif] lg:text-[30px] md:text-[25px] sm:text-[18px] '>
          {' '}
          check out the latest wear collections
        </div>
        {/* carosel part */}

        <div className='flex justify-center  w-[100%] md:h-[350px] sm:h-[300px] '>
          <ul
            ref={wrapperRef}
            className=' group flex flex-col  md:h-[350px] sm:h-[300px] w-[90%] sm:flex-row gap-[1%]'
          >
            {images.map((element, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index}
                className={classNames(
                  "relative cursor-pointer sm:w-[30%] sm:first:w-[10%] sm:last:w-[10%] sm:[&[aria-current='true']]:w-[100%]",
                  'sm:[transition:width_var(--transition,200ms_ease-in)]',
                  'sm:before-block before:absolute before:bottom-0  before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white',
                  'sm:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] sm:hover:w-[25%]',
                  'first:pointer-events-none last:pointer-events-none sm:[&_img]:first:opacity-0 sm:[&_img]:last:opacity-0'
                )}
                key={element.index}
              >
                <div className='relative h-full w-full  overflow-hidden rounded-2xl '>
                  <img
                    className='absolute  right-0 top-1/2  max-w-none bg-cover  -translate-y-1/2   left-1/2 md:h-[350px] sm:h-[300px] w-[600px] sm:-translate-x-1/2'
                    src={element.img}
                  />
                  <div
                    className={classNames(
                      'inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture sm:absolute sm:transition-opacity',
                      activeItem === index ? 'sm:opacity-25' : 'sm:opacity-0'
                    )}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* carosel bottome part */}

        <div className='flex gap-2'>
          <div className='bg-[#2D2D2D] w-[30px] h-[10px] rounded-full'></div>
          <div className='bg-[#2D2D2D] w-[30px] h-[10px] rounded-full'></div>
          <div className='bg-[#2D2D2D] w-[30px] h-[10px] rounded-full'></div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}
export default FirstPage
