'use client';

import React from 'react';
import { featuredProducts } from '@/data/siteData';

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products & Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular printing solutions designed to help your business make a lasting impression.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-12">
          <button className="bg-linear-to-r from-pinks to-blues text-white px-8 py-4 rounded-full hover:from-pinks-600 hover:to-blues-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Products
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

interface FeaturedProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: string;
  };
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative h-72 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-pink-50 to-blue-50">
          {/* Placeholder for actual product image */}
          <div className="w-full h-full bg-linear-to-br from-orange-100 to-orange-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {product.title}
        </h3>
        
        {/* Explore Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Explore</span>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
            <svg className="w-4 h-4 text-gray-600 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};