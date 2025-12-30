"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AWSDevOpsClient() {
  return (
    <>
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
              AWS DevOps Services for Startups
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8">
              Zenteq designs and operates secure, scalable, and production-ready
              AWS infrastructure using modern DevOps practices.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
            >
              Talk to AWS Experts
            </a>
          </div>

          <div className="glass p-8 rounded-2xl">
            <ul className="space-y-4 text-[var(--muted)]">
              <li>✅ Terraform Infrastructure</li>
              <li>✅ ECS / EKS / Lambda</li>
              <li>✅ Secure IAM & Networking</li>
              <li>✅ Monitoring & Reliability</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FULL WIDTH BREAK */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 bg-black/20"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Built for Scale and Long-Term Growth
          </h2>
          <p className="text-[var(--muted)]">
            Every AWS architecture is reviewed for performance, reliability,
            security, and cost efficiency.
          </p>
        </div>
      </motion.section>
    </>
  );
}
