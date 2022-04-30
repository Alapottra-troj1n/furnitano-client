import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = ({handleInventoryScroll}) => {
  const [user, loading, error] = useAuthState(auth);
  

    return (
        <div className="navbar bg-base-100 container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={handleInventoryScroll}><span>Inventory</span> </li>
              
              {user ? <> 
              <li><Link to='/'>Manage Furniture</Link></li>
              <li><Link to='/'>Add Furniture</Link></li>
              <li><Link to='/'>My Inventory</Link></li> 
              </> : ''}
              <li><Link to='/'>Blog</Link></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case font-bold text-xl">furnitano.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li onClick={handleInventoryScroll}><span>Inventory</span> </li>
             
          {user ? <> 
              <li><Link to='/'>Manage Furniture</Link></li>
              <li><Link to='/'>Add Furniture</Link></li>
              <li><Link to='/'>My Inventory</Link></li> 
              
              </> : ''}
              <li><Link to='/'>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
            {user ? <button className="btn" onClick={()=> signOut()}>Log Out</button> : <Link to='/login' className="btn">Sign In</Link> }
        </div>
      </div>
    );
};

export default Navbar;