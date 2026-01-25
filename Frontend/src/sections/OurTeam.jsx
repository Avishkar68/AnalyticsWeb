import React from "react";
import { Linkedin } from "lucide-react";
import profile from "../assets/about-neha-data-analytics.jpeg";
import { FaXTwitter } from "react-icons/fa6";
import partnerimg from "../assets/partnerimg.png"
const OurTeam = () => {
  const member = {
    name: "Neha Patwa",
    role: "Founder",
    img: profile,
    description: [
      "Neha Patwa is a highly accomplished analytics and biostatistics professional with 17+ years of experience spanning across pharmaceutical, CRO, banking, and financial services industries. With deep expertise in statistical analysis, advanced SAS programming, and data-driven decision-making, she has successfully led complex global projects across both clinical research and banking risk analytics.",
      "In the life sciences domain, Neha has delivered end-to-end statistical and programming solutions for Phase I–III clinical trials. Complementing this, she brings strong banking experience with institutions like PNC and Citi Bank, where her analytical work supported multi-million-dollar reserve releases and profit optimization.",
      "Neha founded SevenIsles Consultancy with the vision of combining scientific rigor and financial intelligence to deliver high-quality, reliable analytics solutions driven by accuracy and actionable insights.",
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/nehapatwa/",
      twitter: "https://x.com/nehapatwa2184",
    },
  };

  const partner = {
    name: "Vinayak Deshpande",
    role: "Managing Director",
    company: "Sankhya Analytical Research Pvt. Ltd.",
    img: partnerimg,
    description: [
      "Sankhya Analytical Research Pvt. Ltd. is a Mumbai-based data analytics and research consulting firm specializing in advanced analytics, statistical modeling, and data-driven decision support. Founded by Mr. Vinayak Deshpande, Sankhya Analytics helps organizations develop and deploy innovative solutions that enable faster, smarter decision-making.",
      "Their analytics solutions have supported clients in increasing customer acquisition, mitigating risk, managing attrition, improving customer retention, and maximizing ROI. Sankhya combines deep domain expertise across Pharmaceuticals, Banking and Finance, Insurance, Human Resources, Retail, Market Research, and Capital Markets with strong capabilities in analytics, large-scale data management, and research.",
      "Their team includes domain experts, skilled analysts, data management specialists, and experienced trainers. As our analytics partner, Sankhya supports SevenIsles Consultancy in delivering practical, insight-driven solutions with measurable business impact.",
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/vinayak-deshpande-b5999931/",
    },
  };

  return (
    <div className="bg-white">
      {/* OUR TEAM SECTION */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 text-left md:ml-[50px]">
            <h2 className="text-3xl md:text-5xl font-bold text-maintext">
              Our Team
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-1">
            <div className="w-full md:w-4/12 flex flex-col items-center text-center">
              <div className="w-64 md:w-72 aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full hover:scale-105 transition duration-700"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl md:text-3xl font-bold text-maintext">
                  {member.name}
                </h3>
                <p className="text-xl text-point-text font-medium mt-1">
                  {member.role}
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full text-maintext hover:bg-point-text hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full text-maintext hover:bg-point-text hover:text-white transition-colors">
                  <FaXTwitter size={22} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-7/12 px-2 md:px-0">
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg text-justify md:text-left">
                {member.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PARTNER SECTION */}
      <section className="py-0 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Responsive Header: Centered on mobile, aligned left on desktop */}
          <div className="mb-8 md:mb-12 text-left md:ml-[50px]">
            <h2 className="text-3xl md:text-5xl font-bold text-maintext">
              Our Partner
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-1">
            {/* Left Column: Image and Identity */}
            <div className="w-full md:w-4/12 flex flex-col items-center text-center">
              <div className="w-64 md:w-72 aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="object-cover w-full h-full hover:scale-105 transition duration-700"
                />
              </div>
              <div className="mt-6 px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-maintext leading-tight">
                  {partner.name}
                </h3>
                <p className="text-lg md:text-xl text-point-text font-medium mt-2">
                  {partner.role}
                </p>
              </div>
              {/* Optional Socials for Partner (currently using member data) */}
              {/* <div className="flex gap-4 mt-4">
                <a href={partner.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full text-maintext hover:bg-point-text hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
              </div> */}
            </div>

            {/* Right Column: Description */}
            <div className="w-full md:w-7/12 px-2 md:px-0">
              <p className="text-3xl text-point-text font-medium mb-2">

                {partner.company}
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg text-justify md:text-left">
                {partner.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/company/sankhyaanalytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline  transition-all text-xl text-point-text font-medium "
              >
                <div className="p-3 bg-gray-100 w-fit rounded-full text-maintext hover:bg-point-text hover:text-white transition-colors">
                  <Linkedin size={22} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;