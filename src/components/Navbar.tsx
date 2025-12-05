'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/data/siteData';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateHome = () => {
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={navigateHome}>
            <Image
              src="/images/logo.png"
              alt="Screendot Printers Logo"
              width={140}
              height={46}
              className="h-12 w-auto"
            />
            {/* <div className="hidden sm:block">
              <p className="text-xs font-bold text-gray-600">{siteConfig.company.tagline}</p>
            </div> */}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search prints, categories, items..."
                className="w-full px-3 py-1.5 pr-8 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={navigateHome}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium text-[17px]"
            >
              Home
            </button>
            <button
              onClick={() => router.push('/about')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium text-[17px]"
            >
              About
            </button>
            <button className="bg-linear-to-r from-pinks to-blues text-white px-4 py-1.5 text-sm rounded-full hover:from-pinks hover:to-blues transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search prints, categories, items..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Mobile Links */}
              <button
                onClick={() => {
                  navigateHome();
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 font-medium w-full text-left"
              >
                Home
              </button>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-linear-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-200 font-medium">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};