import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
     <div className="_hero-section h-screen w-full flex justify-center items-center flex-col">
            <p className="text-sm lg:text-2xl font-medium tracking-widest text-white">MODERN FURNITURE COLLECTION</p>
            <h2 className='text-5xl lg:text-9xl text-white font-thin mt-2 lg:mt-3'>Premium Italian</h2>
            <button className="text-black bg-white py-3 px-7 border-0 text-sm mt-5 lg:mt-3 ">CHECK INVENTORY</button>
     </div>
    </div>
  );
};

export default Home;
