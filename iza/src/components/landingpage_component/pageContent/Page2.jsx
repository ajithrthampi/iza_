import React from 'react'
import page2Center from "../../../assets/carousel_page/page2Center.png"
import page2left from "../../../assets/carousel_page/page2left.png"
import page2right from "../../../assets/carousel_page/page2right.png"

const Page2 = () => {
  return (
    <div className='flex justify-center h-screen w-screen items-cente bg-[#010101] duration-1000'>
      <div className='relative'>
        <img className='w-[900px] h-[640px] object-cover' src={page2Center} alt="" />
        <img className='absolute bottom-[110px] -left-32' src={page2left} alt="" />
        <img className='absolute top-28 -right-48' src={page2right} alt="" />
      </div>
    </div>
  )
}

export default Page2