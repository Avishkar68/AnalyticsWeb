// import React, { useEffect } from "react";
// import { useParams, useNavigate, useSearchParams } from "react-router-dom";
// import { services } from "../data/servicesData";
// import {
//   Check,
//   ChevronRight,
//   Globe,
//   BarChart3,
//   Users,
//   ArrowUpRight,
// } from "lucide-react";

// const Services = () => {
  
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const subId = searchParams.get("sub");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id, subId]);

//   const mainService = services.find((s) => s.id === id);
//   const subService = mainService?.subServices?.find((s) => s.id === subId);

//   /* -------------------------------------------------------------------------- */
//   /* 1. SUB SERVICE DETAIL VIEW                          */
//   /* -------------------------------------------------------------------------- */
//   if (mainService && subService) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-10 flex flex-col items-center justify-center text-center">
//             <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
//               Industrial Vertical
//             </span>

//             <h1 className="text-3xl md:text-5xl font-bold text-maintext tracking-tight leading-tight md:leading-[0.8] mb-6">
//               {subService.title}
//               <span className="text-point-text">.</span>
//             </h1>

//             <p className="text-subtext text-base md:text-lg max-w-[800px] leading-relaxed font-medium">
//               {subService.description}
//             </p>
//             {subService.additionalDesc && (
//   <div className="mt-6 max-w-[820px]">
//     <span className="block text-[10px] uppercase tracking-widest text-point-text font-bold mb-3">
//       Our Approach
//     </span>
//     <p className="text-maintext text-sm md:text-base leading-relaxed font-medium bg-[#F8F9FB] px-6 py-5 rounded-xl border border-slate-200">
//       {subService.additionalDesc}
//     </p>
//   </div>
// )}
//           </div>


//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mt-12 md:mt-16">
//             {/* Capabilities */}
//             <div className="bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 border border-slate-100">
//               <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-maintext mb-8 md:mb-10 flex items-center gap-3">
//                 Services we offer 
//                 <div className="h-px w-12 bg-point-text"></div>
//               </h3>

//               <div className="space-y-6">
//                 {subService.points.map((point, idx) => (
//                   <div key={idx} className="flex gap-4 md:gap-5">
//                     <div className="mt-1 bg-white p-1.5 rounded-lg border border-slate-100 text-point-text shrink-0">
//                       <Check size={16} />
//                     </div>
//                     <span className="text-maintext font-medium text-base md:text-lg leading-snug">
//                       {point}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Benefits + Visual */}
//             <div className="flex flex-col gap-8">
//               <div className="p-8 md:p-10 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem]">
//                 {/* <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-maintext mb-6">
//                   Strategic Benefits
//                 </h3>

//                 <div className="flex flex-wrap gap-2 md:gap-3">
//                   {subService.benefits.map((b, i) => (
//                     <span
//                       key={i}
//                       className="px-4 py-2 md:px-5 md:py-3 bg-[#F8F9FB] text-point-text rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide border border-[#DDE2E9]"
//                     >
//                       {b}
//                     </span>
//                   ))}
//                 </div> */}
//               </div>

//               <div className="h-48 md:h-64 bg-maintext rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center overflow-hidden">
//                 <Globe size={100} className="text-point-text opacity-20" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 2. SERVICE CATEGORY (GRID)                            */
//   /* -------------------------------------------------------------------------- */
//   if (mainService) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-10 flex flex-col items-center justify-center text-center">
//             <span className="text-point-text font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
//               Category Overview
//             </span>

//             <h2 className="text-3xl md:text-5xl font-bold text-maintext tracking-tighter leading-tight md:leading-[0.8] mb-8 md:mb-10">
//               {mainService.title}
//               <span className="text-point-text">.</span>
//             </h2>

//             <p className="text-subtext text-base md:text-lg max-w-[800px] leading-relaxed font-medium">
//               {mainService.detailedDescription}
//             </p>
//             {mainService.bulletPointers && (
//   <div className="mt-10 md:mt-12 max-w-3xl mx-auto">
//     <ul className="space-y-4">
//       {mainService.bulletPointers.map((point, idx) => (
//         <li key={idx} className="flex items-start gap-4">
//           <div className="mt-1 bg-[#F8F9FB] p-1.5 rounded-lg border border-slate-200 text-point-text">
//             <Check size={16} />
//           </div>
//           <span className="text-maintext font-medium text-base md:text-lg">
//             {point}
//           </span>
//         </li>
//       ))}
//     </ul>
//   </div>
// )}

