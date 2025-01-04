import { FaBus, FaRoute, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaBus className="text-4xl text-blue-500" />,
    title: 'Bus Booking',
    description: 'Easy and convenient bus booking for all your travel needs with comfortable seating options.'
  },
  {
    icon: <FaRoute className="text-4xl text-blue-500" />,
    title: 'Tour Packages',
    description: 'Customized tour packages for groups and individuals with the best itineraries.'
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-500" />,
    title: 'Customer Support',
    description: '24/7 customer support and assistance for all your queries and concerns.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;