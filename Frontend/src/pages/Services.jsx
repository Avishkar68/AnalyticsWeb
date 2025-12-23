import React, { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { services } from "../data/servicesData";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Globe,
  BarChart3,
  Users,
  ArrowUpRight,
} from "lucide-react";

const Services = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const subId = searchParams.get("sub");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, subId]);

  const mainService = services.find((s) => s.id === id);
  const subService = mainService?.subServices?.find((s) => s.id === subId);

  /* -------------------------------------------------------------------------- */
  /*                         1. SUB SERVICE DETAIL VIEW                          */
  /* -------------------------------------------------------------------------- */
  if (mainService && subService) {
    return (
      <section className="min-h-screen bg-white pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col items-center justify-center text-center">
            <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              Industrial Vertical
            </span>

            <h1 className="text-5xl font-bold text-maintext tracking-tight leading-[0.8] mb-6">
              {subService.title}
              <span className="text-point-text">.</span>
            </h1>

            <p className="text-subtext text-lg max-w-[800px] leading-relaxed font-medium">
              {subService.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
            {/* Capabilities */}
            <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-maintext mb-10 flex items-center gap-3">
                Capabilities
                <div className="h-px w-12 bg-point-text"></div>
              </h3>

              <div className="space-y-6">
                {subService.points.map((point, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="mt-1 bg-white p-1.5 rounded-lg border border-slate-100 text-point-text">
                      <Check size={16} />
                    </div>
                    <span className="text-maintext font-medium text-lg leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits + Visual */}
            <div className="flex flex-col gap-8">
              <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem]">
                <h3 className="text-sm font-bold uppercase tracking-widest text-maintext mb-6">
                  Strategic Benefits
                </h3>

                <div className="flex flex-wrap gap-3">
                  {subService.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="px-5 py-3 bg-[#F8F9FB] text-point-text rounded-full text-xs font-bold uppercase tracking-wide border border-[#DDE2E9]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-64 bg-maintext rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                <Globe size={120} className="text-point-text opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                       2. SERVICE CATEGORY (GRID)                            */
  /* -------------------------------------------------------------------------- */
  if (mainService) {
    return (
      <section className="min-h-screen bg-white pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col items-center justify-center text-center">
            <span className="text-point-text font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Category Overview
            </span>

            <h2 className="text-5xl font-bold text-maintext tracking-tighter leading-[0.8] mb-10">
              {mainService.title}
              <span className="text-point-text">.</span>
            </h2>

            <p className="text-subtext text-lg max-w-[800px] leading-relaxed font-medium">
              {mainService.detailedDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {mainService.subServices.map((sub) => (
              <div
                key={sub.id}
                onClick={() =>
                  navigate(`/services/${mainService.id}?sub=${sub.id}`)
                }
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden h-full flex flex-col"
              >
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-special-section-bg group-hover:text-maintext transition-colors duration-500">
                    <BarChart3 size={24} />
                  </div>

                  <ArrowUpRight
                    className="text-slate-200 group-hover:text-point-text transition-colors"
                    size={24}
                  />
                </div>

                <h3 className="text-2xl font-bold text-maintext mb-4">
                  {sub.title}
                </h3>

                <p className="text-subtext text-sm leading-relaxed line-clamp-3">
                  {sub.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-50 text-point-text font-bold text-[10px] uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2 text-maintext font-bold text-[10px] uppercase tracking-widest group-hover:text-point-text transition-colors w-fit px-5 py-3 border rounded-full  border-[#DDE2E9] bg-[#F8F9FB]">
                View Analysis
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                            3. ROOT SERVICES PAGE                            */
  /* -------------------------------------------------------------------------- */
  return (
    <section className="bg-white pt-16 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
            SevenIslands Expertise
          </span>

          <h2 className="text-5xl font-bold text-maintext tracking-tighter leading-[0.8] mb-6">
            What We Offer<span className="text-point-text">.</span>
          </h2>

          <p className="text-subtext text-lg max-w-[800px] leading-relaxed font-medium">
            We build the analytical systems required for the next generation of
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 text-maintext group-hover:bg-special-section-bg group-hover:text-maintext transition-colors duration-500">
                {service.id === "consulting" ? (
                  <Globe size={32} />
                ) : service.id === "training" ? (
                  <Users size={32} />
                ) : (
                  <BarChart3 size={32} />
                )}
              </div>

              <span className="text-maintext font-black text-6xl opacity-5 absolute top-10 right-10">
                0{index + 1}
              </span>

              <h3 className="text-3xl font-bold text-maintext mb-6 tracking-tight">
                {service.title}
              </h3>

              <p className="text-subtext mb-10 leading-relaxed text-sm">
                {service.shortDescription}
              </p>

              <div className="flex items-center gap-2 text-maintext font-bold text-[10px] uppercase tracking-widest group-hover:text-point-text transition-colors w-fit px-5 py-3 border rounded-full  border-[#DDE2E9] bg-[#F8F9FB]">
                Explore Category <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
