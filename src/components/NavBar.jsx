import React from "react";
import { Link } from "react-router-dom";

function NavBar({ data }) {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#6A0DAD] to-[#F8C8DC] text-white shadow-lg">
      <nav className="flex justify-between items-center p-4 text-sm md:text-lg">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <p className="font-bold text-2xl tracking-wide hover:text-white/90">
              E-Commerce
            </p>
          </Link>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="order-1 md:order-none md:hidden relative">
          <button
            aria-label="Open Menu"
            className="material-symbols-outlined text-3xl cursor-pointer"
            onClick={() => {
              document.querySelector("#menu").classList.toggle("hidden");
            }}
          >
            menu
          </button>
          <ul
            id="menu"
            className="hidden z-40 flex flex-col bg-white text-[#6A0DAD] px-4 py-2 rounded-md shadow-lg absolute top-12 right-4 w-40"
          >
            <Link to={"/"}>
              <li className="hover:text-[#8E44AD] py-1">Home</li>
            </Link>
            <Link to={"/products"}>
              <li className="hover:text-[#8E44AD] py-1">Products</li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:text-[#8E44AD] py-1">Contact</li>
            </Link>
            <Link to={"/about"}>
              <li className="hover:text-[#8E44AD] py-1">About</li>
            </Link>
          </ul>
        </div>

        {/* Full Menu for larger screens */}
        <div className="hidden md:flex gap-8">
          <Link to={"/"}>
            <span className="hover:text-white/80 transition">Home</span>
          </Link>
          <Link to={"/products"}>
            <span className="hover:text-white/80 transition">Products</span>
          </Link>
          <Link to={"/contact"}>
            <span className="hover:text-white/80 transition">Contact</span>
          </Link>
          <Link to={"/about"}>
            <span className="hover:text-white/80 transition">About</span>
          </Link>
        </div>

        {/* Cart Button */}
        <Link to={"/cart"}>
          <div className="flex items-center gap-2 hover:text-white/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-medium">
              MyCart ({data.totalQuantity})
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
