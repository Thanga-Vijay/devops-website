"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function CICDPage() {
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
              CI/CD Automation for Fast-Moving Teams
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8">
              Zenteq designs CI/CD pipelines that allow startups to ship
              confidently, frequently, and safely.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
            >
              Automate My Deployments
            </a>
          </div>

          <div className="glass rounded-2xl p-8">
            <p className="font-semibold mb-4">Typical CI/CD Flow</p>
            <ol className="space-y-3 text-[var(--muted)]">
              <li>1️⃣ Code Commit</li>
              <li>2️⃣ Automated Tests</li>
              <li>3️⃣ Build & Security Scan</li>
              <li>4️⃣ Safe Deployment</li>
              <li>5️⃣ Rollback if Needed</li>
            </ol>
          </div>
        </div>
      </motion.section>

      {/* FULL WIDTH BREAK */}
      <section className="py-24 bg-black/20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ship Faster Without Breaking Production
          </h2>
          <p className="text-[var(--muted)]">
            Our pipelines are designed to minimize risk while maximizing speed.
          </p>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {[
            "GitHub Actions",
            "AWS CodePipeline",
            "Blue-Green Deployments",
            "Automated Rollbacks",
            "Secrets Management",
            "Pipeline Monitoring",
          ].map((tool) => (
            <div key={tool} className="glass p-6 rounded-xl">
              <p className="font-semibold">{tool}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
