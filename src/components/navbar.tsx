import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-[72px] py-6">
        {/* Logo/Brand */}
        <h1 className="font-bold text-base sm:text-lg">
          Lawrence Babelonia <span className="hidden sm:inline font-normal text-gray-500">/ Software Developer</span>
        </h1>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-600">
          <li>
            <a href="#about" className="cursor-pointer hover:text-black transition-colors">ABOUT ME</a>
          </li>
          <li>
            <a href="#projects" className="cursor-pointer hover:text-black transition-colors">PROJECTS</a>
          </li>
          <li>
            <a href="#resume" className="cursor-pointer hover:text-black transition-colors">RESUME</a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer hover:text-black transition-colors">CONTACT</a>
          </li>
        </ul>

        {/* Hamburger Icon - Visible on mobile only */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-20 flex flex-col gap-1.5 w-6 h-6 justify-center"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span 
            className={`block w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`block w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Slides in from right to left */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-10 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 pt-20 text-sm text-gray-600">
          <li>
            <a 
              href="#about"
              className="block cursor-pointer hover:text-black transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT ME
            </a>
          </li>

          <li>
            <a 
              href="#projects"
              className="block cursor-pointer hover:text-black transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </a>
          </li>

          <li>
            <a 
              href="#resume"
              className="block cursor-pointer hover:text-black transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              RESUME
            </a>
          </li>

          <li>
            <a 
              href="#contact"
              className="block cursor-pointer hover:text-black transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay - Darkens background when menu is open */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
