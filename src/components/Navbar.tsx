
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center font-bold text-2xl text-blue-600">
            <span className="text-black">app</span>flux
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        
        <Button className="hidden md:inline-flex">Get Started</Button>
        
        <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
