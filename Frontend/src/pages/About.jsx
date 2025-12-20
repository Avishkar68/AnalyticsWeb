import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-emerald-500 uppercase mb-2">
            About Us
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Turning insight into impact
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help businesses make confident decisions through strategy,
            data, and clarity.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who we are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a consulting and data-driven solutions team focused on
              solving real business problems. Our approach blends strategic
              thinking with analytics to help organizations grow sustainably.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From early-stage startups to established enterprises, we work
              closely with teams to uncover insights, streamline processes,
              and build systems that last.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To empower businesses with clarity, confidence, and
                data-backed decisions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600">
                To become a trusted partner for organizations seeking
                meaningful and measurable growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Our Values</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Transparency & trust</li>
                <li>• Data-driven thinking</li>
                <li>• Long-term impact</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">5+</h3>
            <p className="text-sm text-gray-600">Industries Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">50+</h3>
            <p className="text-sm text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-sm text-gray-600">Client Commitment</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
