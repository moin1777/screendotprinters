'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
  category?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  productTitle = '',
  category = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: '',
    message: '',
    product: productTitle,
    category: category
  });

  // Update product and category when props change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      product: productTitle,
      category: category
    }));
  }, [productTitle, category]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || '', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Thank you! Your quote request has been submitted successfully. We\'ll get back to you soon!');
        form.reset();
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          quantity: '',
          message: '',
          product: productTitle,
          category: category
        });
        onClose();
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-pure-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-slate-gray hover:text-dark-gunmetal transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark-gunmetal mb-2">
                    {productTitle || 'Get a Quote'}
                  </h2>
                  {category && (
                    <div className="flex items-center gap-2 text-sm text-slate-gray">
                      <span className="font-medium">Category:</span>
                      <span className="bg-blues/10 text-blues px-3 py-1 rounded-full font-medium">{category}</span>
                    </div>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Hidden fields for category and product */}
                  <input type="hidden" name="category" value={formData.category} />
                  <input type="hidden" name="product" value={formData.product} />

                  {/* Your Details Section */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-dark-gunmetal mb-3">Your Details</h3>
                  </div>

                  {/* Full Name and Company Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-gray mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-slate-gray mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
                        placeholder="Company Inc."
                      />
                    </div>
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-gray mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-gray mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
                        placeholder="1234567890"
                      />
                    </div>
                  </div>

                  {/* Quantity Field */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-gray mb-1">
                      Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
                      placeholder="e.g., 100, 500, 1000"
                    />
                  </div>

                  {/* Additional Details Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-gray mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 resize-none text-charcoal placeholder:text-slate-gray/60"
                      placeholder="Any specific sizes, stocks, finishes, or notes..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-pinks to-blues hover:from-pinks/90 hover:to-blues/90 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
