// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import Features from '../../Features';
import Pricing from '../../Pricing';
import AboutUs from './AboutUs';
import Contact from '../../Contact';
import Button from './Button'; // Assuming a Button component exists

function App() {
  // eslint-disable-next-line no-unused-vars
  const [hoveredSection, setHoveredSection] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for menu
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Added to close menu after scrolling
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <motion.div className="flex flex-col gap-4 text-white p-4"> {/* Added container for menu */}
          {[
            { text: 'Features', ref: featuresRef },
            { text: 'Pricing', ref: pricingRef },
            { text: 'About Us', ref: aboutRef },
            { text: 'Contact', ref: contactRef }
          ].map((item) => (
            <motion.div
              key={item.text}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection(item.ref)}
                className="mb-4 text-lg relative group overflow-hidden w-full"
              >
                <span className="relative z-10">{item.text}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero section content */}
          <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
          <p className="text-lg mt-4">This is a sample hero section.</p>
        </motion.section>

        {/* Features Section */}
        <motion.div
          ref={featuresRef}
          className="w-full"
          
        >
          <Features />
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          ref={pricingRef}
          className="w-full"
          
        >
          <Pricing />
        </motion.div>

        {/* About Us Section */}
        <motion.div
          ref={aboutRef}
          className="w-full"
          
        >
          <AboutUs />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          ref={contactRef}
          className="w-full"
          
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;

