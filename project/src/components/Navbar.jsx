import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Services', 'Book Now', 'Testimonials', 'Contact'];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Anbu Transport
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;