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
        <div className="bg-blue-600 p-1.5 rounded-lg shadow-sm">
          <BarChart2 size={20} className="text-white transform rotate-90" />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">
          Sincio
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
          Home
        </Link>
        
        

        <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
Services        </Link>
        
        <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
          About Us
        </Link>
        
        <Link to="/blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
          Blog
        </Link>
      </div>

      {/* CTA Button */}
      <Link to="/contact">
        <button className="bg-[#1a1f2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
          Contact Us
        </button>
      </Link>

    </nav>
  );
};

export default Navbar;