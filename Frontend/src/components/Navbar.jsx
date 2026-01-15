// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { BarChart2, Menu, X } from 'lucide-react';
// import SevenIsles_consultancy_logo from "../assets/SevenIsles_consultancy_logo.png"
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isOpen]);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Blog', path: '/blog' },
//   ];

//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-[100]">
      
//       {/* Logo Section - EXACTLY AS ORIGINAL */}
//       <Link to="/" className="flex items-center gap-1 hover:opacity-90 transition-opacity z-[120]">
//         <div className="w-50 ">
//           <img src={SevenIsles_consultancy_logo} />
//         </div>
//         {/* <span className="text-2xl font-bold text-slate-800 tracking-tight">
//           Seveniles
//         </span> */}
//       </Link>

//       {/* Navigation Links - EXACTLY AS ORIGINAL */}
//       <div className="hidden md:flex items-center gap-8">
//         <Link to="/" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
//           Home
//         </Link>
//         <Link to="/services" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
//           Offerings
//         </Link>
//         <Link to="/about" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
//           About Us
//         </Link>
//         <Link to="/blog" className="text-sm font-medium text-subtext hover:text-point-text transition-colors">
//           Blog
//         </Link>
//       </div>

//       {/* CTA Button - EXACTLY AS ORIGINAL (Visible on Desktop) */}
//       <div className="hidden md:block">
//         <Link to="/contact">
//           <button className="bg-maintext text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-point-text hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
//             Contact Us
//           </button>
//         </Link>
//       </div>

//       {/* MOBILE TOGGLE - ONLY VISIBLE ON MOBILE */}
//       <button 
//         className="md:hidden z-[120] p-2 text-maintext"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* FULL SCREEN OVERLAY */}
//       <div className={`
//         fixed inset-0 z-[110] md:hidden transition-all duration-500
//         ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//       `}>
//         <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl" />
//         <div className="relative h-[100dvh] flex flex-col items-center justify-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="text-3xl font-bold text-maintext"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link to="/contact">
//             <button className="bg-maintext text-white px-10 py-4 rounded-full text-lg font-semibold">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SevenIsles_consultancy_logo from "../assets/sevenisles_consultancy_logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

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
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-[100]">
      
      {/* Logo */}
      <Link to="/" className="flex items-center z-[120]">
        <img
          src={SevenIsles_consultancy_logo}
          alt="SevenIsles Consultancy"
          className="w-48"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-sm font-medium text-subtext hover:text-point-text"
        >
          Home
        </Link>

        <button
          onClick={handleOfferingsClick}
          className="text-sm font-medium text-subtext hover:text-point-text"
        >
          Offerings
        </button>

        <Link
          to="/about"
          className="text-sm font-medium text-subtext hover:text-point-text"
        >
          About Us
        </Link>

        <Link
          to="/blog"
          className="text-sm font-medium text-subtext hover:text-point-text"
        >
          Blog
        </Link>
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <Link to="/contact">
          <button className="bg-maintext text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-point-text transition-all">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden z-[120] p-2 text-maintext"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[110] md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl" />

        <div className="relative h-[100dvh] flex flex-col items-center justify-center gap-8">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-maintext"
          >
            Home
          </Link>

          <button
            onClick={handleOfferingsClick}
            className="text-3xl font-bold text-maintext"
          >
            Offerings
          </button>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-maintext"
          >
            About Us
          </Link>

          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-maintext"
          >
            Blog
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-maintext text-white px-10 py-4 rounded-full text-lg font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
