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
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full Width Image - Commented Out
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Team / Office Image</p>
                </div>
              </div>
            </div>
          </motion.div>
          */}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-10 italic justify-center flex">
              Who We Are
            </h1>
            <div className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                Screendot Printers is a trusted name in printing and production, with 29+ years of experience delivering high-quality print solutions across industries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 1996, Screendot began with limited resources but a strong commitment to craftsmanship, reliability, and long-term relationships. Over the years, we have grown steadily by adapting to changing technologies, refining our processes, and consistently meeting the evolving needs of our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we specialize in offset and digital printing, commercial print solutions, packaging, and customized merchandise, combining technical expertise with thoughtful execution. Our strength lies not just in what we print, but in how we collaborate — working closely with clients to deliver solutions that are practical, precise, and purpose-driven.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in continuous improvement, agility, and value creation. With a strong focus on quality and timelines, we aim to be a dependable print partner for brands, businesses, institutions, and individuals alike.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Screendot, our journey is built on trust, experience, and the relationships we continue to grow — and we look forward to creating many more successful print stories together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Driven by Purpose Section */}
      <section className="py-16 lg:py-24 bg-white">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Our Values */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-lg transition-all duration-300"
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
              className="bg-blue-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-lg transition-all duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-blue-200">
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
              className="bg-gray-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-lg transition-all duration-300"
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

      {/* Our Facility Section */}
      {/* <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Facility
          </motion.h2> */}

          {/* Image Grid */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              'Printing Equipment',
              'Production Floor',
              'Quality Control',
              'Packaging Area'
            ].map((label, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }} */}
              {/* > */}
                {/* Image placeholder */}
                {/* <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-center text-gray-400 p-4">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs">{label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-pinks" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fast Turnaround',
                description: 'Quick delivery without compromising on quality'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-pinks" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Precision Quality',
                description: 'State-of-the-art technology for perfect prints'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-pinks" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: 'Eco-Friendly',
                description: 'Sustainable materials and printing practices'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-pinks" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: '29+ Years',
                description: 'Trusted expertise in commercial printing'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
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