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
  { id: 'tata-motors', name: 'Tata Motors', logo: "/logos/tata_motors_bg.png" },
  { id: 'bj-medical-college', name: 'BJ Medical College', logo: "/logos/bj_medical_bg.png" },
  { id: 'civil-hospital', name: 'Civil Hospital', logo: "/logos/civil_hospital_bg.png" },
  { id: 'sns-systems', name: 'SNS Systems', logo: "/logos/sns_bg.png" },
  { id: 'ongc', name: 'ONGC', logo: "/logos/ongc_bg.png" },
  { id: 'taj-hotels', name: 'Taj Hotels', logo: "/logos/taj_bg.png" },
  { id: 'sri-print-shop', name: 'Sri Print Shop' },
  { id: 'niti-printers', name: 'Niti Printers' },
  { id: 'bharat-paper-bag', name: 'Bharat Paper Bag' }
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pinks via-blues to-yellows">
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

        {/* Client Logos - Infinite Scroll */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -160 * clients.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="shrink-0 flex items-center justify-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group min-w-[140px] md:min-w-40"
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-[100px] max-h-[50px] md:max-w-[120px] md:max-h-[60px] object-contain transition-all duration-300"
                  />
                ) : (
                  <div className="w-20 h-10 md:w-24 md:h-12 bg-linear-to-r from-gray-200 to-gray-300 rounded flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600 text-center">
                      {client.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
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