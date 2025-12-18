import React from "react";

const OurServices = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-sm font-semibold text-emerald-500 uppercase mb-2">
          Our Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Grow smiles to boost business
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Business Consulting
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We have a team of experienced consultants who can help you boost
              your business performance.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Strategic Business Guidance</li>
              <li>✓ Market Analysis</li>
              <li>✓ Smart Consulting Services</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Data Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Leverage data to its full potential. Our experts help you build
              robust data pipelines and analytics.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ BI Implementation</li>
              <li>✓ Predictive Modeling</li>
              <li>✓ Data Warehousing</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Finance Strategy
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Go beyond just numbers. We provide finance strategies that align
              with your long-term vision.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Financial Planning</li>
              <li>✓ Investment Advisory</li>
              <li>✓ Risk Assessment</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
