import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <BarChart2 size={20} className="text-white transform rotate-90" />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                Sincio
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              Analytics and strategy for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Quick Link
            </h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Business Consulting</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Data Analytics</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Finance Strategy</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Risk Management</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Information
            </h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © {currentYear} Sincio Analytics. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#fdf2f0] text-[#e4405f] hover:opacity-80 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#e8f5fd] text-[#1da1f2] hover:opacity-80 transition-opacity">
              <Twitter size={18} fill="currentColor" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#e7f0f7] text-[#3b5998] hover:opacity-80 transition-opacity">
              <Facebook size={18} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;