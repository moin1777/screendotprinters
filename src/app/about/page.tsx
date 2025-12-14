'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { CategoryTabs } from '@/components/CategoryTabs';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      <CategoryTabs />

      {/* Who We Are Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Who We Are
            </motion.h1>

            {/* Description */}
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At Screendot Printers, we believe in the power of print to transform ideas into reality. Whether it's business branding, custom merchandise, or high-quality packaging, we are committed to delivering exceptional printing solutions that leave a lasting impression.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                With over 25 years of experience, we have mastered the art of precision printing, combining state-of-the-art technology with expert craftsmanship. Our goal is to provide fast, reliable, and eco-friendly printing services that cater to businesses and individuals alike.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Driven by Purpose Section */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900 italic">Driven by Purpose,</span>{' '}
            <span className="text-gray-900">Powered by</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 italic">Vision</span>
          </motion.h2>

          {/* Values, Mission, Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Values */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                We believe in trust, quality, innovation, and sustainability. Every project is handled with precision to ensure that customers receive exceptional prints while minimizing environmental impact.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center border-2 border-blue-200">
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                Our Mission
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide high-quality, customized printing solutions with a focus on creativity, detail, and excellence. We aim to bring ideas to life with precision and care.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                We envision a future where printing is more innovative, sustainable, and accessible. By using advanced technology, we set new industry standards while helping brands make a lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500">
              Screendot Printers
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description: 'Quick delivery without compromising on quality'
              },
              {
                icon: '🎯',
                title: 'Precision Quality',
                description: 'State-of-the-art technology for perfect prints'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly',
                description: 'Sustainable materials and printing practices'
              },
              {
                icon: '💼',
                title: '25+ Years Experience',
                description: 'Trusted expertise in commercial printing'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}