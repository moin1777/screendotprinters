'use client';

import React, { useState } from 'react';

export const QuoteFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || '', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Thank you! Your quote request has been submitted successfully. We\'ll get back to you soon!');
        form.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: '',
          message: ''
        });
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  };

  return (
    <div className="bg-pure-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      <h3 className="text-xl font-bold text-dark-gunmetal mb-2">Get a Quick Quote</h3>
      <p className="text-slate-gray mb-6">Tell us what you need — we'll provide fast pricing.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-gray mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-gray mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Phone and Product Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-gray mb-1">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
              placeholder="1234567890"
            />
          </div>
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-slate-gray mb-1">
              Product Required
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 text-charcoal placeholder:text-slate-gray/60"
              placeholder="e.g., Business Cards, Brochures"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-gray mb-1">
            Your Message <span className="text-slate-gray/60">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-2.5 bg-light-gray border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pinks/30 resize-none text-charcoal placeholder:text-slate-gray/60"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pinks to-blues text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          Get a Quote
        </button>
      </form>
    </div>
  );
};