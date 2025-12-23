import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BarChart2, Briefcase, Code, Megaphone, Shield } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Raw links for your dropdown


  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <div className="bg-point-text p-1.5 rounded-lg shadow-sm">
          <BarChart2 size={20} className="text-white transform rotate-90" />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">
        Seveniles
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
          Home
        </Link>
        
        

        <Link to="/services" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
Services        </Link>
        
        <Link to="/about" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
          About Us
        </Link>
        
        <Link to="/blog" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
          Blog
        </Link>
      </div>

      {/* CTA Button */}
      <Link to="/contact">
        <button className="bg-maintext text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-point-text hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
          Contact Us
        </button>
      </Link>

    </nav>
  );
};

export default Navbar;