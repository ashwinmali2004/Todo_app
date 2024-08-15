import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <div className="flex justify-between bg-violet-900 text-white py-2 px-4">
        <div className="logo">
          <span className='font-bold text-xl'>iTask</span>
        </div>
        <button onClick={toggleSidebar} className='text-xl'>
          <FaBars />
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 bg-violet-900 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
        <div className="logo py-4 px-6">
          <span className='font-bold text-xl'>iTask</span>
        </div>
        <ul className="flex flex-col gap-4 px-6">
          <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all'>Help</li>
        </ul>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
