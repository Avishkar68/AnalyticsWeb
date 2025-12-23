import React from 'react';
import { Mail } from 'lucide-react';

const Careers = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* TEXT CONTENT - Matches Screenshot */}
        <div className="space-y-6">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-maintext mb-2">Careers</h2>
            <div className="h-1 w-12 bg-point-text rounded-full"></div>
          </div>

          <div className="space-y-4 text-subtext leading-relaxed text-lg">
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

          {/* <div className="pt-4">
            <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Interested candidates may write to</p>
            <a
              href="mailto:contactus@sankhyaanalytics.com"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-button-hover-bg transition-all shadow-lg hover:shadow-button-hover-bg group"
            >
              <Mail size={20} />
              <span className="font-semibold">contactus@seveniles.com</span>
            </a>
          </div> */}
        </div>

        {/* IMAGE SIDE - Matches Screenshot */}
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-emerald-100 rounded-[2.5rem]"></div>
        </div>

      </div>
    </section>
  );
};

export default Careers;