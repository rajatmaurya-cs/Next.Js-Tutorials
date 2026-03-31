"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-md bg-white">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        Postify
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link href="https://3w-task1-fronted.vercel.app/Home" className="hover:text-blue-600 transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-blue-600 transition">
          About Us
        </Link>

        <Link href="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;