import React from "react";
import Member1 from "../../images/about.png";
import MiniLogo from "../../images/bgLogo.png";


const teamMembers = [
  {
    id: 1,
    name: "John Shah",
    role: "Total Network Development",
    img: Member1,
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Energy Solutions Expert",
    img: Member1,
  },
  {
    id: 3,
    name: "David Lee",
    role: "Solar Engineer",
    img: Member1,
  },
];

const TeamMember = () => {
  return (
    <section className="text-white py-16 px-6 lg:px-20 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mb-12 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={MiniLogo} alt="mini logo" className="w-6 h-6" />
            <p className="uppercase text-sm tracking-wide text-primary-100 font-semibold">
              Celvonix Team Members
            </p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            The Experts Driving <br /> Energy Innovation
          </h2>
        </div>

        <p className="text-text_color-100 max-w-xl leading-relaxed">
          At voltz, our success is powered by skilled engineers and energy
          experts. They are dedicated to changing how the world uses electricity.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative rounded-2xl p-6 flex flex-col items-center text-center
                       bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg
                       transition duration-500 hover:scale-105 hover:shadow-[0_0_25px_#64FF0A]"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-100/20 via-[#00ffcc]/10 to-transparent 
                            rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

            {/* Profile Image */}
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-primary-100/30 
                            shadow-lg shadow-primary-100/20 transition-transform duration-500 group-hover:scale-110">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + Role */}
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-text_color-100">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Floating glowing circles (for futuristic vibe) */}
      {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffcc]/15 rounded-full blur-3xl animate-pulse"></div> */}
    </section>
  );
};

export default TeamMember;
