'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ProductDetail } from '@/data/productDetails';
import { Navbar } from './Navbar';
import { CategoryTabs } from './CategoryTabs';

interface ProductDetailPageProps {
  product: ProductDetail;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Category Tabs */}
      <CategoryTabs />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Product Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-4/3 bg-linear-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                  {/* Product image placeholder */}
                  <div className="w-full h-full bg-linear-to-br from-yellow-100 via-pink-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">{product.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Category Badge */}
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {product.subtitle}
                </span>
              </motion.div>

              {/* Product Title */}
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.title}
              </motion.h1>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {/* Feature Number */}
                    <div className="shrink-0 w-8 h-8 bg-linear-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{feature.id}</span>
                    </div>
                    
                    {/* Feature Content */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button className="w-full sm:w-auto bg-linear-to-r from-pinks to-blues text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  {product.cta.text}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Section (Optional) */}
      {/* {product.specifications && (
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Specifications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed technical information about this product
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.specifications.material && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Material</h3>
                  <p className="text-gray-600">{product.specifications.material}</p>
                </motion.div>
              )}

              {product.specifications.sizes && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Available Sizes</h3>
                  <div className="text-gray-600 space-y-1">
                    {product.specifications.sizes.map((size, index) => (
                      <p key={index}>{size}</p>
                    ))}
                  </div>
                </motion.div>
              )}

              {product.specifications.finish && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Finish</h3>
                  <p className="text-gray-600">{product.specifications.finish}</p>
                </motion.div>
              )}

              {product.specifications.printing && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Printing</h3>
                  <p className="text-gray-600">{product.specifications.printing}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section> */}
      {/* )} */}
    </div>
  );
};