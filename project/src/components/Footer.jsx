import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Bus } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Bus className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">Anbu Transport</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for safe and comfortable journeys across the country. Committed to excellence in transportation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Book Now', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors duration-200">
                <p className="font-medium">Address:</p>
                <p>123 Transport Street</p>
                <p>City, Country</p>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <p className="font-medium">Phone:</p>
                <p>+1 234 567 890</p>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <p className="font-medium">Email:</p>
                <p>info@anbutransport.com</p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Anbu Transport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;