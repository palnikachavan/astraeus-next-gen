import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
              <img 
                src="https://media-hosting.imagekit.io//ce38638f3b3a45d7/Logo.jpeg?Expires=1835196160&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aA7ub37F9XKmmYxEEm3b~kRHrBrmBPTdwzC5riMHdIABh3JjmwljyqsQUt6D3R6cUoLdRf47oQHNNnfgFVxIhVZLNmwRSE4IKSoz0J8f4FMt2gDemAvj4BpuKOxnkZNlRXkc7B~4K5rpxx474LwKifXD9TNyOtjLgO5CkBIZQ82ZUR9GzL4HxEHwrVPyV6F6fmsd8V7w0fikrSe~iVJHZP1Trdx2loDY2LGre~7PF5~3FtEWd6KDoqibQwnw73w3mCCq~BDc8bjZdAnVpaiFyRHlpI8PrXktOhg~oxjBkZsMHtOkghLZWlb7zC~DZewea51-kKCLA7k4WLAqxLjdgw__" 
                alt="Astraeus Next Gen" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">Astraeus Next Gen</span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <RouterLink
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </RouterLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            {NAV_LINKS.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </RouterLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;