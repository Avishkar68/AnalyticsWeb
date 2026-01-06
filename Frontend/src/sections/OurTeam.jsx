import React from "react";
import { Linkedin, Twitter, ExternalLink } from "lucide-react"; // Optional: install lucide-react or use SVGs
import profile from "../assets/about-neha-data-analytics.jpeg";

const OurTeam = () => {
  const member = {
    name: "Neha Patwa",
    role: "Founder",
    img: profile,
    description: [
      "Neha Patwa is a highly accomplished analytics and biostatistics professional with 17+ years of experience spanning the pharmaceutical, CRO, banking, and financial services industries. With deep expertise in statistical analysis, advanced SAS programming, and data-driven decision-making, she has successfully led complex global projects across both clinical research and banking risk analytics.",
      "In the life sciences domain, Neha has delivered end-to-end statistical and programming solutions for Phase I–III clinical trials. Complementing this, she brings strong banking experience with institutions like PNC and Citi Bank, where her analytical work supported multi-million-dollar reserve releases and profit optimization.",
      "Neha founded SevenIsles Consultancy with the vision of combining scientific rigor and financial intelligence to deliver high-quality, reliable analytics solutions driven by accuracy and actionable insights."
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/nehapatwa/",
      twitter: "https://x.com/nehapatwa2184",
    },
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - Optional, can be removed if you want just the split view */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-point-text uppercase mb-2">
            Our People
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-maintext">
            Meet the Expert
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl">
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-maintext mb-2">
                  {member.name}
                </h3>
                <p className="text-xl text-point-text font-medium">
                  {member.role}
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              {member.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-maintext hover:bg-point-text hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-maintext hover:bg-point-text hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;