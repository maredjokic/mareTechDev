import React, { useState } from "react";

const AppBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (index: number) => {
    const container = document.querySelector(".sections-container");
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  return (
    <header className="top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16 relative">
        <button
          onClick={() => scrollToSection(0)}
          className="font-extrabold text-2xl tracking-tight text-white hover:text-blue-400 transition"
        >
          MARE Tech Dev
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection(0)} className="hover:text-blue-400 transition">Home</button>
          <button onClick={() => scrollToSection(1)} className="hover:text-blue-400 transition">About</button>
          <button onClick={() => scrollToSection(2)} className="hover:text-blue-400 transition">Services</button>
          <button onClick={() => scrollToSection(3)} className="hover:text-blue-400 transition">Portfolio</button>
          <button onClick={() => scrollToSection(4)} className="hover:text-blue-400 transition">Contact</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 text-white md:hidden shadow-md">
            <nav className="flex flex-col px-4 py-3 space-y-2 text-sm font-medium">
              <button onClick={() => scrollToSection(0)} className="hover:text-blue-400 transition">Home</button>
              <button onClick={() => scrollToSection(1)} className="hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection(2)} className="hover:text-blue-400 transition">Services</button>
              <button onClick={() => scrollToSection(3)} className="hover:text-blue-400 transition">Portfolio</button>
              <button onClick={() => scrollToSection(4)} className="hover:text-blue-400 transition">Contact</button>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppBar;