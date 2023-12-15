import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight}  from 'react-icons/bs'

export default function Featured() {
    const sliders = [
        {
          url : "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" 
        },
        {
            url :"https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg"

        },
        {
            url :"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/09/Tuscan-Chicken-main-1.jpg"
        }
       

    ]

    const [currentIndex,setCurrentIndex] = useState(0)
  return (
    <div className='max-w-[1900px] h-[600px] w-full py-4 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
           style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
        >
        </div>
        <div>
           <BsChevronCompactLeft/> 
        </div>
      
    </div>
  )
}

