"use client";
import { motion } from "framer-motion";

export default function ProblemsSolutions() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
        
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Infrastructure slowing you down?
          </h2>

          <ul className="space-y-4 text-[var(--muted)]">
            <li className="flex gap-2">❌ Manual & risky deployments</li>
            <li className="flex gap-2">❌ Rising AWS bills</li>
            <li className="flex gap-2">❌ Downtime & alert fatigue</li>
            <li className="flex gap-2">❌ No observability or ownership</li>
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 md:p-8"
        >
          <ul className="space-y-4">
            <li>✅ Automated CI/CD pipelines</li>
            <li>✅ Scalable AWS architecture</li>
            <li>✅ Monitoring, logs & alerts</li>
            <li>✅ Clean Terraform-based infrastructure</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
