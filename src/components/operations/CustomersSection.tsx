"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";

interface Customer {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

const customers: Customer[] = [
  {
    id: "sweetco",
    name: "SweetCo Power Plant",
    location: "Ibadan, Oyo State",
    description:
      "The SweetCo Power Plant is a 1.5MW captive power facility built to support the energy needs of SweetCo Foods, a leading candies and confectionery manufacturer.\n\nPowered by CNG and comprising a single 1.5MW MWM reciprocating engine, the plant delivers both electricity and heat through a CHP system.",
    image: "/images/customer-sweetco.jpg",
  },
  {
    id: "ipl2",
    name: "Island Power 2 (IPL2)",
    location: "Marina, Lagos State",
    description:
      "Island Power 2 is a 15MW embedded power plant serving commercial and residential customers in the Marina district of Lagos Island.\n\nThe plant operates on natural gas and features high-efficiency reciprocating engines designed for continuous baseload operation.",
    image: "/images/customer-ipl2.jpg",
  },
  {
    id: "pipp",
    name: "PIPP Power Plant",
    location: "Ibadan, Oyo State",
    description:
      "The PIPP Power Plant is a captive power facility providing reliable electricity to Premier Industrial Park in Ibadan.\n\nThe plant serves multiple industrial customers within the park with a total capacity designed to meet growing demand.",
    image: "/images/customer-pipp.jpg",
  },
  {
    id: "rumbu",
    name: "Rumbu CNG Supply",
    location: "Agbara, Lagos State",
    description:
      "Rumbu CNG Supply provides compressed natural gas to industrial customers in the Agbara industrial corridor.\n\nThe facility ensures reliable gas supply for manufacturing operations in the region.",
    image: "/images/customer-rumbu.jpg",
  },
  {
    id: "starium",
    name: "Starium CNG Supply",
    location: "Alaro City, Lekki Free Trade Zone",
    description:
      "Starium CNG Supply serves the Alaro City development in the Lekki Free Trade Zone.\n\nThe facility provides clean energy solutions for the modern industrial and commercial hub.",
    image: "/images/customer-starium.png",
  },
];

interface CustomerCardProps {
  customer: Customer;
  isExpanded: boolean;
  onToggle: () => void;
  onHover: () => void;
  onLeave: () => void;
}

function CustomerCard({
  customer,
  isExpanded,
  onToggle,
  onHover,
  onLeave,
}: CustomerCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group h-[320px] sm:h-[400px] lg:h-[550px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onToggle}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={customer.image}
          alt={customer.name}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-[50px] lg:left-[50px] lg:right-[30px] lg:max-w-[488px]">
        <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden">
          <div className="p-4 sm:p-5 lg:px-[30px] lg:pt-[30px] lg:pb-[40px]">
            {/* Title and Location */}
            <div className="space-y-1 sm:space-y-2 lg:space-y-[10px]">
              <h3 className="text-lg sm:text-xl lg:text-[32px] font-medium leading-tight sm:leading-snug lg:leading-[40px] text-[#001530]">
                {customer.name}
              </h3>
              <p className="text-sm sm:text-base lg:text-[24px] font-medium leading-tight sm:leading-snug lg:leading-[32px] text-[#003265]">
                {customer.location}
              </p>
            </div>

            {/* Description - Only shown when expanded */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pt-4 sm:pt-5 lg:pt-10 text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed lg:leading-[24px] text-[#40474f] whitespace-pre-line">
                {customer.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tap indicator for mobile */}
      <div className="absolute top-4 right-4 sm:hidden bg-white/90 rounded-full p-2 opacity-70">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#001530"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </motion.div>
  );
}

export function CustomersSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    // Toggle on tap (for mobile)
    setExpandedId(expandedId === id ? null : id);
  };

  const handleHover = (id: string) => {
    // Only expand on hover for non-touch devices
    if (window.matchMedia("(hover: hover)").matches) {
      setExpandedId(id);
    }
  };

  const handleLeave = () => {
    // Only collapse on leave for non-touch devices
    if (window.matchMedia("(hover: hover)").matches) {
      setExpandedId(null);
    }
  };

  // First customer is full width, rest are in 2x2 grid
  const firstCustomer = customers[0];
  const gridCustomers = customers.slice(1);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-(--del-max-screen-width)"
        >
          {/* Section Title */}
          <motion.div
            variants={slideInLeft}
            className="mb-8 sm:mb-10 lg:mb-[50px]"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-[#003265]">
              Our Customers
            </h2>
          </motion.div>

          {/* Customers Grid */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-4 sm:gap-6 lg:gap-[38px]"
          >
            {/* First Customer - Full Width */}
            <CustomerCard
              customer={firstCustomer}
              isExpanded={expandedId === firstCustomer.id}
              onToggle={() => handleToggle(firstCustomer.id)}
              onHover={() => handleHover(firstCustomer.id)}
              onLeave={handleLeave}
            />

            {/* Grid of remaining customers - 2x2 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[38px]">
              {gridCustomers.map((customer) => (
                <CustomerCard
                  key={customer.id}
                  customer={customer}
                  isExpanded={expandedId === customer.id}
                  onToggle={() => handleToggle(customer.id)}
                  onHover={() => handleHover(customer.id)}
                  onLeave={handleLeave}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
