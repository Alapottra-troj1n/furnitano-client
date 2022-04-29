import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
    <div className="grid grid-flow-col gap-4">
    <h2 className=" text-4xl font-bold " >furnitano.</h2>
    </div> 

    <div className="grid grid-flow-col gap-4">
      <Link to='/' className="link link-hover">Inventory</Link> 
      <Link to='/' className="link link-hover">Blog</Link> 
      <Link to='/' className="link link-hover">Manage Inventory</Link> 
      <Link to='/' className="link link-hover">Blog</Link>
    </div> 
    <div>
      <div class="grid grid-flow-col gap-7">
        <a href="https://facebook.com" className="text-2xl cursor-pointer hover:text-gray-500"> <FaFacebook/> </a> 
        <a href="https://facebook.com" className="text-2xl cursor-pointer hover:text-gray-500"> <FaInstagram/> </a> 
        <a href="https://facebook.com" className="text-2xl cursor-pointer hover:text-gray-500"> <FaTwitter/> </a>  
      </div>
    </div> 
    <div>
      <p>Copyright © 2022 - All right reserved by Furnitano.</p>
    </div>
  </footer>

  );
};

export default Footer;
