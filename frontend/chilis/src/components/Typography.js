import React from 'react';


const Typography = ({type}) => {
  return (
    type === 'h1' ?
      <div className='relative' id="menu">
        <h1 className='text-[#db2222] sm:text-5xl text-3xl font-bold flex justify-center realtive mb-10 items-center  before:absolute before:-bottom-4 before:sm:w-96 before:w-44 before:h-1  before:bg-[#db2222] '>🌶️ Notre Menu 🌶️</h1>
      </div>
      
      :
      <h2 className='text-[#6ee22a] text-2xl font-bold mb-5'>Nos Fijitas</h2>
  )
}

export default Typography;
