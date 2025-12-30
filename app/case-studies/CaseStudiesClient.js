"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function CaseStudiesClient() {
  return (
    <main>
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="py-32"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-[var(--muted)]">
              See how Zenteq helps startups transform fragile infrastructure
              into secure, scalable, production-ready cloud platforms.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <p className="font-semibold mb-4">What You’ll Learn</p>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>✅ Real startup challenges</li>
              <li>✅ Practical DevOps solutions</li>
              <li>✅ Measurable outcomes</li>
              <li>✅ Production-ready foundations</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CASE STUDIES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="py-28"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">

          {/* SaaS */}
          <motion.div variants={fadeUp}>
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  SaaS Startup — AWS Cost Optimization
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  Reduced AWS spend while improving stability and deployment reliability.
                </p>
              </div>
              <a
                href="/case-studies/saas-cost-optimization"
                className="mt-6 inline-block text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
              >
                View Case Study →
              </a>
            </div>
          </motion.div>

          {/* FinTech */}
          <motion.div variants={fadeUp}>
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  FinTech MVP — Production Readiness
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  Built secure, compliant, and production-ready AWS infrastructure.
                </p>
              </div>
              <a
                href="/case-studies/fintech-prod-readiness"
                className="mt-6 inline-block text-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-400 to-cyan-400 text-black font-semibold"
              >
                View Case Study →
              </a>
            </div>
          </motion.div>

        </div>
      </motion.section>
    </main>
  );
}
