import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-[#F9FAFB] min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-sm font-semibold text-point-text uppercase tracking-widest mb-2">
            Contact Us
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-4 leading-tight">
            Let’s start a conversation
          </h1>

          <p className="text-subtext text-base md:text-lg max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hello?
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Info - Order 2 on mobile to put form first, or keep as is for context */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-maintext mb-4">
                Get in touch
              </h3>

              <p className="text-subtext text-sm md:text-base mb-6">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-4 text-sm md:text-base text-maintext">
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-point-text uppercase text-[10px] tracking-wider">Email</span>
                  <span className="font-medium">hello@seveniles.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-point-text uppercase text-[10px] tracking-wider">Phone</span>
                  <span className="font-medium">Ph. +1(347)879-4529</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-point-text uppercase text-[10px] tracking-wider">Address</span>
                  <span className="font-medium">1 2nd Street, Unit 2411, Jersey City, NJ 07302, USA</span>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-maintext mb-4">
                Working hours
              </h3>

              <p className="text-subtext text-sm md:text-base leading-relaxed">
                Monday – Friday: 9:00 AM – 6:00 PM <br />
                Saturday & Sunday: <span className="text-point-text font-medium">Closed</span>
              </p>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 order-1 lg:order-2">
            <h3 className="text-xl font-bold text-maintext mb-6">
              Send us a message
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-maintext mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm text-maintext placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-point-text/20 focus:border-point-text transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-maintext mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm text-maintext placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-point-text/20 focus:border-point-text transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-maintext mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm text-maintext placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-point-text/20 focus:border-point-text transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-maintext text-white hover:bg-button-hover-bg py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-md active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;