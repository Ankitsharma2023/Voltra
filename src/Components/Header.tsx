"use client";
import React, { useState, useRef } from "react";
import logo from "../assets/logo.png";
import logo_blue from "../assets/logo_blue.png";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Handle dropdown open
  const handleDropdownOpen = () => {
    // Clear any existing timeout to prevent conflicts
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setShowSolutionsDropdown(true);
  };

  // Handle dropdown close with improved delay handling
  const handleDropdownClose = () => {
    // Set timeout and save the reference
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowSolutionsDropdown(false);
    }, 300); // Slightly longer delay for better user experience
  };

  return (
    <nav className={`w-full ${isHome ? "absolute top-0 left-0" : ""}`}>
      <div className="w-full flex flex-row justify-between p-4 px-20 bg-transparent">
        <div>
          <a href="/">
            <img
              width={108}
              height={48}
              src={isHome ? logo : logo_blue}
              alt="Logo"
              className="cursor-pointer"
            />
          </a>
        </div>

        <div
          className={`flex flex-row gap-10 items-center ${isHome ? "text-white" : "text-black"} font-[Akshar]`}
        >
          <a href="/">HOME</a>
          <a href="/products">PRODUCTS</a>

          {/* Solutions with improved dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <div className="cursor-pointer flex items-center">
              SOLUTIONS
              {/* Optional: Add a dropdown indicator */}
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${showSolutionsDropdown ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Improved dropdown menu with transition */}
            <div
              className={`absolute top-full left-0 mt-1 bg-white shadow-md rounded py-2 min-w-40 z-10 transition-all duration-300 ${
                showSolutionsDropdown 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 invisible transform -translate-y-2"
              }`}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              <a
                href="/solutions/island-mode"
                className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200"
              >
                Island Mode
              </a>
              <a
                href="/solutions/hybrid-mode"
                className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200"
              >
                Hybrid Mode
              </a>
              <a
                href="/solutions/microgrid-mode"
                className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200"
              >
                MicroGrid Mode
              </a>
            </div>
          </div>

          <a href="/about">ABOUT US</a>
          <a href="/technology">TECHNOLOGY</a>
          <a href="/contact">
            <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal rounded-md hover:bg-blue-700 transition-colors duration-300">
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}