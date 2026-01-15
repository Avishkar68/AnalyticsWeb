import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom"; // 1. Import hooks
import hero1 from "../assets/hero1.jpeg"
import hero2 from "../assets/hero2.jpeg"
import hero3 from "../assets/hero3.jpeg"
import hero4 from "../assets/hero4.jpeg"

const slides = [
  {
    id: 1,
    subtitle: "Where Data Ends, Insight Begins.",
    image: hero2, // Use imported hero1
  },
  {
    id: 2,
    subtitle: "Build a smarter, insight-led enterprise",
    image: hero1, // Use imported hero2
  },
  {
    id: 3,
    subtitle: "Predictive intelligence for smarter outcomes",
    image: "https://res.cloudinary.com/dlwy6z6mn/image/upload/v1768409608/99b2cd7b-3745-4913-9d92-8c2b0cc54373_spg6hj.png",
  },
  {
    id: 4,
    subtitle: "Enable data-driven success",
    image: hero4, // Use imported hero3
  },
  {
    id: 5,
    subtitle: "Transform your business with our innovative solutions",
    image: hero3, // Use imported hero4
  },
  {
    id: 6,
    subtitle: "Upskill today, Lead tomorrow",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1170&auto=format&fit=crop",
  },
];

const ROWS = 3;
const COLS = 4;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // 2. Initialize navigate
  const location = useLocation(); // 3. Initialize location

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // 4. Create the scroll handler
  const handleExploreClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevIndex = current === 0 ? slides.length - 1 : current - 1;

  return (
    <section className="relative h-[94vh] w-full overflow-hidden bg-black text-white">
      {/* Previous slide background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[50%]"
        style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
      />

      {/* Tile transition */}
      <AnimatePresence mode="popLayout">
        <div key={current} className="absolute inset-0 z-10 grid grid-cols-4 grid-rows-3">
          {Array.from({ length: ROWS * COLS }).map((_, i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            return (
              <motion.div
                key={`${current}-${i}`}
                initial={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: (row + col) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden border-[0.5px] border-white/5"
              >
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

            {/* 5. Replaced Link with motion.button and onClick */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleExploreClick}
              className="px-10 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-md
              hover:bg-point-text hover:text-black hover:border-cyan-400
              transition-all duration-300 uppercase tracking-widest text-sm font-semibold cursor-pointer"
            >
              Explore
            </motion.button>
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
              transition={{ duration: current === index ? 6 : 0.3, ease: "linear" }}
              style={{ originX: 0 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;