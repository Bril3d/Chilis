import React from "react";
import Logo from "../assets/imgs/logo.svg";
import img1 from "../assets/imgs/img1.jpg"

const Home = () => {
  return (
    <div className="bg-[#242424] sm:p-14 p-5">
      <img src={Logo} alt="logo" className="w-10 text-[#db2222]" />
      <div className="flex  justify-evenly items-center ">
        <img src={img1} alt="img" className="rounded-full sm:w-1/3  border-2 border-solid border-[#db2222] w-40" />
        <div >
          <h1 className="text-xl text-white">Chili's Tunisie</h1>
          <p className="text-[#6ee22a] sm:text-4xl mb-14 font-bold italic text-xl  max-w-20">
            Decouvrez Les meilleures recettes syriennes
          </p>
          <a href="" className="bg-[#db2222] text-white sm:text-lg text-sm p-3 rounded-lg ">
            Voir Notre Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
