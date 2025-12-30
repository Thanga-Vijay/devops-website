"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const steps = [
  "Free audit & discovery call",
  "Clear DevOps roadmap",
  "Implementation & automation",
  "Monitoring, optimization & support",
];

export default function HowItWorks() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="py-28 bg-black/20"
    >
      {/* Section title */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold text-center mb-12"
      >
        Simple. Fast. Reliable.
      </motion.h2>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            variants={fadeUp}
            className="glass p-6 rounded-xl text-center"
          >
            <span className="text-cyan-400 font-bold text-lg">
              {i + 1}
            </span>
            <p className="mt-3 text-[var(--muted)]">
              {step}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
