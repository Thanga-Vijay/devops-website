"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function CostOptimizationPage() {
  return (
    <>
      {/* SPLIT HERO */}
      {/* SPLIT HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AWS Cost Optimization for Startups
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8">
              Zenteq helps startups control AWS spending without compromising
              performance or reliability.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
            >
              Reduce My AWS Bill
            </a>
          </div>

          <div className="glass rounded-2xl p-8">
            <p className="font-semibold mb-4">What We Analyze</p>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>💰 Compute & Database Costs</li>
              <li>📊 Usage & Scaling Patterns</li>
              <li>📉 Underutilized Resources</li>
              <li>📈 Growth-Ready Cost Models</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FULL WIDTH BREAK */}
      <section className="py-24 bg-black/20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Spend Smarter as You Scale
          </h2>
          <p className="text-[var(--muted)]">
            Cost optimization is built into every Zenteq architecture decision.
          </p>
        </div>
      </section>

      {/* OPTIMIZATION AREAS */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {[
            "Right-Sizing Resources",
            "Auto-Scaling Policies",
            "Reserved & Savings Plans",
            "Storage Optimization",
            "Architecture Simplification",
            "Continuous Cost Monitoring",
          ].map((area) => (
            <div key={area} className="glass p-6 rounded-xl">
              <p className="font-semibold">{area}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
