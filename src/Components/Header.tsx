"use client";
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import logo_blue from "../assets/logo_blue.png";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownOpen = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setShowSolutionsDropdown(true);
  };

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowSolutionsDropdown(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as HTMLElement).closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  if (!isHeaderVisible) {
    return null;
  }

  return (
    <nav className={`w-full ${isHome ? "absolute" : ""} top-0 left-0 z-50 transition-opacity duration-300`}>
      <div className="w-full flex flex-row justify-between items-center p-4 md:px-8 lg:px-20 bg-transparent">
        <div>
          <a href="/">
            <img
              width={108}
              height={48}
              src={isHome ? logo : logo_blue}
              alt="Logo"
              className="cursor-pointer w-20 h-auto md:w-24 lg:w-[108px]"
            />
          </a>
        </div>

        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${isHome ? "text-white" : "text-black"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className={`hidden lg:flex flex-row gap-6 xl:gap-10 items-center ${isHome ? "text-white" : "text-black"} font-[Akshar]`}>
          <a href="/" className="hover:text-gray-300 transition-colors">HOME</a>
          <a href="/products" className="hover:text-gray-300 transition-colors">PRODUCTS</a>

          <div
            className="relative"
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <div className="cursor-pointer flex items-center">
              SOLUTIONS
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${showSolutionsDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div
              className={`absolute top-full left-0 mt-1 bg-white shadow-md rounded py-2 min-w-40 z-10 transition-all duration-300 ${
                showSolutionsDropdown ? "opacity-100 transform translate-y-0" : "opacity-0 invisible transform -translate-y-2"
              }`}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              <a href="/solutions/island-mode" className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200">
                Island Mode
              </a>
              <a href="/solutions/hybrid-mode" className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200">
                Hybrid Mode
              </a>
              <a href="/solutions/microgrid-mode" className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200">
                MicroGrid Mode
              </a>
            </div>
          </div>

          <a href="/about" className="hover:text-gray-300 transition-colors">ABOUT US</a>
          <a href="/technology" className="hover:text-gray-300 transition-colors">TECHNOLOGY</a>
          <a href="/contact">
            <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal rounded-md hover:bg-blue-700 transition-colors duration-300">
              CONTACT US
            </button>
          </a>
        </div>

        <div className={`mobile-menu-container fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex justify-between items-center p-4 border-b">
            <a href="/">
              <img src={logo_blue} alt="Logo" className="w-24 h-auto" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col font-[Akshar] py-4">
            <a href="/" className="px-6 py-3 hover:bg-gray-100">HOME</a>
            <a href="/products" className="px-6 py-3 hover:bg-gray-100">PRODUCTS</a>

            <div className="px-6 py-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
              >
                <span>SOLUTIONS</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showSolutionsDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className={`pl-4 mt-2 border-l-2 border-gray-200 space-y-2 ${showSolutionsDropdown ? "block" : "hidden"}`}>
                <a href="/solutions/island-mode" className="block py-2">Island Mode</a>
                <a href="/solutions/hybrid-mode" className="block py-2">Hybrid Mode</a>
                <a href="/solutions/microgrid-mode" className="block py-2">MicroGrid Mode</a>
              </div>
            </div>

            <a href="/about" className="px-6 py-3 hover:bg-gray-100">ABOUT US</a>
            <a href="/technology" className="px-6 py-3 hover:bg-gray-100">TECHNOLOGY</a>
            <div className="px-6 py-3">
              <a href="/contact">
                <button className="w-full bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal rounded-md hover:bg-blue-700 transition-colors">
                  CONTACT US
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