//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
//             {mainService.subServices.map((sub) => (
//               <div
//                 key={sub.id}
//                 onClick={() =>
//                   navigate(`/services/${mainService.id}?sub=${sub.id}`)
//                 }
//                 className="group relative bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden h-full flex flex-col"
//               >
//                 <div className="mb-6 md:mb-8 flex justify-between items-start">
//                   <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-special-section-bg group-hover:text-maintext transition-colors duration-500">
//                     <BarChart3 size={24} />
//                   </div>

//                   <ArrowUpRight
//                     className="text-slate-200 group-hover:text-point-text transition-colors"
//                     size={24}
//                   />
//                 </div>

//                 <h3 className="text-xl md:text-2xl font-bold text-maintext mb-4">
//                   {sub.title}
//                 </h3>

//                 <p className="text-subtext text-sm leading-relaxed line-clamp-3 mb-6">
//                   {sub.description}
//                 </p>

//                 <div className="mt-auto pt-6 border-t border-slate-50">
//                   <div className="flex items-center gap-2 text-maintext font-bold text-[9px] md:text-[10px] uppercase tracking-widest group-hover:text-point-text transition-colors w-fit px-5 py-3 border rounded-full border-[#DDE2E9] bg-[#F8F9FB]">
//                     View Analysis
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 3. ROOT SERVICES PAGE                            */
//   /* -------------------------------------------------------------------------- */
//   return (
//     <section className="bg-[#F9FAFB] pt-12 md:pt-16 pb-20 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-10 flex flex-col items-center justify-center text-center">
//           <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
//             SevenIslands Expertise
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold text-maintext tracking-tighter leading-tight md:leading-[0.8] mb-6">
//             What We Offer<span className="text-point-text">.</span>
//           </h2>

//           <p className="text-subtext text-base md:text-lg max-w-[800px] leading-relaxed font-medium">
//             We build the analytical systems required for the next generation of
//             business.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onClick={() => navigate(`/services/${service.id}`)}
//               className="group bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full flex flex-col"
//             >
//               <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-maintext group-hover:bg-special-section-bg group-hover:text-maintext transition-colors duration-500">
//                 {service.id === "consulting" ? (
//                   <Globe size={28} />
//                 ) : service.id === "training" ? (
//                   <Users size={28} />
//                 ) : (
//                   <BarChart3 size={28} />
//                 )}
//               </div>

//               <span className="text-maintext font-black text-5xl md:text-6xl opacity-5 absolute top-8 right-8 md:top-10 md:right-10">
//                 0{index + 1}
//               </span>

//               <h3 className="text-2xl md:text-3xl font-bold text-maintext mb-4 md:mb-6 tracking-tight">
//                 {service.title}
//               </h3>

//               <p className="text-subtext mb-8 md:mb-10 leading-relaxed text-sm">
//                 {service.shortDescription}
//               </p>

//               <div className="mt-auto flex items-center gap-2 text-maintext font-bold text-[9px] md:text-[10px] uppercase tracking-widest group-hover:text-point-text transition-colors w-fit px-5 py-3 border rounded-full border-[#DDE2E9] bg-[#F8F9FB]">
//                 Explore Category <ChevronRight size={16} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React, { useEffect } from "react";
// import { useParams, useNavigate, useSearchParams } from "react-router-dom";
// import { services } from "../data/servicesData";
// import {
//   Check,
//   ChevronRight,
//   Globe,
//   BarChart3,
//   Users,
//   ArrowUpRight,
// } from "lucide-react";

// const Services = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const industryId = searchParams.get("industry");
//   const offerId = searchParams.get("offer");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id, industryId, offerId]);

//   const mainService = services.find((s) => s.id === id);

//   const industry =
//     mainService?.industries?.find((i) => i.id === industryId);

//   const offering =
//     industry?.offerings?.find((o) => o.id === offerId);

//   /* -------------------------------------------------------------------------- */
//   /* 1. OFFERING DETAIL VIEW (Deep level)                                        */
//   /* -------------------------------------------------------------------------- */
//   if (mainService && industry && offering) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
//             {industry.title}
//           </span>

//           <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
//             {offering.title}
//             <span className="text-point-text">.</span>
//           </h1>

//           <p className="text-subtext text-base md:text-lg max-w-[820px] mx-auto leading-relaxed font-medium">
//             {offering.description}
//           </p>

