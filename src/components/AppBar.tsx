import React from "react";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <header className="top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold text-2xl tracking-tight text-white hover:text-blue-400 transition">
          MARE Tech Dev
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default AppBar;