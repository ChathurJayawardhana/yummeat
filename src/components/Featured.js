import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight}  from 'react-icons/bs'
import {RxDotFilled } from 'react-icons/rx'

export default function Featured() {
    const sliders = [
        {
          url : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg" 
        },
        {
            url :"https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg"

        },
        {
            url : "https://t3.ftcdn.net/jpg/06/39/49/20/360_F_639492067_MWuY75VFiJRxi7sk4aNDyf2dJqU3dRbN.jpg"
        }

    ]

    const [currentIndex,setCurrentIndex] = useState(0)

    const prevSlider = ()=>{
      const isFirslide = currentIndex ===0
      const newIndex = isFirslide ? sliders.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    }

    const nextSlider = ()=>{
      const isLastlide = currentIndex === sliders.length - 1
      const newIndex = isLastlide ? 0 : currentIndex+1
      setCurrentIndex(newIndex)
    }

    const moveToSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-auto h-[600px] w-full py-4 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
           style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
        >
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl
         rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
           <BsChevronCompactLeft onClick={prevSlider}/> 
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl
         rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
           <BsChevronCompactRight onClick={nextSlider}/> 
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
              sliders.map((sliderItems,slideIndex)=>(
                <div 
                key={slideIndex}
                onClick={()=>moveToSlide(slideIndex)}
                className='text-2xl cursor-pointer' >
                  <RxDotFilled/>
                </div>
              ))
            }
        </div>
      
    </div>
  )
}