//           {offering.additionalDesc && (
//             <div className="mt-6 max-w-[820px] mx-auto">
//               <span className="block text-[10px] uppercase tracking-widest text-point-text font-bold mb-3">
//                 Our Approach
//               </span>
//               <p className="text-maintext text-sm md:text-base leading-relaxed font-medium bg-[#F8F9FB] px-6 py-5 rounded-xl border border-slate-200">
//                 {offering.additionalDesc}
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//           <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-14 border border-slate-100">
//             <h3 className="text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
//               Services We Offer
//               <div className="h-px w-12 bg-point-text"></div>
//             </h3>

//             <div className="space-y-6">
//               {offering.points.map((point, idx) => (
//                 <div key={idx} className="flex gap-4">
//                   <div className="mt-1 bg-white p-1.5 rounded-lg border border-slate-100 text-point-text">
//                     <Check size={16} />
//                   </div>
//                   <span className="text-maintext font-medium text-base md:text-lg">
//                     {point}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="h-48 md:h-64 bg-maintext rounded-[2.5rem] flex items-center justify-center">
//             <Globe size={100} className="text-point-text opacity-20" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 2. INDUSTRY VIEW                                                           */
//   /* -------------------------------------------------------------------------- */
//   if (mainService && industry) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-14">
//           <span className="text-point-text uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
//             Industry
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
//             {industry.title}
//             <span className="text-point-text">.</span>
//           </h2>

//           <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg">
//             {industry.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {industry.offerings.map((offer) => (
//             <div
//               key={offer.id}
//               onClick={() =>
//                 navigate(
//                   `/services/${mainService.id}?industry=${industry.id}&offer=${offer.id}`
//                 )
//               }
//               className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-all"
//             >
//               <h3 className="text-xl md:text-2xl font-bold mb-4">
//                 {offer.title}
//               </h3>

//               <p className="text-subtext text-sm leading-relaxed mb-6">
//                 {offer.description}
//               </p>

//               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 border rounded-full w-fit bg-[#F8F9FB]">
//                 View Offering <ArrowUpRight size={14} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 3. SERVICE CATEGORY (Consulting / Products)                                 */
//   /* -------------------------------------------------------------------------- */
//   if (mainService) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-14">
//           <span className="text-point-text uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
//             Category Overview
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             {mainService.title}
//             <span className="text-point-text">.</span>
//           </h2>

//           <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg">
//             {mainService.detailedDescription}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {(mainService.industries || mainService.subServices)?.map((item) => (
//             <div
//               key={item.id}
//               onClick={() =>
//                 mainService.industries
//                   ? navigate(
//                       `/services/${mainService.id}?industry=${item.id}`
//                     )
//                   : navigate(`/services/${mainService.id}?sub=${item.id}`)
//               }
//               className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-all"
//             >
//               <div className="mb-6 flex justify-between">
//                 <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
//                   <BarChart3 size={24} />
//                 </div>
//                 <ArrowUpRight size={20} className="text-slate-300" />
//               </div>

//               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
//               <p className="text-subtext text-sm line-clamp-3">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 4. ROOT SERVICES PAGE                                                       */
//   /* -------------------------------------------------------------------------- */
//   return (
//     <section className="bg-[#F9FAFB] pt-12 md:pt-16 pb-20 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto text-center mb-14">
//         <span className="text-point-text uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
//           SevenIslands Expertise
//         </span>

//         <h2 className="text-3xl md:text-5xl font-bold mb-6">
//           What We Offer<span className="text-point-text">.</span>
//         </h2>

//         <p className="text-subtext max-w-[820px] mx-auto">
//           We build analytical systems required for the next generation of
//           business.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             onClick={() => navigate(`/services/${service.id}`)}
//             className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 cursor-pointer hover:shadow-2xl transition-all"
//           >
//             <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
//               {service.id === "consulting" ? (
//                 <Globe />
//               ) : service.id === "training" ? (
//                 <Users />
//               ) : (
//                 <BarChart3 />
//               )}
//             </div>

//             <span className="text-6xl font-black opacity-5 absolute top-10 right-10">
//               0{index + 1}
//             </span>

//             <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//             <p className="text-subtext text-sm mb-8">
//               {service.shortDescription}
//             </p>

