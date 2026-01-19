import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import SevenIsles_consultancy_logo from "../assets/SILogo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleOfferingsClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("offerings")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document
        .getElementById("offerings")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  return (
    <footer className="bg-white pt-16 pb-8 px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
          <Link to="/" className="flex items-center z-[120]">
        <img
          src={SevenIsles_consultancy_logo}
          alt="SevenIsles Consultancy"
          className="w-48"
        />
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
              <li><Link to="/about" className="text-subtext hover:text-point-text text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-subtext hover:text-point-text text-sm transition-colors">Contact Us</Link></li>
              {/* <li><Link to="/blog" className="text-subtext hover:text-point-text text-sm transition-colors">Blog</Link></li> */}
            </ul>
          </div>

          {/* Services */}

          {/* Information */}
         <div>
  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
    Information
  </h4>

  <ul className="space-y-4 text-sm text-subtext">
    <li className="leading-relaxed">
      <span className="block text-slate-500 font-medium">Address</span>
      1 2nd Street, Jersey City,<br />
      NJ 07302, USA
    </li>

    <li>
      <span className="block text-slate-500 font-medium">Phone</span>
      <a
        href="tel:+13478794529"
        className="hover:text-point-text transition-colors"
      >
        +1 (347) 879-4529
      </a>
    </li>
  </ul>
</div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Social Links
            </h4>
            <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/sevenisles-consultancy" target='_blank' className="w-8 h-8 flex items-center justify-center rounded bg-[#fdf2f0] text-blue-800 hover:opacity-80 transition-opacity">
              <Linkedin size={18} />
            </a>
            
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © {currentYear} SevenIsles Consultancy. All rights reserved.
          </p>
          
          {/* <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#fdf2f0] text-[#e4405f] hover:opacity-80 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#e8f5fd] text-[#1da1f2] hover:opacity-80 transition-opacity">
              <Twitter size={18} fill="currentColor" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#e7f0f7] text-[#3b5998] hover:opacity-80 transition-opacity">
              <Facebook size={18} fill="currentColor" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;