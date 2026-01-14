// import React from "react";
// import { Link, useLocation } from 'react-router-dom';

// import hero from "../assets/hero.jpg";
// const Hero = () => {
//   return (
//     <section className="min-h-fit py-12 md:py-26 bg-gray-50 flex items-center px-6 md:px-16">
//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div className="space-y-6 text-left lg:text-left order-2 lg:order-1">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-maintext leading-tight lg:leading-14 tracking-tight">
//             Helping businesses grow through data analytics & strategy.
//           </h1>

//           <p className="mx-0 lg:mx-0 max-w-xl text-subtext text-base md:text-lg">
//             Driven by purpose and powered by creativity, we help brands connect
//             with their audience through meaningful storytelling and design that
//             inspires action.
//           </p>

//           <div className="flex items-center justify-start lg:justify-start gap-4">
//             <Link to="/contact">
//               <button className="hover:bg-button-hover-bg text-button-text hover:text-button-hover-text border cursor-pointer border-button-border px-8 py-3 rounded-full font-medium transition w-fit sm:w-auto">
//                 Get a Quote
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative order-1 lg:order-2">
//           <div className="rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-auto">
//             <img
//               src={hero}
//               alt="Team strategy meeting"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* FLOATING CARD - Hidden on very small screens to avoid overlap */}
//           <div className="hidden sm:block absolute -bottom-6 lg:-bottom-10 left-6 bg-white rounded-2xl shadow-lg p-4 w-32 md:w-36">
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               alt="Growth"
//               className="rounded-xl"
//             />
//             <p className="mt-2 text-center text-sm font-semibold text-gray-700">
//               Growth
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom';

// const slides = [
//   {
//     id: 1,
//     title: "",
//     subtitle: "Where Data Ends,Insight Begins.",
//     image: "https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     title: "",
//     subtitle: "Build a smarter, insight-led enterprise",
//     image: "https://plus.unsplash.com/premium_photo-1661665305417-dcd04e05f7fe?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
  
//   {
//     id: 3,
//     title: "",
//     subtitle: "Predictive intelligence for smarter outcomes",
//     image: "https://res.cloudinary.com/dlwy6z6mn/image/upload/v1768409608/99b2cd7b-3745-4913-9d92-8c2b0cc54373_spg6hj.png",
//   },
//   {
//     id: 4,
//     title: "",
//     subtitle: "Enable data-driven success",
//     image: "https://plus.unsplash.com/premium_photo-1661306434937-33a1349d435e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     title: "",
//     subtitle: "Transform your business with our innovative solutions",
//     image: "https://plus.unsplash.com/premium_photo-1661439667447-2762fdc874e5?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     title: "",
//     subtitle: "Upskill today, Lead tomorrow",
//     image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   }
// ];

// const ROWS = 3;
// const COLS = 4;

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
//       {/* Background Layer: Shows the PREVIOUS image while the NEW one tiles in */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[50%]"
//         style={{ backgroundImage: `url(${slides[(current === 0 ? slides.length - 1 : current - 1)].image})` }}
//       />

//       <AnimatePresence mode="popLayout">
//         <div key={current} className="absolute inset-0 z-10 grid grid-cols-4 grid-rows-3">
//           {Array.from({ length: ROWS * COLS }).map((_, i) => {
//             const row = Math.floor(i / COLS);
//             const col = i % COLS;
            
//             return (
//               <motion.div
//                 key={`${current}-${i}`}
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: i * 0.08, // This creates the "staggered" block appearance
//                   ease: "easeOut",
//                 }}
//                 className="relative overflow-hidden border-[0.5px] border-white/5"
//               >
//                 {/* Each tile shows a specific slice of the full background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${slides[current].image})`,
//                     width: `${COLS * 100}%`,
//                     height: `${ROWS * 100}%`,
//                     left: `-${col * 100}%`,
//                     top: `-${row * 100}%`,
//                   }}
//                 />
//                 {/* Dark tint on each tile */}
//                 <div className="absolute inset-0 bg-black/40" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </AnimatePresence>

//       {/* Content Layer */}
//       <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`content-${current}`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
//               {/* <span className="text-point-text">{slides[current].title}</span> */}
//             </h1>
//             <p className="text-xl md:text-2xl font-light mb-10 tracking-wide max-w-2xl mx-auto">
//               {slides[current].subtitle}
//             </p>
//                                         <Link to="/contact">

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-3 border border-white/30 text-white rounded-full bg-white/5 backdrop-blur-md hover:bg-point-text cursor-pointer hover:border-cyan-400 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
//             >
//               Discover Now
//             </motion.button>
//                                         </Link>

//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Slider Indicators */}
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrent(index)}
//             className="cursor-pointer group relative h-1 w-16 bg-white/20 rounded-full overflow-hidden"
//           >
//             <motion.div
//               className="absolute inset-0 bg-point-text"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: current === index ? 1 : 0 }}
//               transition={{ duration: current === index ? 6 : 0.3, ease: "linear" }}
//               style={{ originX: 0 }}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    subtitle: "Where Data Ends, Insight Begins.",
    image:
      "https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 2,
    subtitle: "Build a smarter, insight-led enterprise",
    image:
      "https://plus.unsplash.com/premium_photo-1661665305417-dcd04e05f7fe?q=80&w=1954&auto=format&fit=crop",
  },
  {
    id: 3,
    subtitle: "Predictive intelligence for smarter outcomes",
    image:
      "https://res.cloudinary.com/dlwy6z6mn/image/upload/v1768409608/99b2cd7b-3745-4913-9d92-8c2b0cc54373_spg6hj.png",
  },
  {
    id: 4,
    subtitle: "Enable data-driven success",
    image:
      "https://plus.unsplash.com/premium_photo-1661306434937-33a1349d435e?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 5,
    subtitle: "Transform your business with our innovative solutions",
    image:
      "https://plus.unsplash.com/premium_photo-1661439667447-2762fdc874e5?q=80&w=1460&auto=format&fit=crop",
  },
  {
    id: 6,
    subtitle: "Upskill today, Lead tomorrow",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1170&auto=format&fit=crop",
  },
];

const ROWS = 3;
const COLS = 4;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevIndex = current === 0 ? slides.length - 1 : current - 1;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Previous slide background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[50%]"
        style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
      />

      {/* Tile transition */}
      <AnimatePresence mode="popLayout">
        <div
          key={current}
          className="absolute inset-0 z-10 grid grid-cols-4 grid-rows-3"
        >
          {Array.from({ length: ROWS * COLS }).map((_, i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;

            return (
              <motion.div
                key={`${current}-${i}`}
                initial={{
                  opacity: 0,
                  scale: 1.15,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.9,
                  delay: (row + col) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden border-[0.5px] border-white/5"
              >
                {/* Image slice with slow parallax drift */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: "easeOut" }}
                  style={{
                    backgroundImage: `url(${slides[current].image})`,
                    width: `${COLS * 100}%`,
                    height: `${ROWS * 100}%`,
                    left: `-${col * 100}%`,
                    top: `-${row * 100}%`,
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl font-light mb-10 tracking-wide max-w-2xl mx-auto">
              {slides[current].subtitle}
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-md
                hover:bg-point-text hover:text-black hover:border-cyan-400
                transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
              >
                Discover Now
              </motion.button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className="cursor-pointer relative h-1 w-16 bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-point-text"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: current === index ? 1 : 0 }}
              transition={{
                duration: current === index ? 6 : 0.3,
                ease: "linear",
              }}
              style={{ originX: 0 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
