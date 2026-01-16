'use client';

import React from 'react';
import { motion } from 'motion/react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-pure-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pinks/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blues/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pinks to-reds bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm text-slate-gray">Happy Clients</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blues to-pinks bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div className="text-sm text-slate-gray">Projects Delivered</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-yellows to-reds bg-clip-text text-transparent mb-2">
              29+
            </div>
            <div className="text-sm text-slate-gray">Years Experience</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pinks to-blues bg-clip-text text-transparent mb-2">
              99%
            </div>
            <div className="text-sm text-slate-gray">Satisfaction Rate</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
