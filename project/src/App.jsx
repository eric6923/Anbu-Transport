import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookNow from './components/BookNow';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'
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
      <Footer/>
    </div>
  );
}

export default App;