'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/data/siteData';
import { productDetailsData } from '@/data/productDetails';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateHome = () => {
    router.push('/');
  };

  const handleQuoteClick = () => {
    // Navigate to home page
    router.push('/');
    
    // Scroll to quote form after navigation
    setTimeout(() => {
      const quoteSection = document.getElementById('quote-form');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Search functionality
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSearchResults(query.length > 0);
  };

  const handleSearchFocus = () => {
    if (searchQuery.length > 0) {
      setShowSearchResults(true);
    }
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow click on results
    setTimeout(() => setShowSearchResults(false), 200);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };

  // Filter search results based on query
  const getSearchResults = () => {
    if (!searchQuery) return [];
    
    const results: Array<{
      category: string;
      productTitle: string;
      productId: string;
    }> = [];

    const query = searchQuery.toLowerCase();
    
    // Search through all products in productDetailsData
    productDetailsData.forEach(product => {
      const matchesTitle = product.title.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      const matchesSubtitle = product.subtitle.toLowerCase().includes(query);
      
      if (matchesTitle || matchesCategory || matchesSubtitle) {
        // Map categories to display names
        const categoryDisplayNames = {
          'merchandise': 'Merchandise',
          'packaging': 'Packaging', 
          'commercial-prints': 'Commercial Prints',
          'brand-identity': 'Brand Identity'
        };

        results.push({
          category: categoryDisplayNames[product.category as keyof typeof categoryDisplayNames] || product.category,
          productTitle: product.title,
          productId: product.id
        });
      }
    });

    return results.slice(0, 10); // Limit to 10 results
  };

  const searchResults = getSearchResults();

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
          <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search prints, categories, items..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="w-full px-3 py-1.5 pr-8 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                {searchQuery ? (
                  <button
                    onClick={clearSearch}
                    className="w-4 h-4 text-gray-400 hover:text-gray-600"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      router.push(`/product/${result.productId}`);
                      clearSearch();
                    }}
                  >
                    <div className="flex items-center text-sm">
                      <span className="text-gray-900 font-medium">{result.category}</span>
                      <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-600">{result.productTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            <button
              onClick={handleQuoteClick}
              className="bg-linear-to-r from-pinks to-blues text-white px-4 py-1.5 text-sm rounded-full hover:from-pinks hover:to-blues transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
            >
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
              <div className="px-3 py-2 relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search prints, categories, items..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {searchQuery ? (
                      <button
                        onClick={clearSearch}
                        className="w-5 h-5 text-gray-400 hover:text-gray-600"
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Mobile Search Results */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-3 right-3 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        onClick={() => {
                          router.push(`/product/${result.productId}`);
                          clearSearch();
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center text-sm">
                          <span className="text-gray-900 font-medium">{result.category}</span>
                          <svg className="w-3 h-3 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-600">{result.productTitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
              <button
                onClick={() => {
                  router.push('/about');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 font-medium w-full text-left"
              >
                About
              </button>
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    handleQuoteClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-linear-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-200 font-medium"
                >
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