//             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 border rounded-full w-fit bg-[#F8F9FB]">
//               Explore Category <ChevronRight size={16} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React, { useEffect } from "react";
// import { useParams, useNavigate, useSearchParams } from "react-router-dom";
// import { services } from "../data/servicesData";
// import {
//   Check,
//   ChevronRight,
//   Globe,
//   BarChart3,
//   Users,
//   ArrowUpRight,
// } from "lucide-react";

// const Services = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const industryId = searchParams.get("industry");
//   const offerId = searchParams.get("offer");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id, industryId, offerId]);

//   const mainService = services.find((s) => s.id === id);
//   const industry = mainService?.industries?.find((i) => i.id === industryId);
//   const offering = industry?.offerings?.find((o) => o.id === offerId);

//   /* -------------------------------------------------------------------------- */
//   /* 1. TRAINING PAGE (CUSTOM LAYOUT)                                            */
//   /* -------------------------------------------------------------------------- */
//   if (mainService?.id === "training") {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-14">
//           <span className="text-point-text uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
//             Training & Upskilling
//           </span>

//           <h1 className="text-3xl md:text-5xl font-bold mb-6 text-maintext">
//             {mainService.title}
//             <span className="text-point-text">.</span>
//           </h1>

//           <p className="text-subtext max-w-[900px] mx-auto text-base md:text-lg leading-relaxed">
//             {mainService.detailedDescription}
//           </p>
//         </div>

//         {/* TRAINING MODULES */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {mainService.modules.map((module, idx) => (
//             <div key={idx}>
//               <h3 className="text-lg font-bold text-maintext mb-3">
//                 {module.title}
//               </h3>
//               <div className="h-[2px] w-8 bg-point-text mb-4"></div>

//               <ul className="space-y-2 text-subtext text-sm">
//                 {module.topics.map((topic, i) => (
//                   <li key={i} className="flex gap-2">
//                     <span className="text-point-text">•</span>
//                     <span>{topic}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 2. OFFERING DETAIL VIEW                                                     */
//   /* -------------------------------------------------------------------------- */
//   if (mainService && industry && offering) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
//             {industry.title}
//           </span>

//           <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
//             {offering.title}
//             <span className="text-point-text">.</span>
//           </h1>

//           <p className="text-subtext text-base md:text-lg max-w-[820px] mx-auto leading-relaxed font-medium">
//             {offering.description}
//           </p>

//           {offering.additionalDesc && (
//             <div className="mt-6 max-w-[820px] mx-auto">
//               <span className="block text-[10px] uppercase tracking-widest text-point-text font-bold mb-3">
//                 Our Approach
//               </span>
//               <p className="text-maintext text-sm md:text-base leading-relaxed font-medium bg-[#F8F9FB] px-6 py-5 rounded-xl border border-slate-200">
//                 {offering.additionalDesc}
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//           <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-14 border border-slate-100">
//             <h3 className="text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
//               Services We Offer
//               <div className="h-px w-12 bg-point-text"></div>
//             </h3>

//             <div className="space-y-6">
//               {(offering.points || offering.features)?.map((point, idx) => (
//                 <div key={idx} className="flex gap-4">
//                   <div className="mt-1 bg-white p-1.5 rounded-lg border border-slate-100 text-point-text">
//                     <Check size={16} />
//                   </div>
//                   <span className="text-maintext font-medium text-base md:text-lg">
//                     {point}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="h-48 md:h-64 bg-maintext rounded-[2.5rem] flex items-center justify-center">
//             <Globe size={100} className="text-point-text opacity-20" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 3. INDUSTRY VIEW                                                           */
//   /* -------------------------------------------------------------------------- */
//   if (mainService && industry) {
//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-14">
//           <span className="text-point-text uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
//             Industry
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
//             {industry.title}
//             <span className="text-point-text">.</span>
//           </h2>

//           <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg">
//             {industry.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {industry.offerings.map((offer) => (
//             <div
//               key={offer.id}
//               onClick={() =>
//                 navigate(
//                   `/services/${mainService.id}?industry=${industry.id}&offer=${offer.id}`
//                 )
//               }
//               className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-all"
//             >
//               <h3 className="text-xl md:text-2xl font-bold mb-4">
//                 {offer.title}
//               </h3>

//               <p className="text-subtext text-sm leading-relaxed mb-6">
//                 {offer.description}
//               </p>

