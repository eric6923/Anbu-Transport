import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/80 z-10" />

      {/* Animated Dots Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] z-20" />

      <div className="container mx-auto px-6 relative z-30 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <span className="px-4 py-1 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-4 inline-block">
              
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            Your Journey,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">
              Our Priority
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience comfortable and safe travels with Anbu Transport. 
            Professional drivers and modern vehicles at your service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-x-4"
          >
            <Link
              to="book-now"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-block px-12 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-block px-12 py-4 bg-transparent border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent z-20" />
    </section>
  );
};

export default Hero;