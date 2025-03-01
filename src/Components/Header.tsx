import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="w-full absolute top-0 left-0">
      <div className="w-full flex flex-row justify-between  p-4 px-8 bg-transparent">
        <div>
          <img width={108} height={48} src={logo} />
        </div>

        <div className=" flex flex-row gap-4 items-center text-white font-[Akshar]">
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
