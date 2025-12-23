import React from "react";

const Contact = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-point-text uppercase mb-2">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-maintext mb-4">
            Let’s start a conversation
          </h1>

          <p className="text-subtext max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hello?
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-100">
              <h3 className="text-lg font-semibold text-maintext mb-2">
                Get in touch
              </h3>

              <p className="text-subtext text-sm mb-4">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-3 text-sm text-maintext">
                <p>
                  <span className="font-medium">Email:</span> hello@yourcompany.com
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +91 98765 43210
                </p>
                <p>
                  <span className="font-medium">Address:</span> Mumbai, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100">
              <h3 className="text-lg font-semibold text-maintext mb-2">
                Working hours
              </h3>

              <p className="text-subtext text-sm">
                Monday – Friday: 9:00 AM – 6:00 PM <br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100">
            <h3 className="text-lg font-semibold text-maintext mb-6">
              Send us a message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-maintext mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-slate-100 rounded-xl px-4 py-3 text-sm text-maintext placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-special-section-bg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-maintext mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-100 rounded-xl px-4 py-3 text-sm text-maintext placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-special-section-bg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-maintext mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-slate-100 rounded-xl px-4 py-3 text-sm text-maintext placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-special-section-bg"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-button-border text-button-text hover:bg-button-hover-bg hover:text-button-hover-text py-3 rounded-full font-medium transition"
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
