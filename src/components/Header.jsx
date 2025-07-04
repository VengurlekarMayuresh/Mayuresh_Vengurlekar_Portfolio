import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Body from './body';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleMenu = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
      setIsRotating(false);
    }, 200);
  };

  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-4 fixed top-0 z-50 bg-white-500/30 backdrop-blur-lg  text-white font-poppins">
        {/* Logo */}
        <img src="/logo1-Photoroom 1.svg" className="h-10" alt="Logo" />

        {/* Desktop Nav (md and up) */}
        <ul className="hidden md:flex gap-8 font-semibold text-white">
          <li className='listy' ><a href="#home">Home</a></li>
          <li className='listy'><a href="#about">About Me</a></li>
          <li className='listy'><a href="#projects">Project</a></li>
          <li className='listy'><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Hamburger (only below md) */}
        <div className="md:hidden">
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggleMenu}
              className={`bars text-2xl transition-transform duration-200 ${
                isRotating ? 'rotate-0' : 'rotate-90'
              }`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggleMenu}
              className={`bars text-2xl transition-transform duration-200 ${
                isRotating ? 'rotate-90' : 'rotate-0'
              }`}
            />
          )}
        </div>
      </header>

      <Body open={isOpen} />
    </>
  );
}
