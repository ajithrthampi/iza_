import React from 'react'
import page3center from "../../../assets/carousel_page/page3center.png"
import year from  "../../../assets/carousel_page/year.png"
import page3left from "../../../assets/carousel_page/page3left.png"
import page3right1 from "../../../assets/carousel_page/page3right1.png"
import page3right2 from "../../../assets/carousel_page/page3right2.png"
import page3down_logo from "../../../assets/carousel_page/page3down_logo.png"
import page3up_logo from "../../../assets/carousel_page/page3up_logo.png"

const Page3 = () => {
  return (
    <div className=' flex justify-center items-center h-screen w-screen bg-gradient-to-r from-[#1f1a23] to-[#353742] relative duration-1000'>
      <div className='relative'>
        <img className='h-[570px] mr-36' src={page3center} alt="" />
        <img className=' h-[330px] absolute  -top-10 right-20' src={year} alt="" />
      </div>

      <div>
        <img className='absolute left-64 h-[250px] bottom-48' src={page3left} alt="" />
        <div>
           <img className='h-[280px] absolute top-40' src={page3right1} alt="" />
           <img className='h-[280px] absolute top-16 right-52' src={page3right2} alt="" />
        </div>
      </div>

      <div>
        <img className='absolute w-[270px] bottom-0 right-0' src={page3down_logo} alt="" />
        <img className='absolute  left-0 w-[270px] top-0' src={page3up_logo} alt="" />
      </div>
    </div>
  )
}

export default Page3