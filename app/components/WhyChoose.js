"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const points = [
  {
    title: "Startup-Focused Team",
    desc: "We understand startup constraints — speed, budget, and rapid iteration.",
  },
  {
    title: "Production-Grade DevOps",
    desc: "Our engineers implement proven DevOps practices used in high-scale systems.",
  },
  {
    title: "Cost-Aware Architecture",
    desc: "We design infrastructure that balances performance, reliability, and cost.",
  },
  {
    title: "Clear Communication",
    desc: "We explain trade-offs clearly, without buzzwords or unnecessary complexity.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We work as an extension of your engineering team, not just a vendor.",
  },
];

export default function WhyChoose() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-center mb-14"
        >
          Why Startups Choose Zenteq
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-[var(--muted)]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
