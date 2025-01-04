import React from 'react';
import { Bus, MapPin, Headphones } from 'lucide-react';

const ServiceCard = ({ Icon, title, description }) => (
  <div className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="text-center mb-6">
        <div className="inline-block p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
          <Icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
  </div>
);

const services = [
  {
    Icon: Bus,
    title: 'Bus Booking',
    description: 'Easy and convenient bus booking for all your travel needs with comfortable seating options and real-time tracking.'
  },
  {
    Icon: MapPin,
    title: 'Tour Packages',
    description: 'Expertly curated tour packages for unforgettable adventures, featuring handpicked destinations and exclusive experiences.'
  },
  {
    Icon: Headphones,
    title: 'Customer Support',
    description: 'Round-the-clock dedicated customer support to ensure your journey is smooth and worry-free from start to finish.'
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of travel services designed to make your journey memorable and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* <div className="mt-20 text-center">
            <p className="text-gray-600 mb-8">Need help planning your trip?</p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Services;