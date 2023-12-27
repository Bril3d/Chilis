import React from 'react';

const Card = ({ food }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-md w-full sm:w-[32%] h-[20rem] ">
      <img className="w-full h-2/3 object-cover mb-2 rounded max-h-2/3" src={food.img} alt={food.title} />
      <div className="px-6 py-4 flex flex-col gap-3">
        <div className="text-[#db2222] text-xl font-semibold  ">{food.title}</div>
        <p className="text-[#55ad1d] text-base font-semibold">{food.price}DT</p>
      </div>
    </div>
  )
}

export default Card;