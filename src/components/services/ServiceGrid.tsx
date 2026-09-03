"use client";

import { motion } from "framer-motion";
import { Service } from "@/types/service";
import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
}

const ease = [0.22, 1, 0.36, 1] as const;

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <motion.div
      variants={cardContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
    >
      {services.map((service) => (
        <motion.div key={service.slug} variants={cardAnimation} className="h-full">
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}
