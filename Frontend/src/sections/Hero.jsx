import React from "react";
import hero from "../assets/hero.jpg"
const Hero = () => {
  return (
    <section className="min-h-fit py-12 md:py-26 bg-gray-50 flex items-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-left lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-maintext leading-tight lg:leading-14 tracking-tight">
             Helping businesses grow
  through data analytics & strategy.
          </h1>

          <p className="mx-0 lg:mx-0 max-w-xl text-subtext text-base md:text-lg">
            Driven by purpose and powered by creativity, we help brands connect
            with their audience through meaningful storytelling and design that
            inspires action.
          </p>

          <div className="flex items-center justify-start lg:justify-start gap-4">
            <button className="hover:bg-button-hover-bg text-button-text hover:text-button-hover-text border cursor-pointer border-button-border px-8 py-3 rounded-full font-medium transition w-fit sm:w-auto">
              Get a Quote
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-auto">
            <img
              src={hero}
              alt="Team strategy meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING CARD - Hidden on very small screens to avoid overlap */}
          <div className="hidden sm:block absolute -bottom-6 lg:-bottom-10 left-6 bg-white rounded-2xl shadow-lg p-4 w-32 md:w-36">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Growth"
              className="rounded-xl"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
              Growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;