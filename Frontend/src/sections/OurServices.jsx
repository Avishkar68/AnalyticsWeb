import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-sm font-semibold text-emerald-500 uppercase mb-2">
          Our Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Grow smiles to boost business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white rounded-2xl shadow-sm p-8 text-left 
                         hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {service.shortDescription}
              </p>

              <ul className="space-y-2 text-sm text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx}>✓ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
