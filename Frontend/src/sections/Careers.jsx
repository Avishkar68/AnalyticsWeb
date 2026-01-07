import React from 'react';

const Careers = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold text-maintext mb-2">Careers</h2>
          </div>

          <div className="space-y-4 text-subtext leading-relaxed text-base md:text-lg">
            <p>
              We are looking for postgraduates from the field of <strong>Statistics or Economics</strong>,
              with a strong academic performance.
            </p>
            <p>
              Candidates possessing sound knowledge of <strong>multivariate analysis</strong> and
              <strong> generalized linear modeling</strong> will be preferred.
            </p>
            <p>
              We offer exciting projects to talented statisticians and provide ample opportunities
              for professional growth.
            </p>
          </div>
        </div>

        <div className="relative px-4 md:px-0">
          <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team Collaboration"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-emerald-100 rounded-[2.5rem]"></div>
        </div>

      </div>
    </section>
  );
};

export default Careers;