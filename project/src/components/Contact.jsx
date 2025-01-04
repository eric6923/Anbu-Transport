import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@anbutransport.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">123 Transport Street, City, Country</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;