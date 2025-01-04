import { motion } from 'framer-motion';

const BookNow = () => {
  return (
    <section id="book-now" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Book Your Journey</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Departure City"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Destination City"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Passengers</label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Number of passengers"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Search Buses
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookNow;