// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { services } from "../data/servicesData";
// import { Globe, BarChart3, Users, ChevronRight } from "lucide-react";

// const OurServices = () => {
//   const navigate = useNavigate();
//   const featuredServices = services.slice(0, 3);

//   return (
//     <section className="bg-[#F9FAFB] pt-16 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-10 flex flex-col items-center justify-center text-center">
//           <div className="max-w-2xl">
          
//             <h2 className="text-3xl md:text-5xl font-bold text-maintext tracking-tighter leading-tight mb-6">
//               Our Core Services<span className="text-point-text">.</span>
//             </h2>
//           </div>
//           <p className="text-subtext text-base md:text-lg max-w-[800px] leading-relaxed font-medium">
//             We build the analytical systems required for the next generation of business.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
//           {featuredServices.map((service, index) => (
//             <div
//               key={service.id}
//               onClick={() => navigate(`/services/${service.id}`)}
//               className="group bg-white border border-slate-100 rounded-4xl md:rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden"
//             >
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-maintext  group-hover:bg-special-section-bg group-hover:text-maintext transition-colors duration-500">
//                 {service.id === 'consulting' ? <Globe size={28} /> : 
//                  service.id === 'training' ? <Users size={28} /> : 
//                  <BarChart3 size={28} />}
//               </div>

//               <span className="text-maintext font-black text-5xl md:text-6xl opacity-5 absolute top-8 right-8 group-hover:opacity-10 transition-opacity">
//                 0{index + 1}
//               </span>

//               <h3 className="text-2xl md:text-3xl font-bold text-maintext mb-4 md:mb-6 tracking-tight">
//                 {service.title}
//               </h3>

//               <p className="text-subtext mb-8 md:mb-10 leading-relaxed text-sm">
//                 {service.shortDescription}
//               </p>

//               <div className="flex items-center gap-2 w-fit bg-[#F8F9FB] border border-[#DDE2E9] text-[#2D3142] px-5 py-2 rounded-full text-sm font-medium transition hover:text-white hover:bg-button-hover-bg">
//                 Read More <ChevronRight size={16} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import { ChevronRight } from "lucide-react";

const fallbackImages = [
  "https://images.unsplash.com/photo-1758518727613-00192aed759b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const OurServices = () => {
  const navigate = useNavigate();
  const featuredServices = services.slice(0, 3);

  return (
    <section className="bg-[#F9FAFB] pt-20  pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-maintext tracking-tighter mb-6">
            Our Core Services
          </h2>
          <p className="text-subtext text-base md:text-lg max-w-[800px] mx-auto leading-relaxed font-medium">
            We build the analytical systems required for the next generation of business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              {/* IMAGE (TOP HALF) */}
              <div className="h-56 md:h-60 overflow-hidden">
                <img
                  src={service.image || fallbackImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT (BOTTOM HALF) */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-maintext mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-subtext leading-relaxed text-sm md:text-base">
                    {service.shortDescription}
                  </p>
                </div>

                {/* FIXED BUTTON */}
                <div className="mt-auto pt-8">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-maintext border border-[#DDE2E9] px-5 py-2 rounded-full bg-[#F8F9FB] transition-all hover:bg-button-hover-bg hover:text-white">
                    Read More <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;

