import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidLinken">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Item 1</Link></li>
              <li><Link to='/'>Item 2</Link></li>
              <li><Link to='/'>Item 3</Link></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case font-bold text-xl">furnitano.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Item 1</Link></li>
            <li><Link to='/'>Item 2</Link></li>
            <li><Link to='/'>Item 3</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn">Sign In</Link>
        </div>
      </div>
    );
};

export default Navbar;