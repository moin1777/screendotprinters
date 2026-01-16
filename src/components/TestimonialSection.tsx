'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { testimonials, type Testimonial } from '@/data/siteData';

const InfiniteMovingCards: React.FC<{
  items: Testimonial[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
}> = ({ items, direction = 'left', speed = 'normal', pauseOnHover = true }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap ${
          start ? 'animate-scroll' : ''
        } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="w-[350px] max-w-full relative rounded-2xl shrink-0 px-8 py-6 md:w-[450px]"
            style={{
              background: 'linear-gradient(135deg, rgba(229, 9, 127, 0.05) 0%, rgba(0, 160, 227, 0.05) 50%, rgba(255, 237, 0, 0.05) 100%)',
              border: '1px solid rgba(229, 9, 127, 0.1)',
            }}
          >
            <blockquote className="relative h-full flex flex-col justify-between">
              {/* Quote Text */}
              <p className="relative z-20 text-base leading-relaxed text-slate-gray font-normal mb-6 grow">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="relative z-20">
                <span className="text-base font-semibold text-dark-gunmetal block">
                  {item.name}
                </span>
                <span className="text-sm text-slate-gray">
                  {item.title} {item.company && `at ${item.company}`}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-pure-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pinks/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blues/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-linear-to-r from-pinks/10 to-blues/10 rounded-full text-sm font-medium text-pinks mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.span>
            
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-dark-gunmetal mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our Clients{' '}
              <span className="bg-linear-to-r from-pinks to-blues bg-clip-text text-transparent">
                Say About Us
              </span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-slate-gray max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it — hear from the businesses who trust us with their printing needs
            </motion.p>
          </motion.div>
        </div>

        {/* Infinite Moving Cards */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
