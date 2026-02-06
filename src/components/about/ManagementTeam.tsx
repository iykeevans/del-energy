"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Habeeb Alebiosu",
    role: "Chief Executive Officer",
    image: "/images/staff-habeeb-alebiosu.jpg",
    linkedin: "https://www.linkedin.com/in/habeeb-alebiosu-262486a/",
  },
  {
    name: "Raymond Eromosele",
    role: "GM, Business Operations",
    image: "/images/staff-raymond-eromosele.jpg",
    linkedin: "https://www.linkedin.com/in/ray-eromosele-638485274/",
  },
  {
    name: "Seun Lofinmakin",
    role: "GM, Services",
    image: "/images/staff-seun-lofinmakin.jpg",
    linkedin: "https://www.linkedin.com/in/seun-lofinmakin-10018522/",
  },
  {
    name: "Mide Popoola",
    role: "GM, Commercial Operations",
    image: "/images/staff-mide-popoola.jpg",
    linkedin: "https://www.linkedin.com/in/mide-popoola-84482697/",
  },
  {
    name: "Tope Opelusi",
    role: "GM, Projects",
    image: "/images/staff-tope-opelusi.jpg",
    linkedin: "https://www.linkedin.com/in/tope-opelusi-aa79a05a/",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      className="flex flex-col w-full group cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image with rounded corners */}
      <div className="relative w-full aspect-[0.88] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[#f3f3f3]" />
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        {/* LinkedIn icon overlay on hover */}
        <div className="absolute inset-0 bg-del-primary-darken-1/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 sm:mt-5">
        <h3 className="text-lg sm:text-xl font-medium text-white leading-6 group-hover:text-del-primary transition-colors">
          {member.name}
        </h3>
        <p className="mt-1 text-sm sm:text-base text-white leading-6">
          {member.role}
        </p>
      </div>
    </motion.a>
  );
}

export function ManagementTeam() {
  return (
    <section className="bg-del-primary-darken-3 py-12 sm:py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-(--del-max-screen-width) flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24"
        >
          {/* Left Column - Title and Description */}
          <motion.div
            variants={slideInLeft}
            className="lg:w-[500px] shrink-0 text-center sm:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-white">
              Management Team
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white leading-relaxed max-w-[399px] mx-auto sm:mx-0">
              Our management team brings over 70 years of combined experience in
              power generation, gas logistics and project development.
            </p>
          </motion.div>

          {/* Right Column - Team Grid */}
          <motion.div
            variants={staggerContainer}
            className="w-full lg:flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
