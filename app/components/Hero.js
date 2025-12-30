"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-40 pb-32 text-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          DevOps & Cloud Engineering
          <br />
          <span className="text-cyan-400">
            Built for Startups
          </span>
        </h1>

        <p className="text-base md:text-lg text-[var(--muted)] mb-10">
          Zenteq helps startups design, deploy, and operate secure,
          scalable, and cost-efficient infrastructure on AWS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
          >
            Get a Free DevOps Audit
          </a>
          <a
            href="/services/aws-devops"
            className="px-6 py-4 rounded-xl border border-[var(--border)]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </motion.section>
  );
}
