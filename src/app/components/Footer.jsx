import React from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
  } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <div className="bg-gray-50">
      <p className="text-red-600 font-bold text-3xl text-center py-20"> 
        Let us have a chat
      </p>
      <div className="flex justify-evenly p-4 border-solid mt-4"> 
        <div className=" border-black p-4 hover:bg-gray-200 cursor-pointer transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p>Build</p>
            <span>
              <GrFormNextLink className="hover:scale-105 transform ease-in-out" />
            </span>
          </div>
          <p>Help you build something</p>
        </div>
        <div className="border-l border-black p-4 hover:bg-gray-200 cursor-pointer transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center group-hover:scale-90 group-hover:text-red-500">
            <p>Co-incubate</p>
            <span>
              <GrFormNextLink className="hover:scale-105 transform ease-in-out" />
            </span>
          </div>
          <p>Co-incubate an idea together</p>
        </div>
        <div className="border-l border-black p-4 hover:bg-gray-200 cursor-pointer transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p>Customize</p>
            <span>
              <GrFormNextLink className="hover:scale-105 transform ease-in-out" />
            </span>
          </div>
          <p>Customize a solution for your business</p>
        </div>
        <div className="border-l border-black p-4 hover:bg-gray-200 cursor-pointer transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p>Organize</p>
            <span>
              <GrFormNextLink className="hover:scale-105 transform ease-in-out" />
            </span>
          </div>
          <p>Organize learning sessions with us</p>
        </div>
        <div className="border-l border-black p-4 hover:bg-gray-200 cursor-pointer transform transition-transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p>Tech for Hire</p>
            <span>
              <GrFormNextLink className="hover:scale-105 transform ease-in-out" />
            </span>
          </div>
          <p>Hire experienced Tech Talents</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-10">
        <p href="#" className="text-black-500 hover:text-red-700">
          <FaFacebookSquare className="text-3xl" />
        </p>
        <p href="#" className="text-black-500 hover:text-red-700">
          <FaTwitterSquare className="text-3xl" />
        </p>
        <p href="#" className="text-black-500 hover:text-red-700">
          <FaLinkedin className="text-3xl" />
        </p>
      </div>
      <div className="text-center py-16">
        <p>
          Copyright © Codigo - Mobile App Developer Singapore
          <br />
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </p>
      </div>
    </div>
  );
}
