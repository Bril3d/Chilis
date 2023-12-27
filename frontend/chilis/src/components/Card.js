import React from 'react';

const Card = ({ title, img , price}) => {
  return (
    <div className="sm:max-w-sm rounded-lg overflow-hidden shadow-lg ">
      <img className="w-full h-48 object-cover" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="text-[#db2222] text-xl font-semibold mb-2 ">{title}</div>
        <p className="text-[#55ad1d] text-base font-semibold p-1">{price}DT</p>
      </div>
    </div>
  )
}

export default Card;