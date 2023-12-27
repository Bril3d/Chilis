import React from "react";
import Logo from "../assets/imgs/logo.png";
import img2 from "../assets/imgs/fajita.jpg";
import { Circle, CircleGrid } from "react-awesome-shapes";



const Header = () => {
  return (
    <div className="bg-[#303030] sm:p-14 p-5 z-10 relative overflow-hidden">
      <Circle
        color="linear-gradient(135deg , black, #242424)"
        size={['700px', '700px', '700px', '700px']}
        zIndex={-1}
        className="absolute  -right-44 top-0 opacity-50"
      />
      <Circle
        color="linear-gradient(135deg , black, #242424)"
        size={['1000px', '1000px', '1000px', '1000px']}
        zIndex={-1}
        className="absolute  -right-44 -top-4 opacity-50  hidden sm:block "
      />
      <Circle
        color="linear-gradient(135deg , black, #242424)"
        size={['1000px', '1000px', '1000px', '1000px']}
        zIndex={-1}
        className="absolute  -top-1/2  opacity-60 hidden sm:block"
      />
      <Circle
        color="linear-gradient(135deg , #6ee22a, #6ee22a)"
        size={['250px', '200px', '200px', '300px']}
        zIndex={-1}
        className="absolute  -left-20 -bottom-10 opacity-50"
      />
      <Circle
        color="linear-gradient(135deg , #6ee22a, #6ee22a)"
        size={['200px', '200px', '200px', '200px']}
        zIndex={-1}
        className="absolute  -left-20 -bottom-10 "
      />
      <CircleGrid
        position="absolute"
        color="white"
        size="sm:100px 44px"
        zIndex={-1}
        className="sm:right-10 sm:top-5 sm:w-24 w-12 top-2 right-3"
      />
      <img src={Logo} alt="logo" className="w-20 text-[#db2222]" />

      <div className="flex justify-center gap-10 sm:gap-56 items-center relative ">
        <img
          src={img2}
          alt="img"
          className=" rounded-[50%] sm:w-96 sm:h-96 border-2 border-solid border-[#db2222] w-24 h-24"
        />
        <div>
          <h1 className="text-2xl text-white z-10">Chili's Tunisie</h1>
          <p className="text-[#6ee22a] sm:text-6xl sm:mb-14 mb-7 font-bold italic text-xl max-w-80">
            Decouvrez Les meilleures recettes syriennes
          </p>
          <a href="#menu" className="bg-[#db2222] text-white sm:text-lg text-sm p-3 rounded-lg z-[24]">
            Voir Notre Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

