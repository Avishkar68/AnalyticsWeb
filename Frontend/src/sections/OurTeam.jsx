import React from "react";

const OurTeam = () => {
  const team = [
    {
      name: "Neha Patwa",
      role: "Founder",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    },
  ];

  const isSingle = team.length === 1;

  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-point-text uppercase mb-2">
            Our People
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-maintext">
            Meet the Expert
          </h2>
        </div>

        <div
          className={`grid gap-8 ${
            isSingle
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`group ${
                isSingle ? "max-w-sm md:max-w-md" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-square">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-maintext text-center">
                {member.name}
              </h3>
              <p className="text-point-text font-medium text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
