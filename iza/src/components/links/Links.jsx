import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineTwitter} from 'react-icons/ai';


const Links = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className=' w-[1px] h-[100px] border-r-[1px] border-black'></div>
        <div className='flex flex-col justify-evenly items-center  w-[50px] h-[200px]'>
        <a  href='#'><AiOutlineInstagram size={20}/></a>
        <a href='#'><BiLogoFacebook  size={20}/></a>
        <a href='#'><AiOutlineTwitter  size={20}/></a>
        </div>
        <div className='border-r-[1px] border-black w-[1px] h-[100px]'></div>
    </div>
  )
}

export default Links