import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-special-section-bg py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-point-text uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-maintext">
            See what our customers<br/> have to say about us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-subtext text-sm mb-6 leading-relaxed">
              “Working with several world-class designers has been a real
              time-saver for me. It allowed me to focus on what I do best,
              which is creating beautiful and user-friendly websites that
              my clients are always happy with.”
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Cooper"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-maintext">
                    Jane Cooper
                  </p>
                  <p className="text-xs text-subtext opacity-80">
                    CEO, Innotech
                  </p>
                </div>
              </div>

              <div className="text-point-text text-sm">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-subtext text-sm mb-6 leading-relaxed">
              “Sinek’s team provides invaluable strategic guidance. Their
              insights have been critical for our growth, helping us
              navigate a competitive marketplace with confidence and
              clarity. Highly recommended for any business looking to
              scale.”
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Smith"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-maintext">
                    John Smith
                  </p>
                  <p className="text-xs text-subtext opacity-80">
                    Creative Director
                  </p>
                </div>
              </div>

              <div className="text-point-text text-sm">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
