import React from 'react';
import { FaGooglePlay } from "react-icons/fa";

const HomeSectionOne = () => {
    return (
        <div>
            <div class="hero min-h-full py-20 mb-20 mt-10 bg-slate-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/9qB3jrj/Untitled-design-2.png" class="max-w-md  rounded-lg bg-transparent" />
    <div>
      <h1 class="text-5xl font-bold">Manage On The Go</h1>
      <p class="py-6 w-3/5">Our mobile app will keep you connected to your inventory all the time. Managing your inventory has never been this easy.</p>
      <button class="btn btn-primary">Download Our App <FaGooglePlay className='text-lg mx-2'/> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeSectionOne;