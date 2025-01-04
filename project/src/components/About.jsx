import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "500+", label: "Routes Covered" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-500/5 transform rotate-3" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-gray-800 mb-8 relative inline-block">
              About Us
              <span className="absolute -bottom-4 left-0 right-0 h-2 bg-blue-500 rounded-full transform scale-x-50 hover:scale-x-100 transition-transform duration-300" />
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Since 2010, Anbu Transport Private Limited has been setting the standard 
              for excellence in transportation services.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-12 mb-20 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Our journey began with a simple mission: to provide transportation services 
                that people can truly rely on. Today, we operate a modern fleet of vehicles, 
                employ professional drivers, and maintain the highest standards of safety 
                and comfort in the industry.
              </p>
              <p>
                What sets us apart is our dedication to customer satisfaction and our 
                understanding that each journey is unique. Whether it's a short trip or 
                a long-distance journey, we ensure that every travel experience with us 
                is memorable for all the right reasons.
              </p>
              <p>
                Our commitment to excellence extends beyond just transportation. We invest 
                in regular maintenance of our vehicles, continuous training of our staff, 
                and implementation of the latest safety measures to ensure peace of mind 
                for our customers.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-5xl font-bold text-blue-600 mb-4">
                    {stat.number}
                  </h3>
                  <p className="text-xl text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;