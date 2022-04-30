import React from 'react';
import { FaGooglePlay } from "react-icons/fa";

const HomeSectionOne = () => {
    return (
        <div>
            <div className="hero min-h-full py-20 mb-20 mt-10 bg-slate-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
    <img src="https://i.ibb.co/9qB3jrj/Untitled-design-2.png" alt='' className="max-w-md  rounded-lg bg-transparent" />

    <div className="stats stats-vertical lg:stats-horizontal shadow hidden  lg:inline-grid">
  
  <div className="stat place-items-center">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-violet-600">4,200</div>
    <div className="stat-desc text-violet-600">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
    

    <div>
      <h1 className="text-5xl font-bold">Manage On The Go</h1>
      <p className="py-6 w-3/5">Our mobile app will keep you connected to your inventory all the time. Managing your inventory has never been this easy.</p>
      <button className="btn bg-violet-600 hover:bg-violet-700">Download Our App <FaGooglePlay className='text-lg mx-2'/> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeSectionOne;