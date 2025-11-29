'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Screendot Printers Logo"
                width={140}
                height={46}
                className="h-12 w-auto"
              />
              <div>
                <p className="text-gray-400 text-sm">{siteConfig.company.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {siteConfig.company.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Services" />
              <FooterLink href="#" text="Portfolio" />
              <FooterLink href="#" text="Contact" />
              <FooterLink href="#" text="Get Quote" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="Business Cards" />
              <FooterLink href="#" text="Marketing Materials" />
              <FooterLink href="#" text="Large Format Printing" />
              <FooterLink href="#" text="Custom Apparel" />
              <FooterLink href="#" text="Labels & Packaging" />
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactInfo
            icon="📍"
            title="Visit Us"
            info={["123 Print Street", "Design City, DC 12345"]}
          />
          <ContactInfo
            icon="📞"
            title="Call Us"
            info={["(555) 123-4567", "Mon-Fri: 8AM-6PM"]}
          />
          <ContactInfo
            icon="✉️"
            title="Email Us"
            info={["hello@screendotprinters.com", "quotes@screendotprinters.com"]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Screendot Printers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink href="#" text="Privacy Policy" />
            <FooterLink href="#" text="Terms of Service" />
            <FooterLink href="#" text="Cookie Policy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'facebook':
        return (
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        );
      case 'instagram':
        return (
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.948 16.025c-1.58 0-2.863-1.282-2.863-2.863s1.282-2.863 2.863-2.863 2.863 1.282 2.863 2.863-1.282 2.863-2.863 2.863zm6.018 0c-1.58 0-2.863-1.282-2.863-2.863s1.282-2.863 2.863-2.863 2.863 1.282 2.863 2.863-1.282 2.863-2.863 2.863z"/>
        );
      case 'twitter':
        return (
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        );
      case 'linkedin':
        return (
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {getIcon()}
      </svg>
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
      >
        {text}
      </a>
    </li>
  );
};

interface ContactInfoProps {
  icon: string;
  title: string;
  info: string[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, info }) => {
  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start mb-2">
        <span className="text-lg mr-2">{icon}</span>
        <h5 className="font-semibold">{title}</h5>
      </div>
      {info.map((line, index) => (
        <p key={index} className="text-gray-300 text-sm">
          {line}
        </p>
      ))}
    </div>
  );
};