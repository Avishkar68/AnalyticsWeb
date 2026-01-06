import React, { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    const recipient = "kakadeavishkar84@gmail.com";
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nMessage:\n${formData.message}`
    );

    // This opens the user's default email app
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#F9FAFB] min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-sm font-semibold text-point-text uppercase tracking-widest mb-2">
            Contact Us
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-4 leading-tight">
            Contact Sevenisles for Data Analytics & Consulting
          </h1>

          <p className="text-subtext text-base md:text-lg max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hello? We’d love
            to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-maintext mb-4">
                Get in touch
              </h3>

              <p className="text-subtext text-sm md:text-base mb-6">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-5 text-sm md:text-base text-maintext">
                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                  <span className="font-bold text-point-text uppercase text-[10px] tracking-wider sm:w-20">
                    Email
                  </span>
                  <div className="flex flex-col gap-1 font-medium">
                    <a
                      href="mailto:neha.patwa@sevenislesconsultancy.com"
                      className="hover:text-point-text transition-colors"
                    >
                      neha.patwa@sevenislesconsultancy.com
                    </a>
                    <a
                      href="mailto:info@sevenislesconsultancy.com"
                      className="hover:text-point-text transition-colors"
                    >
                      info@sevenislesconsultancy.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                  <span className="font-bold text-point-text uppercase text-[10px] tracking-wider sm:w-20">
                    Phone
                  </span>
                  <a
                    href="tel:+13478794529"
                    className="font-medium hover:text-point-text transition-colors"
                  >
                    +1 (347) 879-4529
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                  <span className="font-bold text-point-text uppercase text-[10px] tracking-wider sm:w-20">
                    Address
                  </span>
                  <span className="font-medium leading-relaxed">
                    1 2nd Street, Unit 2411, Jersey City, NJ 07302, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 order-1 lg:order-2">
            <h3 className="text-xl font-bold text-maintext mb-6">
              Send us a message
            </h3>

            <form className="space-y-5" onSubmit={handleSendEmail}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-maintext mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm text-maintext placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-point-text/20 focus:border-point-text transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-maintext mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
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
