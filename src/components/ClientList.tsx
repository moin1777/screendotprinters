'use client';

import React from 'react';
import { motion } from 'motion/react';

interface Client {
  id: string;
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { id: 'lubi-pumps', name: 'Lubi Pumps', logo: "/logos/lubi_bg.png" },
  { id: 'niti-printers', name: 'Niti Printers' },
  { id: 'tata-motors', name: 'Tata Motors', logo: "/logos/tata_motors_bg.png" },
  { id: 'bj-medical-college', name: 'BJ Medical College', logo: "/logos/bj_medical_bg.png" },
  { id: 'civil-hospital', name: 'Civil Hospital', logo: "/logos/civil_hospital_bg.png" },
  { id: 'sri-print-shop', name: 'Sri Print Shop' },
  { id: 'sns-systems', name: 'SNS Systems', logo: "/logos/sns_bg.png" },
  { id: 'ongc', name: 'ONGC', logo: "/logos/ongc_bg.png" },
  { id: 'bharat-paper-bag', name: 'Bharat Paper Bag' },
  { id: 'taj-hotels', name: 'Taj Hotels', logo: "/logos/taj_bg.png" }
];

export const ClientList: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Leading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pinks via-blues to-yellows">
              Businesses
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We've had the privilege of serving these amazing clients with our premium printing solutions
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer h-32 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center w-full">
                  {/* Display actual logo */}
                  {client.logo ? (
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-h-full max-w-full object-contain filter transition-all duration-300 group-hover:brightness-110"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-pink-500 via-blue-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300 text-center leading-tight">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Animation for Mobile */}
        <div className="mt-12 lg:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6 py-4"
              animate={{ x: [0, -100] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 flex items-center space-x-2"
                >
                  {client.logo && (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="h-6 w-auto object-contain"
                    />
                  )}
                  <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-green-500 text-lg">✓</span>
              <span>500+ Projects Delivered</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-green-500 text-lg">✓</span>
              <span>99% Client Satisfaction</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-green-500 text-lg">✓</span>
              <span>25+ Years Experience</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};