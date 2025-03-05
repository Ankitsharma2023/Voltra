"use client";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import logo_blue from "../assets/logo_blue.png";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`w-full ${isHome ? "absolute top-0 left-0" : null}`}>
      <div className="w-full flex flex-row justify-between  p-4 px-8 bg-transparent">
        <div>
          <img width={108} height={48} src={isHome ? logo : logo_blue} />
        </div>

        <div
          className={` flex flex-row gap-4 items-center ${isHome ? "text-white" : "text-black"} font-[Akshar]`}
        >
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/solutions">SOLUTIONS</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/technology">TECHNOLOGY</Link>
          <button className="bg-[#0C33F2] p-2 px-4 text-white font-[Akshar] font-normal ">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
}
