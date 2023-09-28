import React, {useState} from 'react'
import Page2 from '../pageContent/Page2'
import Page3 from '../pageContent/Page3'
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi';

const LandingPageCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(1)

    const component = [
        {
            comp: <Page2/>}, {
            comp: <Page3/>}
    ]

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? component.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const islastSlide = currentIndex === component.length - 1;
        const newIndex = islastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }


    return (
        <div className=' h-screen w-screen relative '>
            <div className='duration-1000'> {
                component[currentIndex].comp
            } </div>

            <div className=' z-50'>
                <button onClick={prevSlide}
                    className='absolute rounded-full w-20 h-20  bottom-16 right-10 text-white flex justify-center items-center border'>
                    <BiSolidRightArrow/>
                </button>
                <button onClick={nextSlide}
                    className='absolute rounded-full w-20 h-20  bottom-16 right-36 text-white flex justify-center items-center border'>
                    <BiSolidLeftArrow/>
                </button>
            </div>

        </div>
    )
}

export default LandingPageCarousel
