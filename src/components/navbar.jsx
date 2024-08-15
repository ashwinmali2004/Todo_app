import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='hidden md:flex justify-between bg-violet-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'><Link to="/">Home</Link></li>
        <li className='cursor-pointer hover:font-bold transition-all'><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
