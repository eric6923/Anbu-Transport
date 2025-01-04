import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Journey, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience comfortable and safe travels with Anbu Transport
          </p>
          <Link
            to="book-now"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;