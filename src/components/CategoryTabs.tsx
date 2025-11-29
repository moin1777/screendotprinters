'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { categoriesData, Category, Product } from '@/data/siteData';

export const CategoryTabs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const activeData = categoriesData.find(cat => cat.id === activeCategory);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-white border-b border-gray-200">
      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center overflow-x-auto scrollbar-hide py-4 gap-2">
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

      {/* Product Panel */}
      <AnimatePresence>
        {showPanel && activeData && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40"
            onMouseEnter={handlePanelMouseEnter}
            onMouseLeave={handlePanelMouseLeave}
          >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeData.name}</h3>
              <p className="text-gray-600 text-sm">PRODUCTS</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeData.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <ProductCard product={product} />
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
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer">
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200">
          <span>Learn More</span>
          <svg 
            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};