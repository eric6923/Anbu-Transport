import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 mb-8">
            Anbu Transport Private Limited has been serving travelers since 2010. We take pride in providing 
            reliable, comfortable, and safe transportation services across the country. Our commitment to 
            customer satisfaction and safety has made us a trusted name in the transportation industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
              <p className="text-gray-600">Of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">1000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">500+</h3>
              <p className="text-gray-600">Routes Covered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;