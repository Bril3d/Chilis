import React from 'react';
import img3 from "../assets/imgs/img3.png"

const Contact = () => {

  return (
    <div className="bg-[#db2222] sm:py-4 sm:px-10 py-2 px-5 rounded-lg mt-8 mb-16  mr-auto ml-auto w-[70%]">
      <h1 className='text-white text-3xl text-center font-bold sm:mb-14 mb-8 p-2 '>Prendre Contact </h1>
      <div className="flex sm:flex-row flex-col sm:justify-between flex-wrap justify-center items-center gap-3 p-2 rounded-lg w-full">

        <form className='sm:w-[32%]'>
          <div className="mb-4 min-w-full">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
              placeholder='Nom et Prénom'
              required
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
              placholder="Adresse Email"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <textarea
              id="message"
              name="message"
              rows="4"
              className="px-3 py-2 border border-gray-300  resize-none rounded-lg p-2 block mb-5 outline-none w-full  "
              required
              placeholder='Votre Message Ici ....'
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded transition-all  w-full"
          >
            Envoyer
          </button>
        </form>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <img
            src={img3}
            alt="Header"
            className="sm:mb-4 mb-2  rounded-full sm:w-60 sm:h-60  w-40 h-40 flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact