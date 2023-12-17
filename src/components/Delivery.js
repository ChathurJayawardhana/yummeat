import React from 'react'

export default function  () {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center '>Quick Delivery App</h3>
       
       <div className='w-[1520] mx-auto grid md:grid-cols-2'>
         <img className='w-[550px] mx-auto my-4' src='https://static.vecteezy.com/system/resources/previews/021/595/691/original/fast-delivery-truck-icon-lorry-with-quick-delivery-service-fast-product-delivery-design-illustration-free-png.png'/>
         <div className='flex flex-col justify-center'>
          <>
          <p className='text-[#00df9a]' >Get The App</p> 
           <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-'>Limitless Convenience On-demand</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into electronic
             typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum 
              passages, and more recently with desktop publishing software like
               Aldus PageMaker including versions of Lorem Ipsum.</p>
          </>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
                 
         </div>
       </div>
      
    </div>
  )
}
