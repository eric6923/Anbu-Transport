import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookNow from './components/BookNow';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BookNow />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;