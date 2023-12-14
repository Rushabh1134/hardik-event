"use client";

import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="fixed top-0 block w-screen backdrop-blur-lg bg-black bg-opacity-25 border-b border-violet-950 z-50">
      <div className="">
        <div className="flex justify-between px-10 py-5 items-center">
          <div className="">
            <div className="text-red-600">Hardik</div>{" "}
            <div className="">Events</div>
          </div>
          <div>
            <ul className=" md:gap-4 hidden  md:flex">
              <li>Home</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="block md:hidden" onClick={handleClick}>
            {click ? <MenuIcon /> : <X />}
          </div>
        </div>
        <div className="">
          <ul className={click ? "hidden" : "block md:hidden p-8  hover:text-red-500"}>
            <li className="cursor-pointer pb-2">Home</li>
            <li className="cursor-pointer pb-2">Services</li>
            <li className="cursor-pointer pb-2">Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
