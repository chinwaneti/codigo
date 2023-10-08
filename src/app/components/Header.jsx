"use client"
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="relative group cursor-pointer">
       
        <motion.p
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative z-10  group-hover:underline "
        >
          {children}
        </motion.p>
      </div>
    </Link>
  );
};

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);}
  return (
    <header className="text-black px-5 py-5">
    <nav className="container mx-auto py-4 flex justify-between items-center">
      <div className="logo text-2xl font-custom uppercase">
        <p className="logo-text text-red-600">CODIGO</p>
      </div>
      <div className="md:hidden">
      <button
        className=" top-4 right-4 z-50 p-2 rounded-md text-gray-600 hover:text-gray-900"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <GiCancel size={24} />
        ) : (
          <div className='bg-gray-300 rounded-full w-10 h-10 p-2'><GiHamburgerMenu size={24} /> </div>                  
        )}
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white z-40 flex items-center justify-center">
            
          <ul className="text-2xl font-semibold space-y-8">
            <li>
              <p href="#">Work</p>
            </li>
            <li>
              <p href="#">Solutions</p>
            </li>
            <li>
              <p href="#">Services</p>
            </li>
            <li>
              <p href="#">Tech for Hire</p>
            </li>
            <li>
              <p href="#">about us</p>
            </li>
            <li>
              <p href="#">Blog</p>
            </li>
          </ul>
        </div>
      )}
    </div>
    
    <ul className="hidden sm:flex md:flex space-x-10 text-sm items-center">
  <li className="relative group">
    <NavLink href="/work">Work</NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/solutions">Solutions</NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/services">
      <strong>Services</strong>
    </NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/tech-for-hire">Tech for Hire</NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/about">About us</NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/blog">Blog</NavLink>
  </li>
  {/* Hide on small screens */}
  <li className="hidden sm:block group hover:underline cursor-pointer absolute right-[37px] text-white font-bold">
    <NavLink href="/request-a-quote">
      <p className='text-center w-30'>Request a quote</p>
    </NavLink>
  </li>
  {/* Rounded span */}
  <span className='rounded-3xl bg-[#2f1818] w-36 h-12 p-3 relative'></span>
</ul>

    </nav>
  </header>
  );
};

export default Header;

