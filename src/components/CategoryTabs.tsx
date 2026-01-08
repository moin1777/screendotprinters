'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { categoriesData, Category, Product } from '@/data/siteData';

export const CategoryTabs: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5); // Small threshold to account for rounding
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // Small threshold
    }
  };

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = (categoryId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveCategory(categoryId);
    setShowPanel(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowPanel(false);
      setActiveCategory(null);
    }, 150); // Small delay to allow moving to panel
  };

  const handlePanelMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handlePanelMouseLeave = () => {
    setShowPanel(false);
    setActiveCategory(null);
  };

  // Mobile click handler
  const handleCategoryClick = (categoryId: string) => {
    if (activeCategory === categoryId && showPanel) {
      setShowPanel(false);
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
      setShowPanel(true);
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const activeData = categoriesData.find(cat => cat.id === activeCategory);

  useEffect(() => {
    checkScrollPosition();
    
    const handleResize = () => {
      checkScrollPosition();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative bg-pure-white border-b border-light-gray">
      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left Arrow - Mobile Only */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pure-white shadow-lg rounded-full p-2 transition-all duration-200 md:hidden ${
              canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-slate-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Mobile Only */}
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pure-white shadow-lg rounded-full p-2 transition-all duration-200 md:hidden ${
              canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-slate-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex justify-start md:justify-center overflow-x-auto scrollbar-hide py-2 gap-2 md:px-0 px-12"
            onScroll={checkScrollPosition}
          >
          {categoriesData.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap border border-transparent hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md ${
                activeCategory === category.id && showPanel
                  ? 'text-blue-600 border-blue-400 bg-blue-50 shadow-md scale-105'
                  : 'text-gray-700'
              }`}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
          </div>
        </div>
      </div>

      {/* Product Panel */}
      <AnimatePresence>
        {showPanel && activeData && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-pure-white border-b border-light-gray shadow-lg z-40"
            onMouseEnter={handlePanelMouseEnter}
            onMouseLeave={handlePanelMouseLeave}
          >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-dark-gunmetal mb-2">{activeData.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeData.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <ProductCard product={product} onProductClick={handleProductClick} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to truncate text to 3 lines
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleClick = () => {
    onProductClick(product.id);
  };

  return (
    <div 
      className="group bg-pure-white rounded-lg border border-light-gray p-6 hover:shadow-lg hover:border-pinks/50 transition-all duration-200 cursor-pointer h-48 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <h4 className="font-semibold text-dark-gunmetal group-hover:text-pinks transition-colors duration-200 mb-3 text-lg leading-tight">
          {product.title}
        </h4>
        <p className="text-sm text-slate-gray leading-relaxed grow mb-4 overflow-hidden">
          {truncateText(product.description)}
        </p>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center text-pinks text-sm font-medium group-hover:text-pinks/80 transition-colors duration-200 mt-auto"
            >
              <span>Learn More</span>
              <svg 
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};