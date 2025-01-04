import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Shield } from 'lucide-react';

const Feature = ({ Icon, title }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-white" />
    <span className="text-white text-sm">{title}</span>
  </div>
);

const BookNow = () => {
  return (
    <section id="book-now" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Book Now
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 L50 100 Z" fill="white" />
              </svg>
            </div>
            
            <div className="relative p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                  >
                    Book Instantly on
                    <span className="block mt-2">Tick My Bus</span>
                  </motion.h2>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4 mb-8"
                  >
                    <Feature Icon={Rocket} title="Instant Confirmation" />
                    <Feature Icon={Clock} title="24/7 Booking Available" />
                    <Feature Icon={Shield} title="Secure Payment" />
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <a
                    href="https://www.tickmybus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50"
                  >
                    Book Now
                  </a>
                  <p className="text-white text-sm mt-6 opacity-90">
                    Best prices guaranteed • No hidden charges
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookNow;