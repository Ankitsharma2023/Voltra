"use client";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import logo_blue from "../assets/logo_blue.png";
import { Link, useLocation } from "react-router-dom";
import HybridMode from "./HybridMode";
import MicrogridMode from "./MicrogridMode";
import IslandMode from "./IslandMode";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleSolutionsDropdown = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
  };

  // Close dropdown when mouse leaves
  const closeDropdown = () => {
    setShowSolutionsDropdown(false);
  };

  return (
    <nav className={`w-full ${isHome ? "absolute top-0 left-0" : null}`}>
      <div className="w-full flex flex-row justify-between p-4 px-8 bg-transparent">
        <div>
          {/* Made logo clickable with Link component */}
          <Link to="/">
            <img 
              width={108} 
              height={48} 
              src={isHome ? logo : logo_blue} 
              alt="Logo" 
              className="cursor-pointer" 
            />
          </Link>
        </div>

        <div
          className={`flex flex-row gap-4 items-center ${isHome ? "text-white" : "text-black"} font-[Akshar]`}
        >
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          
          {/* Solutions with dropdown */}
          <div className="relative">
            <div 
              className="cursor-pointer"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
              onClick={toggleSolutionsDropdown}
            >
              SOLUTIONS
            </div>
            
            {/* Dropdown menu */}
            {showSolutionsDropdown && (
              <div 
                className="absolute top-full left-0 mt-1 bg-white shadow-md rounded py-2 min-w-40 z-10"
                onMouseLeave={closeDropdown}
              >
                <Link 
                  to="/solutions/island-mode" 
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Island Mode
                </Link>
                <Link 
                  to="/solutions/hybrid-mode" 
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Hybrid Mode
                </Link>
                <Link 
                  to="/solutions/microgrid-mode" 
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  MicroGrid Mode
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/about">ABOUT US</Link>
          <Link to="/technology">TECHNOLOGY</Link>
          <Link to="/contact">
            <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}