import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import { Globe, BarChart3, Users, ChevronRight } from "lucide-react";

const OurServices = () => {
  const navigate = useNavigate();

  // Filter or slice to show only the top 3 services the client wants to see first
  const featuredServices = services.slice(0, 3);

  return (
    <section className="bg-white pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header Styling matching your latest preferences */}
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl">
            <span className=" text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              SevenIslands Expertise
            </span>
            <h2 className="text-5xl font-bold text-maintext tracking-tighter leading-[0.8] mb-6">
              Our Core Services<span className="text-point-text">.</span>
            </h2>
          </div>
          <p className="text-subtext text-lg max-w-[800px] leading-relaxed font-medium">
            We build the analytical systems required for the next generation of business.
          </p>
        </div>

        {/* Top 3 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Dynamic Icon Placement */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 text-special-section-bg group-hover:bg-special-section-bg group-hover:text-maintext transition-colors duration-500">
                {service.id === 'consulting' ? <Globe size={32} /> : 
                 service.id === 'training' ? <Users size={32} /> : 
                 <BarChart3 size={32} />}
              </div>

              {/* Decorative Numbering */}
              <span className="text-maintext font-black text-6xl opacity-5 absolute top-10 right-10 group-hover:opacity-10 transition-opacity">
                0{index + 1}
              </span>

              <h3 className="text-3xl font-bold text-maintext mb-6 tracking-tight">
                {service.title}
              </h3>

              <p className="text-subtext mb-10 leading-relaxed text-sm">
                {service.shortDescription}
              </p>

              <div className="flex items-center gap-2 w-fit bg-[#F8F9FB] border border-[#DDE2E9] text-[#2D3142] px-5 py-2 rounded-full text-sm font-medium transition hover:text-white hover:bg-button-hover-bg">
                Read More <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All button for clients who want to dig deeper */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/services')}
            className="hover:bg-button-hover-bg  text-button-text hover:text-button-hover-text border cursor-pointer border-button-border px-6 py-3 rounded-full font-medium transition"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;