//               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 border rounded-full w-fit bg-[#F8F9FB]">
//                 View Offering <ArrowUpRight size={14} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 4. SERVICE CATEGORY VIEW                                                    */
//   /* -------------------------------------------------------------------------- */
//   if (mainService) {
//     const items = mainService.industries || mainService.subServices || [];

//     return (
//       <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center mb-14">
//           <span className="text-point-text uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
//             Category Overview
//           </span>

//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             {mainService.title}
//             <span className="text-point-text">.</span>
//           </h2>

//           <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg">
//             {mainService.detailedDescription}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               onClick={() =>
//                 mainService.industries
//                   ? navigate(
//                       `/services/${mainService.id}?industry=${item.id}`
//                     )
//                   : navigate(`/services/${mainService.id}?sub=${item.id}`)
//               }
//               className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-all"
//             >
//               <div className="mb-6 flex justify-between">
//                 <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
//                   <BarChart3 size={24} />
//                 </div>
//                 <ArrowUpRight size={20} className="text-slate-300" />
//               </div>

//               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
//               <p className="text-subtext text-sm line-clamp-3">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* -------------------------------------------------------------------------- */
//   /* 5. ROOT SERVICES PAGE                                                       */
//   /* -------------------------------------------------------------------------- */
//   return (
//     <section className="bg-[#F9FAFB] pt-12 md:pt-16 pb-20 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto text-center mb-14">
//         <span className="text-point-text uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
//           SevenIslands Expertise
//         </span>

//         <h2 className="text-3xl md:text-5xl font-bold mb-6">
//           What We Offer<span className="text-point-text">.</span>
//         </h2>

//         <p className="text-subtext max-w-[820px] mx-auto">
//           We build analytical systems required for the next generation of
//           business.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             onClick={() => navigate(`/services/${service.id}`)}
//             className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 cursor-pointer hover:shadow-2xl transition-all"
//           >
//             <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
//               {service.id === "consulting" ? (
//                 <Globe />
//               ) : service.id === "training" ? (
//                 <Users />
//               ) : (
//                 <BarChart3 />
//               )}
//             </div>

//             <span className="text-6xl font-black opacity-5 absolute top-10 right-10">
//               0{index + 1}
//             </span>

//             <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//             <p className="text-subtext text-sm mb-8">
//               {service.shortDescription}
//             </p>

