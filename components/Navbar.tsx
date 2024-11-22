'use client'
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<any>(null);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between">
          {/* Desktop Brand */}
          <a className="hidden lg:flex items-center" href="index.html">
            <img src="/logo.svg" alt="Logo" className="h-24 p-3" />
          </a>

          <div>
            <div
              className="hidden lg:flex items-center justify-end w-full space-x-9 text-white bg-secondary ps-28 pe-5 py-1 rounded"
              style={{
                clipPath: "polygon(90% 0%, 100% 0, 100% 100%, 8.5% 100%, 6.5% 0%, 0 0)",
              }}
            >
              <a href="tel:+011234567890" className="flex items-center space-x-2">
                <Phone className="w-6 h-6" />
                <span>+01 1234567890</span>
              </a>
              <a href="mailto:demo@gmail.com" className="flex items-center space-x-2">
                <Mail className="w-6 h-6" />
                <span>demo@gmail.com</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>Denmark Lorem Ipsum</span>
              </a>
            </div>
            <div className="hidden lg:flex justify-end items-center mt-4 font-bold tracking-wide">
              <ul className="flex space-x-16 text-base">
                <li>
                  <Link href="/" className="uppercase hover:text-secondary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="uppercase hover:text-secondary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="uppercase hover:text-secondary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="uppercase hover:text-secondary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex items-center justify-between">
          {/* Mobile Brand */}
          <a className="flex lg:hidden items-center" href="index.html">
            <img src="/logo.svg" alt="Logo" className="w-36 p-2" />
          </a>

          {/* Toggle Button for Mobile */}
          <button
            className="lg:hidden text-primary"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {!isMenuOpen ? <Menu className="w-8 h-8" /> : <X className="w-8 h-8" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "tween", stiffness: 200 }}
        className="lg:hidden fixed top-0 left-0 w-2/3 h-full bg-primary-foreground z-10 shadow-lg"
      >
        <div className="flex justify-between items-center p-4">
          <a href="index.html">
            <img src="/logo.svg" alt="Logo" className="w-32" />
          </a>
        </div>

        <ul className="flex flex-col items-start ps-10 space-y-4 font-bold">
          <li>
            <Link href="/" className=" uppercase hover:text-secondary" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" uppercase hover:text-secondary" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className=" uppercase hover:text-secondary" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" uppercase hover:text-secondary" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
