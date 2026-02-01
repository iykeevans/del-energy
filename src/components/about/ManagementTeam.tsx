"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Habeeb Alebiosu",
    role: "Chief Executive Officer",
    image: "/images/staff-habeeb-alebiosu.jpg",
  },
  {
    name: "Raymond Eromosele",
    role: "GM, Business Operations",
    image: "/images/staff-raymond-eromosele.jpg",
  },
  {
    name: "Seun Lofinmakin",
    role: "GM, Services",
    image: "/images/staff-seun-lofinmakin.jpg",
  },
  {
    name: "Mide Popoola",
    role: "GM, Commercial Operations",
    image: "/images/staff-mide-popoola.jpg",
  },
  {
    name: "Tope Opelusi",
    role: "GM, Projects",
    image: "/images/staff-tope-opelusi.jpg",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col w-full">
      {/* Image with rounded corners */}
      <div className="relative w-full aspect-[0.88] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[#f3f3f3]" />
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="mt-4 sm:mt-5">
        <h3 className="text-lg sm:text-xl font-medium text-[#003265] leading-6">
          {member.name}
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#003265] leading-6">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export function ManagementTeam() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
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
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-[#001530]">
              Management Team
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#001530] leading-relaxed max-w-[399px] mx-auto sm:mx-0">
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
