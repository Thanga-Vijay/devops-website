"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const services = [
  {
    title: "CI/CD & Release Automation",
    desc: "Automated builds, testing, and zero-downtime deployments using GitHub Actions and AWS CodePipeline.",
  },
  {
    title: "AWS ECS / EKS Platforms",
    desc: "Production-ready container orchestration with secure, scalable AWS architectures.",
  },
  {
    title: "Monitoring & Observability",
    desc: "Full system visibility using CloudWatch, Prometheus, Grafana, and alerting best practices.",
  },
  {
    title: "AWS Cost Optimization",
    desc: "Reduce cloud spend through right-sizing, auto-scaling, and cost-aware architecture decisions.",
  },
  {
    title: "Infrastructure as Code",
    desc: "Terraform-based, version-controlled infrastructure for predictable and safe deployments.",
  },
  {
    title: "Security & Secrets Management",
    desc: "IAM hardening, secure secrets, audit logging, and proactive alerting.",
  },
];

export default function Services() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="py-24"
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold text-center mb-12"
      >
        What Zenteq Delivers
      </motion.h2>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <motion.div
            key={service.title}   
            variants={fadeUp}
            className="glass p-6 md:p-8 rounded-xl hover:translate-y-[-4px] transition"
          >
            <h3 className="text-lg font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.p
        variants={fadeUp}
        className="text-center mt-16 text-xl font-semibold text-cyan-400"
      >
        Your application is slow or unstable → We design and
        implement the fix.
      </motion.p>
    </motion.section>
  );
}
