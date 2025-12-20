import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";

const Services = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <p className="text-sm font-semibold text-emerald-500 uppercase mb-2">
          {service.tagline}
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {service.title}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
          {service.detailedDescription}
        </p>

        <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
        <ul className="space-y-2 text-gray-700">
          {service.benefits.map((benefit, idx) => (
            <li key={idx}>✓ {benefit}</li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Services;
