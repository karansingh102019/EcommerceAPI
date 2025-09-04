import Link from "next/link";
import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import MegaMenu from "./megaMenu";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-5 bg-black/10 backdrop-blur-xl border-b border-gray-200 shadow-lg text-white">
      <h1 className="text-4xl font-medium text-gray-800">AK Store</h1>

      <ul className="flex space-x-12 text-lg font-medium text-gray-800">
        {/* Home */}
        <li className="hover:text-white cursor-pointer">
          <Link href={"/"} className="flex items-center gap-2">
            <FaHome className="w-5 h-5" />
            Home
          </Link>
        </li>

        {/* About */}
        <li className="hover:text-white cursor-pointer">
          <Link href={"/menu/About"} className="flex items-center gap-2">
            <FaInfoCircle className="w-5 h-5" />
            About
          </Link>
        </li>

        {/* Product with MegaMenu */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-2 hover:text-white">
            <RiShoppingBag3Fill className=" w-5 h-5" />
            Product
          </div>
          <MegaMenu/>
          
        </li>

        {/* Order */}
        <li className="hover:text-white cursor-pointer">
          <Link href={"/menu/Order"} className="flex items-center gap-2">
            <TbListDetails className="w-5 h-5" />
            Order
          </Link>
        </li>

        {/* Cart */}
        <li className="hover:text-white cursor-pointer">
          <Link href={"/Form"} className="flex items-center gap-2">
            <MdAlternateEmail className=" w-5 h-5" />
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
