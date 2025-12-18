import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BarChart2, Briefcase, Code, Megaphone, Shield } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Raw links for your dropdown
  const serviceLinks = [
    { name: 'Web Development', icon: <Code size={16} />, path: '/services/web' },
    { name: 'Digital Marketing', icon: <Megaphone size={16} />, path: '/services/marketing' },
    { name: 'UI/UX Design', icon: <Briefcase size={16} />, path: '/services/design' },
    { name: 'Cyber Security', icon: <Shield size={16} />, path: '/services/security' },
  ];

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
        
        {/* Dropdown Menu */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="flex items-center gap-1 py-2 text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
            Services
            <ChevronDown 
              size={14} 
              className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* Smooth Dropdown Card */}
          <div className={`
            absolute top-full -left-4 w-56 pt-2 transition-all duration-300 origin-top-left
            ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
          `}>
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  to="/services"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                >
                  <span className="text-blue-500">{service.icon}</span>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

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