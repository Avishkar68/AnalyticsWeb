import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 md:py-0 md:pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-maintext mb-4 leading-tight">
            Data Analytics & Strategic Consulting Firm
          </h1>
          <p className="text-subtext text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We help businesses make confident decisions through strategy,
            data, and clarity.
          </p>
        </div>

        {/* Top Grid: Image and Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch mb-12">
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1661431396990-7bc93ef3edec?q=80&w=1170&auto=format&fit=crop"
              alt="Team strategy meeting"
              className="w-full h-[250px] md:h-full object-cover rounded-3xl shadow-sm"
            />
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-maintext mb-3">Our Mission</h3>
              <p className="text-base md:text-lg text-subtext leading-relaxed">
                To empower organizations of all sizes with precision analytics, strategic clarity, and practical insights helping them drive growth, optimize operations, and innovate with confidence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-maintext mb-3">Our Vision</h3>
              <p className="text-base md:text-lg text-subtext leading-relaxed">
                To become a trusted partner for organizations seeking meaningful and measurable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Paragraph Section */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-maintext mb-6">
            Who we are
          </h2>
          <div className="space-y-6">
            <p className="text-maintext text-base md:text-lg leading-relaxed">
              SevenIsles Consultancy is a forward-thinking business analytics and strategic consulting firm dedicated to helping organizations turn data into actionable insight and lasting competitive advantage. In an era where data is abundant but clarity is scarce, we partner with businesses to unlock the true potential of information, enabling smarter decisions, optimized performance, and measurable growth. Our solutions combine analytical rigor with real-world business context, so you no longer just have data, you have direction.
            </p>
            <p className="text-maintext text-base md:text-lg leading-relaxed">
              At SevenIsles, we specialize in designing and delivering tailored analytics strategies, advanced data modeling, and transformational consulting services that drive real business outcomes.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 md:mt-20 py-10 bg-white md:bg-transparent rounded-[2rem] md:rounded-none shadow-sm md:shadow-none border border-slate-100 md:border-none grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-maintext">5+</h3>
            <p className="text-xs md:text-sm font-bold text-point-text uppercase tracking-widest">Industries Served</p>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-100 py-6 md:py-0">
            <h3 className="text-4xl font-bold text-maintext">50+</h3>
            <p className="text-xs md:text-sm font-bold text-point-text uppercase tracking-widest">Projects Delivered</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl font-bold text-maintext">100%</h3>
            <p className="text-xs md:text-sm font-bold text-point-text uppercase tracking-widest">Client Commitment</p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default WhoWeAre;