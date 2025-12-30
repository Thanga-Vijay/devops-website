export const metadata = {
  title: "SaaS Cost Optimization | Zenteq Private Limited",
  description:
    "Reduce AWS spend without compromising performance. SaaS cost optimization by Zenteq.",
};

export default function SaaSCostOptimization() {
  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">
            SaaS Cost Optimization on AWS
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Zenteq helps SaaS companies gain full control over cloud spend
            while improving reliability and performance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Our Optimization Approach
            </h2>
            <ul className="text-slate-300 space-y-3">
              <li>• Rightsizing compute & databases</li>
              <li>• Auto-scaling & workload scheduling</li>
              <li>• Spot & savings plans strategy</li>
              <li>• Cost visibility dashboards</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-semibold">Typical Outcomes</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>✓ 30–50% cost reduction</li>
              <li>✓ Improved performance consistency</li>
              <li>✓ Predictable monthly cloud spend</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