//             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 border rounded-full w-fit bg-[#F8F9FB]">
//               Explore Category <ChevronRight size={16} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { services } from "../data/servicesData";
import {
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
  const industryId = searchParams.get("industry");
  const offerId = searchParams.get("offer");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, industryId, offerId]);

  const mainService = services.find((s) => s.id === id);
  const industry = mainService?.industries?.find((i) => i.id === industryId);
  const offering = industry?.offerings?.find((o) => o.id === offerId);

  /* -------------------------------------------------------------------------- */
  /* 1. TRAINING PAGE (CUSTOM LAYOUT)                                            */
  /* -------------------------------------------------------------------------- */
  if (mainService?.id === "training") {
    return (
      <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
        

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-maintext">
            {mainService.title}
          </h1>

          <p className="text-subtext max-w-[900px] mx-auto text-base md:text-lg leading-relaxed">
            {mainService.detailedDescription}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mainService.modules.map((module, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-point-text mb-3">
                {module.title}
              </h3>

              <ul className="space-y-2 text-subtext text-lg">
                {module.topics.map((topic, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-point-text">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* PHARMACEUTICAL – DIRECT CONTENT (NO CLASSIFICATION)                         */
  /* -------------------------------------------------------------------------- */
  if (
    mainService?.id === "consulting" &&
    industry?.id === "pharmaceutical"
  ) {
    return (
      <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
        <div className="max-w-7xl text-center mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-6"> Pharmaceutical
          </h1>

          <p className="text-subtext text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
            {industry.description}
          </p>

          <h3 className="text-xl font-bold text-left uppercase tracking-widest mb-6">
            Services we offer
          </h3>

          <ul className="space-y-4 mb-8">
            {industry.services.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <Check size={16} className="text-point-text mt-1" />
                <span className="text-maintext font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-maintext text-base leading-relaxed">
            {industry.approach}
          </p>
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* 2. OFFERING DETAIL VIEW                                                     */
  /* -------------------------------------------------------------------------- */
  if (mainService && industry && offering) {
    return (
      <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-point-text font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
            {industry.title}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
            {offering.title}
            <span className="text-point-text">.</span>
          </h1>

          <p className="text-subtext text-base md:text-lg max-w-[820px] mx-auto leading-relaxed font-medium">
            {offering.description}
          </p>

          {offering.additionalDesc && (
            <div className="mt-6 max-w-[820px] mx-auto">
              <span className="block text-[10px] uppercase tracking-widest text-point-text font-bold mb-3">
                Our Approach
              </span>
              <p className="text-maintext text-sm md:text-base leading-relaxed font-medium bg-[#F8F9FB] px-6 py-5 rounded-xl border border-slate-200">
                {offering.additionalDesc}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-14 border border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              Services We Offer
              <div className="h-px w-12 bg-point-text"></div>
            </h3>

            <div className="space-y-6">
              {(offering.points || offering.features)?.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-white p-1.5 rounded-lg border border-slate-100 text-point-text">
                    <Check size={16} />
                  </div>
                  <span className="text-maintext font-medium text-base md:text-lg">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="h-48 md:h-64 bg-maintext rounded-[2.5rem] flex items-center justify-center">
            <Globe size={100} className="text-point-text opacity-20" />
          </div> */}
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* 3. INDUSTRY VIEW                                                           */
  /* -------------------------------------------------------------------------- */
  if (mainService && industry) {
    return (
      <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          

          <h2 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
            {industry.title}
          </h2>

          <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg">
            {industry.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industry.offerings.map((offer) => (
            <div
              key={offer.id}
              onClick={() =>
                navigate(
                  `/services/${mainService.id}?industry=${industry.id}&offer=${offer.id}`
                )
              }
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {offer.title}
              </h3>

              <p className="text-subtext text-sm leading-relaxed mb-6">
                {offer.description}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 border rounded-full w-fit bg-[#F8F9FB]">
                View Offering <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  /* -------------------------------------------------------------------------- */
/* PRODUCTS – DIRECT CONTENT VIEW                                              */
/* -------------------------------------------------------------------------- */
if (mainService?.id === "products") {
  const product = mainService.subServices?.[0]; // IslandInsight™

  return (
    <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-point-text uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Product
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-maintext mb-6">
            {product.title}
            <span className="text-point-text">.</span>
          </h1>

          <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Points */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
            What it does
          </h3>

          <ul className="space-y-4">
            {product.points.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <Check size={16} className="text-point-text mt-1" />
                <span className="text-maintext font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto bg-[#F8F9FB] border border-slate-200 rounded-[2.5rem] p-8 md:p-12">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
            Business Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <ArrowUpRight size={16} className="text-point-text mt-1" />
                <span className="text-maintext font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


  /* -------------------------------------------------------------------------- */
  /* 4. SERVICE CATEGORY VIEW                                                    */
  /* -------------------------------------------------------------------------- */
  if (mainService) {
    const items = mainService.industries || mainService.subServices || [];

    return (
      <section className="min-h-screen bg-white pt-12 md:pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          {/* <span className="text-point-text uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Category Overview
          </span> */}

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {mainService.title}
          </h2>

          <p className="text-subtext max-w-[820px] mx-auto text-base md:text-lg">
            {mainService.detailedDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                mainService.industries
                  ? navigate(
                      `/services/${mainService.id}?industry=${item.id}`
                    )
                  : navigate(`/services/${mainService.id}?sub=${item.id}`)
              }
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="mb-6 flex justify-between">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                  <BarChart3 size={24} />
                </div>
                <ArrowUpRight size={20} className="text-slate-300" />
              </div>

              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-subtext text-sm line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* 5. ROOT SERVICES PAGE                                                       */
  /* -------------------------------------------------------------------------- */
  return (
    <section className="bg-[#F9FAFB] pt-12 md:pt-16 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="text-point-text uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
          SevenIslands Expertise
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          What We Offer<span className="text-point-text">.</span>
        </h2>

        <p className="text-subtext max-w-[820px] mx-auto">
          We build analytical systems required for the next generation of
          business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 cursor-pointer hover:shadow-2xl transition-all"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
              {service.id === "consulting" ? (
                <Globe />
              ) : service.id === "training" ? (
                <Users />
              ) : (
                <BarChart3 />
              )}
            </div>

            <span className="text-6xl font-black opacity-5 absolute top-10 right-10">
              0{index + 1}
            </span>

            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-subtext text-sm mb-8">
              {service.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 border rounded-full w-fit bg-[#F8F9FB]">
              Explore Category <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
