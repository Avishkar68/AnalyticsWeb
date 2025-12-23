import React from "react";

const Hero = () => {
  return (
    <section className="min-h-fit py-26 bg-gray-50 flex items-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maintext leading-14 tracking-tight">
            Helping businesses<br/> grow
            through smart strategy.
          </h1>

          <p className=" max-w-xl text-subtext">
            Driven by purpose and powered by creativity, we help brands connect
            with their audience through meaningful storytelling and design that
            inspires action.
          </p>

          <div className="flex items-center gap-4">
            <button className=" hover:bg-button-hover-bg  text-button-text hover:text-button-hover-text border cursor-pointer border-button-border px-6 py-3 rounded-full font-medium transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Team strategy meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-10 left-6 bg-white rounded-2xl shadow-lg p-4 w-36">
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
